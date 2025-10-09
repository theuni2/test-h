import React from 'react'
import Navbar from '../component/nav2'
import Footer from '../component/footer'
import Achievements from './body_award';
import Gallery from './gallery';
import MediaCoverage from '../projectnresearch/media';
export default function Page() {
  return (
    <div>
        <Navbar/>
        <Achievements/>
        <Gallery/>
        <MediaCoverage/>
        <Footer/>

    </div>
  )
}
