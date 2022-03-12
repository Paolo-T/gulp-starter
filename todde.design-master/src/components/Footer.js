import React from "react"
import TransitionPageIn from "./TransitionPageIn"
import ScrollToTop from "../components/ScrollToTop"

const footerItems = [
   {
      item: "LinkedIn",
      href: "https://www.linkedin.com/in/paolo-todde/",
   },
   {
      item: "Github",
      href: "https://github.com/Paolo-T",
   },
   {
      item: "Digital art",
      href: "https://www.instagram.com/roomzeroone/",
   },
   {
      item: "Email",
      href: "mailto:iampaolotodde@gmail.com",
   },
]

function Footer() {
   return (
      <TransitionPageIn>
         <footer className="w-full mt-5 md:mt-0 bg-transparent">
            <ul
               className="flex text-center justify-between
             border-t border-primary
             pt-6 pb-8"
            >
               {footerItems.map((item, i) => (
                  <a key={i} rel="noopener noreferrer" target="_blank" href={item.href}>
                     <li className="group xl:inline-block flex text-sm md:text-lg mb-3 md:mb-0 hover:text-grey transition duration-300 ease-in-out">
                        {item.item}

                        <svg
                           className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out inline-block transform rotate-45 ml-1 fill-current text-grey"
                           width="10"
                           height="10"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                           stroke="text-grey"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.7"
                              d="M5 10l7-7m0 0l7 7m-7-7v18"
                           />
                        </svg>
                     </li>
                  </a>
               ))}
               <li className="hover:text-grey transition duration-200 ease-in-out">
                  <ScrollToTop showBelow="250" />
               </li>
            </ul>
         </footer>
      </TransitionPageIn>
   )
}

export default Footer
