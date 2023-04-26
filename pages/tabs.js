import Head from "next/head";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const EjemploTabs = () => {
  return (
    <div>
      <Head>
        <title>Ejemplo de Tabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Tabs>
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <div>
                <p>Hola!!</p>
              </div>
              <div style={{ backgroundColor: "lightblue", padding: "10px" }}>
                <p>hfah ahf akgj kja faskf jfsa</p>
              </div>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default EjemploTabs;
