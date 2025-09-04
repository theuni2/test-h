import React from 'react'
import Navbar from '../component/nav2'
import Footer from '../component/footer'
import Achievements from './body_award';
import Gallery from './gallery';

export default function Page() {
  return (
    <div>
        <Navbar/>
        <Achievements/>
        <Gallery/>
        <Footer/>

    </div>
  )
}
