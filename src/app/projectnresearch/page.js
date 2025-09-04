import React from 'react'
// import Navbar from '../component/nav'
import Navbar from '../component/nav2'
import Footer from '../component/footer'
import ProjectsDetails from './detail'
import Slider from './slider'

export default function Page() {
  return (
    <div>
        <Navbar/>
         <Slider/>
        <ProjectsDetails/>
        <Footer/>

    </div>
  )
}
