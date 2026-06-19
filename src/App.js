import React from 'react';
import {
  ChakraProvider
} from '@chakra-ui/react';
import theme from "./components/background.js"
import { NavigationBar } from "./components/navbar"
import { Home } from "./main/home"
import Fonts from "./components/font"
import { AboutMe } from "./main/aboutme"
import { Works } from "./main/works"
import { Post } from "./main/gallery.js"
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Templates } from './main/templates.js';
import { Another } from './main/newfolder.js';
import { WhatIsTemplate } from "./main/whatistemplate";
import { TemplateBusiness } from "./main/template_business";
import { TemplateChungkhoan } from "./main/template_chungkhoan";
import { TemplateCokhi } from "./main/template_cokhi";
import { TemplateCokhi2 } from "./main/template_cokhi2";
import { TemplateFlower } from "./main/template_flower";
import { TemplateNoithat } from "./main/template_noithat";
import { TemplateTrading } from "./main/template_trading";
import { CYBERAPO_REV } from './main/cyberaporev.js';
import { Balatro } from './main/balatro.js';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<AboutMe />} />
          <Route path="/works/" element={<Works />} />
          <Route path="/posts/" element={<Post />} />
          <Route path="works/templates" element={<Templates />} />
          <Route path="works/another" element={<Another />} />
          <Route path="works/templates/readme" element={<WhatIsTemplate />} />
          <Route path="works/templates/template_business" element={<TemplateBusiness />} />
          <Route path="works/templates/template_chungkhoan" element={<TemplateChungkhoan />} />
          <Route path="works/templates/template_cokhi" element={<TemplateCokhi />} />
          <Route path="works/templates/template_cokhi2" element={<TemplateCokhi2 />} />
          <Route path="works/templates/template_flower" element={<TemplateFlower />} />
          <Route path="works/templates/template_noithat" element={<TemplateNoithat />} />
          <Route path="works/templates/template_trading" element={<TemplateTrading />} />
          <Route path="works/another/cyberaporev" element={<CYBERAPO_REV />} />
          <Route path="works/another/balatro" element={<Balatro />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
