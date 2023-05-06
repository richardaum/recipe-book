import * as React from "react"
import getUserLocale from "get-user-locale"
import { createSafeContext } from "react-safe-context"

type IntlContextValue = {
  locale: string
  setLocale: React.Dispatch<React.SetStateAction<string>>
}

const IntlContext = createSafeContext<IntlContextValue>("IntlProvider")

export const IntlProvider = ({ children }) => {
  const [locale, setLocale] = React.useState("en-US" ?? getUserLocale())
  return <IntlContext.Provider value={{ locale, setLocale }}>{children}</IntlContext.Provider>
}

export const useIntlContext = IntlContext.useValue
