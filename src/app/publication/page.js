import React from 'react'
// import Navbar from '../component/nav'
import Navbar from '../component/nav2'
import Footer from '../component/footer'
import Publications from './body'

export default function Page() {
  return (
    <div>
        <Navbar/>
        <Publications/>
        <Footer/>
    </div>
  )
}
