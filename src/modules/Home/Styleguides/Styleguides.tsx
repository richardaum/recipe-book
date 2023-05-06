import { Heading, Tab, TabPanel } from "@chakra-ui/react"
import path from "path"
import { useTranslation } from "src/packages/Intl"

const StyleguidesTabPanel = () => {
  const { t } = useTranslation(() => import("./Styleguides.i18n"))
  return (
    <TabPanel>
      <Heading>{t("tab")}</Heading>
    </TabPanel>
  )
}

const StyleguidesTab = () => {
  const { t } = useTranslation(async () => import("./Styleguides.i18n"))
  return <Tab>{t("tab")}</Tab>
}

StyleguidesTab.displayName = "StyleguidesTab"
StyleguidesTabPanel.displayName = "StyleguidesTabPanel"

export const Styleguides = {
  Tab: StyleguidesTab,
  TabPanel: StyleguidesTabPanel,
}
