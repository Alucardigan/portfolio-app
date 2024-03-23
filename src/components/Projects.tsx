import React, { useState } from "react";
import { Grid, GridItem, Box, Image, Heading, Text, Button,Card,Stack,CardBody,CardFooter, useStatStyles, SlideFade, Flex, Icon } from "@chakra-ui/react";
import { FaGithub, FaRocket } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

export function Projects() {
  // You can store your project data in a JSON file and import it here
  // For simplicity, I'm using an array of objects
  
  const projects = [
    {
      title: "Multiplayer Chess Game",
      image: "/assets/chess-photo.png",
      description: "A multiplayer chess game built with Typescript, React, Node.js, Express, and Socket.io.",
      gitHubUrl: "https://github.com/Alucardigan/chess_app",
      deploymentUrl: "https://alucardigan.github.io/chess_app/"
    },
    {
      title: "UniHack 2022 Project: Trashy",
      image: "/assets/trashyIcon.png",
      description: "A mobile app that helps companies who have waste products/material with those who want to utilize it. Designed and built in 2 days with Vue.js, the project ended up winning the first timers award 🏆",
      deploymentUrl: "https://recyclingapp-342421.web.app/",
      devPostUrl:"https://devpost.com/software/new-leaf-qgxbwh"
    },
    {
      title: "Youtube Comments Sentiment Analysis Discord Bot",
      image: "/assets/botlogo.jpeg",
      description:"A discord bot that analyses the sentiment of youtube comments and provides a summary of the sentiment. Built with Python,NLP Vader, Google API and Discord.py",    
    },
    {
      title: "Compatible",
      image: "/assets/Compatible.png",
      description: "A startup for a new dating app that hopes to revitalise the dating scene. Currently in development",
      url: "https://johndoe.com/weather-app",
    }
  ];
  const [projectIdx,setProjectIdx] = useState(0);
  function nextClick(){
    setProjectIdx(projectIdx+1)
  }
  function prevClick(){
    setProjectIdx(projectIdx-1)
  }
  
  return (
    <Flex direction="column" h="100vh" id="projects" >
      <Flex > 
      <Heading as="h2" size="lg" mb={4}>
        My Projects
      </Heading>
      </Flex>
      <Flex justify="center" align="center" flex="1">
      <SlideFade in={true} offsetY={"20px"}>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        >
        <Image
            objectFit='fill'
            width={{ base: '100%', sm: '300px' }} 
            height={{ base: 'auto', sm: '300px' }}
            src={process.env.PUBLIC_URL + projects[projectIdx].image}
            alt='Caffe Latte'
        />
        <Stack>
            <CardBody width={{ base: '100%', sm: '1000px' }} height={{ base: '100%', sm: '1000px' }}>
              <Heading size='md'>{projects[projectIdx].title}</Heading>
              <Text py='2'>
                  {projects[projectIdx].description}
              </Text>
              <Button variant='outline' leftIcon={<Icon as={FaGithub}/>} onClick={() => window.open(projects[projectIdx].gitHubUrl)} display={projects[projectIdx].gitHubUrl ? 'inline-flex' : 'none'} > Github</Button>
              <Button variant='outline' leftIcon={<Icon as={FaRocket}/>} onClick={() => window.open(projects[projectIdx].deploymentUrl)} display={projects[projectIdx].deploymentUrl ? 'inline-flex' : 'none'} > Deployment</Button>
              <Button variant='outline' leftIcon={<Icon as={SiDevpost}/>} onClick={() => window.open(projects[projectIdx].devPostUrl)} display={projects[projectIdx].devPostUrl ? 'inline-flex' : 'none'} > DevPost</Button>
            </CardBody>

        <CardFooter>
            {(projectIdx===0)?null:<Button variant='solid' colorScheme='red' onClick={prevClick}> Previous </Button>}
            {(projectIdx===projects.length-1)?null:<Button variant='solid' colorScheme='blue' onClick={nextClick}> Next </Button>}
        </CardFooter>
        </Stack>
        </Card>
        </SlideFade>
      </Flex>
    </Flex>
  );
}
