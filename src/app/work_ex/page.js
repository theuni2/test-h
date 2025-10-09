import React from 'react'
// import Navbar from '../component/nav'
import Navbar from '../component/nav2';
import Footer from '../component/footer';
// import Work_ex from './work_ex';
import Body from './body';
import Gallery from './gallery';
import MediaCoverage from '../projectnresearch/media';


export default function Page() {
  return (
    <div>

<Navbar/>
{/* <Work_ex/> */}
<Body/>
<Gallery/>
<MediaCoverage/>
<Footer/>

    </div>
  )
}
