import React from 'react'
// import Navbar from '../component/nav'
import Navbar from '../component/nav2';
import Footer from '../component/footer'
import Hero from './hero';
// import Slider from '../projectnresearch/slider'
import Work_ex from '../work_ex/work_ex';
import SportsSection from './sports';
import Gallery from './gallery';

export default function Page() {
  return (
    <div>
<Navbar/>
{/* <Hero/>
{/* <Slider/> */}
{/* <Work_ex/>  */}
<SportsSection/>
<Gallery/>
<Footer/>
    </div>
  )
}
