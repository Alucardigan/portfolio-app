import React from "react";
import { Box, Heading, Text, SimpleGrid, Icon,Image, Center, Flex } from "@chakra-ui/react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { IconType } from "react-icons";

interface skill{
    name: string,
    icon_link:string
}
interface skillType{
    category: string,
    items: skill[]
}
export function Skills() {
    
  // You can store your skill data in a JSON file and import it here
  // For simplicity, I'm using an array of objects
  interface skillType{
    name:string, 
    iconLink:string
  }
  const skills= [
    {
      category: "Languages",
      items: [
        { name: "HTML",iconLink:"/assets/html-5.svg"},
        { name: "CSS",iconLink:"/assets/css-3.svg"},
        { name: "C",iconLink:"/assets/c.svg"},
        { name: "C#",iconLink:"/assets/c-sharp.svg"},
        { name: "Java",iconLink:"/assets/java.svg"},
        { name: "Javascript",iconLink:"/assets/javascript.svg"},
        { name: "Typescript",iconLink:"/assets/typescript-icon.svg"},
        { name: "Python",iconLink:"/assets/python.svg"},
        { name: "MySQL",iconLink:"/assets/mysql-icon.svg"}
        
      ]
    },
    {
        category: "Technologies/Frameworks",
        items:[
            {name:"Git",iconLink:"/assets/git-icon.svg"},
            {name:"MongoDB",iconLink:"/assets/mongodb-icon.svg"},
            {name:"MySQL",iconLink:"/assets/mysql-icon.svg"},
            {name:"NodeJS",iconLink:"/assets/nodejs-icon.svg"},
            {name:"Pandas",iconLink:"/assets/pandas-icon.svg"},
            {name:"Numpy",iconLink:"/assets/numpy.svg"},
            {name:"React",iconLink:"/assets/react.svg"},
            {name:"VueJS",iconLink:"assets/vue.svg"},
            {name:"PyTorch",iconLink:"pytorch-icon.svg"}
        ]
    }
    // You can add more categories and items here
  ];

  return (
    <Box as="section" id="skills" p={4}>
      <Heading as="h2" size="lg" mb={4}>
        My Skills
      </Heading>
      {skills.map((skill) => (
        <Box key={skill.category} mb={4}mx={20}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            {skill.category}
          </Text>
          <SimpleGrid minChildWidth={'120px'} spacing={4} mx={"20px"}>
            {skill.items.map((item) => (
              <Flex key={item.name} textAlign="center" flexDirection={"column"} alignItems={"center"}>
                
                <Image as={"img"} src={process.env.PUBLIC_URL+item.iconLink} alignSelf={"center"} objectFit={'fill'} boxSize={'100px'} alt={item.name}/>
                <Text fontSize="sm">{item.name}</Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </Box>
  );
}