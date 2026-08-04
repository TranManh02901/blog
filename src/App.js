import React from 'react';
import { ColorModeProvider } from './hooks/useColorMode';
import { NavigationBar } from "./components/navbar"
import { Home } from "./main/home"
import { AboutMe } from "./main/aboutme"
import { Works } from "./main/works"
import { Blogs } from './main/blogs';
import { BlogDetail } from './main/blog_detail';
// import { Post } from "./main/gallery.js"
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
// import { CYBERAPO_REV } from './main/cyberaporev.js';
// import { Balatro } from './main/balatro.js';

function App() {
  return (
    <ColorModeProvider>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<AboutMe />} />
          <Route path="/works/" element={<Works />} />
          <Route path="/blogs/" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          {/* <Route path="/posts/" element={<Post />} /> */}
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
          {/* <Route path="works/cyberaporev" element={<CYBERAPO_REV />} /> */}
          {/* <Route path="works/balatro" element={<Balatro />} /> */}
        </Routes>
      </Router>
    </ColorModeProvider>
  );
}

export default App;
