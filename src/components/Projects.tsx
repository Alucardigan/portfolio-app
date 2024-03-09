import React, { useState } from "react";
import { Grid, GridItem, Box, Image, Heading, Text, Button,Card,Stack,CardBody,CardFooter, useStatStyles, SlideFade } from "@chakra-ui/react";

export function Projects() {
  // You can store your project data in a JSON file and import it here
  // For simplicity, I'm using an array of objects
  
  const projects = [
    {
      title: "Todo App",
      image: "todo-app.png",
      description: "A simple todo app built with TypeScript, React, and Chakra UI.",
      url: "https://johndoe.com/todo-app",
    },
    {
      title: "Blog Site",
      image: "blog-site.png",
      description: "A personal blog site built with Node.js, Express, MongoDB, and Bootstrap.",
      url: "https://johndoe.com/blog-site",
    },
    {
      title: "Weather App",
      image: "weather-app.png",
      description: "A weather app that shows the current weather and forecast for any city using the OpenWeather API.",
      url: "https://johndoe.com/weather-app",
    },
  ];
  const [projectIdx,setProjectIdx] = useState(0);
  function nextClick(){
    setProjectIdx(projectIdx+1)
  }
  function prevClick(){
    setProjectIdx(projectIdx-1)
  }
  
  return (
    <Box as="section" id="projects" p={4}>
      <Heading as="h2" size="lg" mb={4}>
        My Projects
      </Heading>
      <SlideFade in={true} offsetY={"20px"}>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        >
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
            alt='Caffe Latte'
        />
        <Stack>
            <CardBody>
                <Heading size='md'>{projects[projectIdx].title}</Heading>

                <Text py='2'>
                    {projects[projectIdx].description}
            </Text>
            </CardBody>

        <CardFooter>
            {(projectIdx===0)?null:<Button variant='solid' colorScheme='red' onClick={prevClick}> Previous </Button>}
            {(projectIdx===projects.length-1)?null:<Button variant='solid' colorScheme='blue' onClick={nextClick}> Next </Button>}
        
        
        </CardFooter>
        </Stack>
        </Card>
        </SlideFade>
    </Box>
  );
}
