import { Box,Card,CardBody,CardHeader,Heading, StackDivider,Stack,Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { useState } from "react";
import {CheckIcon} from '@chakra-ui/icons'

interface CompanyDescription{
    companyName: string,
    title: string,
    description: string[]
}
export function Experience(){
    let Experiences:CompanyDescription[] = [
        {
            companyName:"Coles",
            title: "Software Architect Intern",
            description: [`
            Worked as a architecture and strategy intern focusing on
            improving governance processes and identifying key areas of
            improvement across the organization`,`
            Helped make decisions that improved governance of tech debt
            and designed a new pattern central library that would be used
            to store patterns enterprise wide, elevating the need to hunt for
            patterns and their governance data from multiple Sharepoint.`,`
            Utilized enterprise architecture tool LeanIX to showcase the tech
            architecture current state to enable strategy team and enterprise
            architect team make better decisions.`,`
            Independently created VBA scripts that were utilized to add
            data to LeanIX at a much higher speed and accuracy than
            previous methods`,`
            Communicated business requirements across multiple domains
            and provided clear cut presentations to enterprise architects and
            C-suite.
            `]
        }
    ];
    const [experienceIdx,setExperienceIdx] = useState(0);
    return (
        <Box as="section" id="experience" p={4}>
            <Card>
                <CardHeader>
                    <Heading size='md'> My Experience</Heading>
                </CardHeader>
                <CardBody>
                    <Stack divider={<StackDivider/>} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>Company Name
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                {Experiences[experienceIdx].companyName}
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>Title
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                {Experiences[experienceIdx].title}
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>description
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                <List>
                                {Experiences[experienceIdx].description.map((point)=><ListItem><ListIcon as={CheckIcon}/>{point}</ListItem>)}
                                </List>
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Box>

    );
}