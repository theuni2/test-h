// import Image from "next/image";
import Navbar from "./component/nav";
import Footer from "./component/footer";
import Home_comp from './component/home';
import AboutMe from './component/hero';
import CoreValues from "./component/core";
import LeadershipIdentities from "./component/leadershipsec";
// import Hero from "./component/hero";

export default function Home() {
  return (
    <div className="bg-gray-50">
<Navbar/>

{/* <Hero/> */}

<Home_comp/>
<AboutMe/>
<CoreValues/>
<LeadershipIdentities/>
<Footer/>
    </div>
  );
}
