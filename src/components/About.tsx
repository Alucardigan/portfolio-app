import { AbsoluteCenter, Box,Heading,Text,List,ListItem,ListIcon ,Flex,Link} from "@chakra-ui/layout"
import {ChevronRightIcon} from '@chakra-ui/icons'
import { Button, Grid, GridItem, Icon } from "@chakra-ui/react";
import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export function About() {
    const hello:string = "Hi, I'm Thejas"
    const introduction:string = `I am a passionate software engineer based in Melbourne, Austria studying 
    a Bachelor of Engineering (Honours) majoring in Software development. I've been learning to code from a young age 
    and have learnt different technologies from multiple fields during my university experience. I am always looking 
    for new oppurtunities to grow and learn. Feel free to check out some of projects and experiences below or contact me directly via LinkedIn.`
    const githubLink = "https://github.com/Alucardigan"
    const linkedInLink = "https://www.linkedin.com/in/thejas-thekkekara-vinod/"
    const resumeLink = "https://drive.google.com/file/d/1lFYlTjP3PLuQd-ODsab15UVryyX6EWC8/view?usp=drive_link"
    return (
        <Flex as="section" id="about" height="100vh" alignItems="center" justifyContent="center" p={4} mx="10%">
          <Box>
            <Heading as="h2" size="lg" mb={2}>
              {hello}
            </Heading>
            <Text fontSize="lg" mb={4}>
              {introduction}
            </Text>
            <Grid templateColumns='repeat(3,0fr)' gap={3}>
              <GridItem>
                <Button variant='outline' leftIcon={<Icon as={FaGithub}/>} onClick={() => window.open(githubLink)}> Github</Button> 
              </GridItem>
              <GridItem>
                <Button variant='outline' leftIcon={<Icon as={FaLinkedin}/>} onClick={() => window.open(linkedInLink)}> LinkedIn</Button> 
              </GridItem>
              <GridItem>
                <Button variant='outline' leftIcon={<Icon as={FaFileAlt}/>} onClick={() => window.open(resumeLink)}> Resume</Button> 
              </GridItem>
            </Grid>
          </Box>
        </Flex>
      );
    }
