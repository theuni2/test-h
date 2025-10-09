import React from 'react'
// import Navbar from '../component/nav'
import Navbar from '../component/nav2'
import Footer from '../component/footer'
import Publications from './body'
import MediaCoverage from '../projectnresearch/media'

export default function Page() {
  return (
    <div>
        <Navbar/>
        <Publications/>
        <MediaCoverage/>
        <Footer/>
    </div>
  )
}
