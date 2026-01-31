import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Showcase from './components/Showcase';
import Performance from './components/Performance';
import Features from './components/Features';
import Highligths from './components/Highligths';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger)
const App = () => {
  return (
    <main>
      <NavBar></NavBar>
      <Hero></Hero>
      <ProductViewer></ProductViewer>
      <Showcase></Showcase>
      <Performance></Performance>
      <Features></Features>
      <Highligths></Highligths>
      <Footer></Footer>
    </main>
  )
}

export default App