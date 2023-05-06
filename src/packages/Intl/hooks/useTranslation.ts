import * as React from "react"
import { PromiseReturnType } from "blitz"
import { useIntlContext } from "../providers"

type Translations = Record<string, Record<string, string>>

export const useTranslation = <
  GetTranslations extends () => Promise<{ translations: Translations }>,
  TKey extends string
>(
  getTranslations: GetTranslations
) => {
  const { locale } = useIntlContext()
  const [translations, setTranslations] = React.useState<Translations>()

  React.useEffect(() => {
    void (async () => {
      const { translations } = await getTranslations()
      setTranslations(translations)
    })()
  }, [getTranslations])

  type Key = keyof PromiseReturnType<GetTranslations>["translations"]

  return {
    t: (key: Key) => {
      const translationByLocale = translations?.[key as TKey]
      const translation = translationByLocale?.[locale]
      return translation ?? (key as string)
    },
  }
}
