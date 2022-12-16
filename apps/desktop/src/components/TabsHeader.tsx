import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

export const TabsHeader = () => {
  return (
    <Tabs isFitted variant={'enclosed'} className={'float-left'}>
      <TabList>
        <Tab>Editor</Tab>
        <Tab>Live View</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>Test!</p>
        </TabPanel>

        <TabPanel>
          <p>Testing!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
};
