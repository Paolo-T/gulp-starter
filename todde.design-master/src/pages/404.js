import React from "react"
import SEO from "../components/Seo"
import { Link } from "gatsby"
import TransitionPageIn from "../components/TransitionPageIn"

function NotFoundPage() {
   return (
      <>
         <SEO
            keywords={[
               `UI Design`,
               `Product Design`,
               `Product Designer`,
               `UX Designer`,
               `User Experience`,
               `App`,
               `Web Designer`,
               `Front-end Developer`,
               `Portfolio`,
               `Brighton`,
               `UK`,
            ]}
            title="404: Not found"
         />

         <TransitionPageIn>
            <div className="mt-32 sm:mt-32 md:mt-0">
               <div className="w-8/12 py-28">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl mb-12"
                  style={{ lineHeight: "4rem" }}>
                     Looks like the page you are looking for is not here...
                  </h1>

                  <Link
                     to="/"
                     className="inline-block bg-primary hover:bg-yellow-400 text-dark
                  focus:outline-none transition duration-200 ease-in-out font-header text-2xl md:text-2xl py-3
                  px-10 rounded"
                  >
                     Let's go home
                  </Link>
               </div>
            </div>
         </TransitionPageIn>
      </>
   )
}

export default NotFoundPage
