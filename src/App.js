import React from 'react';
import {
  ChakraProvider
} from '@chakra-ui/react';
import theme from "./components/background.js"
import {NavigationBar} from "./components/navbar"
import {Home} from "./main/home"
import Fonts from "./components/font"
import {AboutMe} from "./main/aboutme"
import {Works} from "./main/works"
import {Post} from "./main/gallery.js"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { FlareOn9 } from './main/flareon9.js';
import { Another } from './main/newfolder.js';
import {WhatIsFlareOn} from "./main/whatisflareon";
import {Flaredle} from "./main/flaredle";
import {PixelPoker} from "./main/pixelpoker"
import {Magic8Ball} from "./main/magic8ball"
import { DarnMice } from './main/darnmice.js';
import {T8} from "./main/t8.js"
import {Alamode} from "./main/alamode"
import { Anode } from './main/anode.js';
import { CYBERAPO_REV } from './main/cyberaporev.js';
import { Balatro } from './main/balatro.js';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts/>
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about/" element={<AboutMe/>} />
          <Route path="/works/" element={<Works/>} />
          <Route path="/posts/" element={<Post/>} />    
          <Route path="works/flareon9" element={<FlareOn9/>}/>  
          <Route path="works/another" element={<Another/>}/>  
          <Route path="works/flareon9/readme" element={<WhatIsFlareOn/>}/> 
          <Route path="works/flareon9/01" element={<Flaredle/>}/>
          <Route path="works/flareon9/02" element={<PixelPoker/>}/>
          <Route path="works/flareon9/03" element={<Magic8Ball/>}/>
          <Route path="works/flareon9/04" element={<DarnMice/>}/>
          <Route path="works/flareon9/05" element={<T8/>}/>
          <Route path="works/flareon9/06" element={<Alamode/>}/>
          <Route path="works/flareon9/07" element={<Anode/>}/>
          <Route path="works/another/cyberaporev" element={<CYBERAPO_REV/>}/>
          <Route path="works/another/balatro" element={<Balatro/>}/>
        </Routes>
      </Router> 
    </ChakraProvider>
  );
}

export default App;
