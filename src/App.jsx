import { useEffect, useState } from 'react';
import './App.css'
import * as API from './services/launches';
import { Heading, Box, Text, Spacer, Flex, Tag, Button, Icon } from '@chakra-ui/react'
import { BsFillCalendarDateFill } from 'react-icons/bs';
import dayjs from "dayjs";
import "dayjs/locale/es";


function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
    console.log("que esta pasando: ", launches);
  }, []);

  return (
    <>
      <Heading textAlign='center' mt='2'>SpaceX Launches</Heading>
      {launches.map((launch) => (
        <section key={launch.flight_number}>
          <Box bg='gray' borderRadius='lg' bgColor='gray.100' p={4} m={4}>
            <Flex mb='3'>

            
            <img src={launch.links.mission_patch_small} width={100} />
            <Text fontSize='2xl' ml='2'>
              Mission <strong>{launch.mission_name}</strong>  ({launch.launch_year})
            </Text>
            <Spacer />
            <Tag size='sm' colorScheme={launch.launch_success ? 'teal' : 'red'} height='10'>
              {launch.launch_success ? 'Success' : 'Failure'}
            </Tag>
            </Flex>

            <Flex align='center'>
              <Icon as={BsFillCalendarDateFill} color='gray.500' />
            
            <Text fontSize='sm' ml='2'>
            {dayjs(launch.launch_date_local).locale("es").format("D MMMM, YYYY")}
            </Text>
            </Flex>

            <Button mt='3' colorScheme='telegram'>Mission Details</Button>
           
          </Box>



        </section>
      ))}


    </>
  )
}

export default App
