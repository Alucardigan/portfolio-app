import { AbsoluteCenter, Box,Heading,Text,List,ListItem,ListIcon ,Flex,Link} from "@chakra-ui/layout"
import {ChevronRightIcon} from '@chakra-ui/icons'

export function About() {
    let hello = "Hi, I'm Thejas"
    let introduction:string = `I am a passionate software engineer based in Melbourne, Austria studying 
    a Bachelor of Engineering (Honours) majoring in Software development. I've been learning to code from a young age 
    and have learnt different technologies from multiple fields during my university experience. I am always looking 
    for new oppurtunities to grow and learn. Feel free to check out some of projects and experiences below.`
    return (
        <Flex as="section" id="about" height="100vh" alignItems="center" justifyContent="center" p={4} mx="10%">
          <Box>
            <Heading as="h2" size="lg" mb={2}>
              {hello}
            </Heading>
            <Text fontSize="lg" mb={4}>
              {introduction}
              <Link href="https://github.com/johndoe" color="blue.500" isExternal>
                GitHub
              </Link>{" "}
              profile, my{" "}
              <Link href="https://johndoe.com/resume.pdf" color="blue.500" isExternal>
                resume
              </Link>
              , or my{" "}
              <Link href="https://twitter.com/johndoe" color="blue.500" isExternal>
                Twitter
              </Link>{" "}
              account to learn more about me.
            </Text>
          </Box>
        </Flex>
      );
    }
