import React from "react";
import { Center, Flex, Grid, Text } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import { Waypoint } from "react-waypoint";
import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";

const tab = new Array(30).fill(0);

const App = () => {
  return (
    <Tabs defaultIndex={1}>
    
<TabList  color="white"    bg="gray.800"
>
  <Tab>
    Mapped values
  </Tab>
  <Tab>
    Single Skeleton Loaded 
  </Tab>
</TabList>

<TabPanels      bg="gray.800"
>
  <TabPanel      bg="gray.800"
>
  <Flex
      w="100%"
      h="300vh"
      bg="gray.800"
      p="40px 20px 20px 40px"
      direction="column"
    >
      <Flex mx="auto">
        <Grid templateColumns="repeat(5, 6fr)" w="100%" gap={"6"}>
          {" "}
          {tab.map(() => {
            return (
              <Skeleton w="250px" h="450px"  borderRadius="12px" />
            );
          })}
        </Grid>

        
      </Flex>
      <Flex
        mx="auto"
        w="20%"
        bg="gray.400"
        borderRadius="12px"
        textAlign="center"
        mt="50px"
        justifyContent="center"
      >
          <Waypoint
            onEnter={()=>console.log("Entered waypoint")}
          >
            <Text>Waypoint !</Text>
          </Waypoint>
      </Flex>
    </Flex>
  </TabPanel>
 <TabPanel>
 <Flex
      w="100%"
      h="300vh"
      bg="gray.800"
      p="40px 20px 20px 40px"
      direction="column"
    >
      <Flex mx="auto">
        
        <Skeleton w="1200px" h="150vh" borderRadius="12px"/>

        
      </Flex>
      <Flex
        mx="auto"
        w="20%"
        bg="gray.400"
        borderRadius="12px"
        textAlign="center"
        mt="50px"
        justifyContent="center"
      >
          <Waypoint
            onEnter={()=>console.log("Entered waypoint")}
          >
            <Text>Waypoint !</Text>
          </Waypoint>
      </Flex>
    </Flex>
 </TabPanel>
</TabPanels>
    </Tabs>
    
   
  );
};

export default App;
