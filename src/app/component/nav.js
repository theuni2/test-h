// // components/Navbar.jsx
// "use client";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <header className="bg-white border-b border-gray-200">
//       <div className="container mx-auto flex flex-wrap p-4 items-center justify-center md:justify-between">
        
//         {/* Logo + Name */}
//         <Link
//           href="/"
//           className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             className="w-8 h-8 text-indigo-600"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//           </svg>
//           <span className="ml-2 text-lg font-semibold text-indigo-600">
//             Humayl Fazal
//           </span>
//         </Link>

//         {/* Navigation Links */}
//         <nav className="w-full md:w-auto flex flex-wrap justify-center md:justify-end text-sm md:text-base text-indigo-700">
//           <Link href="/" className="mr-5 hover:text-black transition">
//             Home
//           </Link>
//            <Link href="/compound_activity#projects" className="mr-5 hover:text-black transition">
//             Projects & Research
//           </Link>
//            <Link href="/compound_activity#projects" className="mr-5 hover:text-black transition">
//             Publications
//           </Link>
          

//           <Link href="/leadership" className="mr-5 hover:text-black transition">
//             Leadership
//           </Link>
//           <Link href="/compound_activity#sports" className="mr-5 hover:text-black transition">
//             Sports
//           </Link>
         
  
//           <Link href="/compound_activity#workex" className="mr-5 hover:text-black transition">
//             Work Experience
//           </Link>
//           <Link href="/awards" className="mr-5 hover:text-black transition">
//           Awards & Achievements
//           </Link>
//         </nav>

//       </div>
//     </header>
//   );
// }


// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const menuItems = [
//     { label: "HOME", href: "/" },
//     { label: "Projects & Research", href: "/projectnresearch" },
//     { label: "Publications", href: "/publication" },
//     { label: "Leadership", href: "/leadership" },
//     { label: "Sports", href: "/sports" },
//     { label: "Work Experience", href: "/work_ex" },
//     { label: "Awards & Achievements", href: "/awards" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-white shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center px-8 py-4">
//         <div
//           className={`font-bold text-lg ${
//             scrolled ? "text-blue-950" : "text-white"
//           }`}
//         >
//          Humayl Fazal

//         </div>

//         <div className="flex space-x-8">
//           {menuItems.map((item, index) => (
//             <Link
//               key={index}
//               href={item.href}
//               className={`text-sm font-medium tracking-wide transition-colors ${
//                 scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-200"
//               } ${
//                 item.label === "HOME" && scrolled
//                   ? "border border-black px-3 py-1"
//                   : ""
//               }`}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icons
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // add weights you’ll use
});


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Projects & Research", href: "/projectnresearch" },
    { label: "Publications", href: "/publication" },
    { label: "Leadership", href: "/leadership" },
    { label: "Sports", href: "/sports" },
    { label: "Work Experience", href: "/work_ex" },
    { label: "Awards & Achievements", href: "/awards" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all ${ptSerif.className} duration-300 ${
        scrolled ? "bg-[#d6d6d6] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-8 py-4">
        {/* Brand */}
        <div
          className={`font-bold text-lg ${
            scrolled ? "text-blue-950" : "text-[#d6d6d6]"
          }`}
        >
          Humayl Fazal
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                scrolled
                  ? "text-blue-950 hover:text-gray-600"
                  : "text-[#d6d6d6] hover:text-gray-200"
              } ${
                item.label === "HOME" && scrolled
                  ? "border border-black px-3 py-1"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={26} className={scrolled ? "text-black" : "text-white"} />
          ) : (
            <Menu size={26} className={scrolled ? "text-black" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className={`md:hidden transition-all duration-300 ${
            scrolled ? "bg-[#d6d6d6]" : "bg-black/80"
          }`}
        >
          <div className="flex flex-col space-y-4 px-6 py-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  scrolled
                    ? "text-black hover:text-gray-600"
                    : "text-white hover:text-gray-200"
                }`}
                onClick={() => setIsOpen(false)} // close on click
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
