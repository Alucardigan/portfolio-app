import * as  React from 'react';
import { ChakraProvider,Button, Box, position } from '@chakra-ui/react'

import './App.css';
import { NavBar } from './components/Navbar';
import { About } from './components/About';
import { Projects } from './components/Projects';
import ReactFullpage from "@fullpage/react-fullpage";
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';



function App() {
  return (
    (
      <ReactFullpage
        //fullpage options
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {1000} /* Options here */
    
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <ChakraProvider>
                
                <div className="section">
                  <NavBar fullpageApi={fullpageApi}/>
                  <About/>
                  <Button width={"100%"} onClick={()=> fullpageApi.moveSectionDown() }>Next</Button>
                </div>
                <div className="section">
                  <NavBar fullpageApi={fullpageApi}/>
                  <Box minHeight="100vh" p={4}>
                    <Experience/>
                    <Button width={"100%"} onClick={()=> fullpageApi.moveSectionDown()} position={"absolute"} bottom={0}>Next</Button>
                  </Box>
                </div>
                <div className="section">
                  <NavBar fullpageApi={fullpageApi}/>
                  <Box minHeight="100vh" p={4}>
                    <Projects/>
                    <Button width={"100%"} onClick={()=> fullpageApi.moveSectionDown()} position={"absolute"} bottom={0}>Next</Button>
                  </Box>
                </div>
                <div className="section">
                  <NavBar fullpageApi={fullpageApi}/>
                  <Box minHeight="100vh" p={4}>
                    <Skills/>
                    
                  </Box>
                </div>
                
              </ChakraProvider>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    )
  );
}

export default App;
