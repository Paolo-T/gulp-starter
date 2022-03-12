import React from "react"
import SEO from "../components/Seo"
// import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import TransitionPageIn from "../components/TransitionPageIn"
import TransitionInview from "../components/TransitionInview"
import ImgTiles from "../components/ImgTiles"
import About from "../components/sections/About"
import Recommendations from "../components/sections/Recommendations"
import SideProjects from "../components/sections/SideProjects"
import Hero from "../components/sections/Hero"

function Home() {
   return (
      <>
         <SEO
            keywords={[
               `UI Design`,
               `UX Design`,
               `User Experience`,
               `Web Designer`,
               `Product Designer`,
               `Front-end Developer`,
               `Portfolio`,
               `Brighton`,
               `UK`,
            ]}
            title="Paolo Todde | User Interface Designer | One pixel at the time."
         />

         <TransitionPageIn>

            <TransitionInview>
               <Hero />
            </TransitionInview>

            <TransitionInview>
               <ImgTiles />
            </TransitionInview>

            <TransitionInview>
               <About />
            </TransitionInview>

            <TransitionInview>
               <Recommendations />
            </TransitionInview>

            <TransitionInview>
               <SideProjects />
            </TransitionInview>

         </TransitionPageIn>
      </>
   )
}

export default Home
