// components/Footer.jsx
import Link from "next/link";
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // add weights you’ll use
});

export default function Footer() {
  return (
    <footer className="bg-[#d6d6d6] border-t border-gray-200 text-blue-950 body-font">
      <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        
        {/* Logo + Name */}
        <Link
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-8 h-8 text-blue-950"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className={`ml-2 text-lg font-semibold text-blue-950 ${ptSerif.className} `}>Humayl Fazal</span>
        </Link>

        {/* Copyright */}
        {/* <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} Humayl Fazal 
      
        </p> */}

        {/* Social Icons */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-3">
        
          <Link href="https://www.linkedin.com/in/humayl-fazal-3b1a11240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-gray-500 hover:text-indigo-600 transition">
            {/* LinkedIn */}
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0"
              className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" 
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 
                2 2 0 00-2 2v7h-4v-7a6 6 0 
                016-6zM2 9h4v12H2z">
              </path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </Link>
        </span>
      </div>
    </footer>
  );
}
