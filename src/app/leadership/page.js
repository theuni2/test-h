import React from 'react'
import Section_rl from '../component/leadership/section_rl'
// import Navbar from '../component/nav'
import Navbar from '../component/nav2';
import Hero from '../component/hero';
import Leadership from './body';
import Footer from '../component/footer';

export default function Page() {
  return (
    <div>
        <Navbar/>
        {/* <Hero/> */}
        <Leadership/>
        {/* <Section_rl/> */}
        <Footer/>
    </div>
  )
}
