import Head from "next/head";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const EjemploTabs = () => {
  return (
    <div className="container">
      <Head>
        <title>Ejemplo de Tabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Tabs>
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </main>
    </div>
  );
};

export default EjemploTabs;
