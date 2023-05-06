import { TabList, TabPanels, Tabs } from "@chakra-ui/react"
import Layout from "src/core/layouts/Layout"
import { Styleguides } from "src/modules/Home"

export const Home = () => {
  return (
    <Layout title="Home">
      <Tabs>
        <TabList h="16" display="flex">
          <Styleguides.Tab />
        </TabList>

        <TabPanels mt="60px">
          <Styleguides.TabPanel />
        </TabPanels>
      </Tabs>
    </Layout>
  )
}

export default Home
