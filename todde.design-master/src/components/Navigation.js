import React from "react"
import { Link } from "gatsby"
import TransitionInview from "./TransitionInview"

function Navigation() {
   const pageLocation = typeof window !== "undefined" ? window.location.pathname : ""
   // const aboutPage = pageLocation === "/about"

   return (
      <header className="w-full bg-transparent">
         <TransitionInview>
            <nav className="bg-transparent pt-10 pb-2 border-b border-primary">
               <div>
                  <ul className="flex justify-between">
                     <li className="md:flex-1">
                        <Link to="/">
                           <span className="inline-block text-base md:text-lg md:pt-2 pb-1 align-baseline mr-5 hover:text-grey transition duration-300 ease-in-out">
                              Paolo Todde
                           </span>
                        </Link>
                     </li>
                     <ul className="md:flex-1 flex justify-end">
                        <li className="hover:text-grey transition duration-300 ease-in-out">
                           <Link to="#about">
                              <span className="inline-block text-base md:text-lg md:pt-2 pb-1 align-baseline">
                                 About
                              </span>
                           </Link>
                        </li>
                        <li className="hover:text-grey transition duration-300 ease-in-out ml-16">
                           <a href="mailto:iampaolotodde@gmail.com" rel="noopener noreferrer">
                              <span className="inline-block text-base md:text-lg md:pt-2 pb-1 align-baseline">
                                 Email
                              </span>
                           </a>
                        </li>
                     </ul>
                  </ul>
               </div>
            </nav>
         </TransitionInview>
      </header>
   )
}

export default Navigation
