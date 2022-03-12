import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

function About() {
   const data = useStaticQuery(graphql`
      query aboutImages {
         profileImg: file(relativePath: { eq: "shared/profile-img.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
      }
   `)

   return (
      <section id="about" className="mt-24 md:mt-10 md:mb-10">
         <div className="md:flex px-8 pb-10 md:pb-20 items-center">
            <GatsbyImage
               image={data.profileImg.childImageSharp.gatsbyImageData}
               alt="Paolo illustration"
               className="w-5/12 md:w-3/12 mx-auto rounded-full"
               loading="eager"
            />
            <div className="md:w-7/12 md:pl-10 mt-10 md:mt-0 md:pr-28">
               <h2 className="mb-5 md:mt-4 text-grey">Hey there</h2>
               <p className="mt-2">
                  I am a designer specializing in web and mobile experiences. I have a passion for visual
                  communication, creating and developing well crafted designs, user focused utilitarian interfaces.
                  Contributing to the great web ecosystem to create meaningful experiences.
                  <br></br>
                  <br></br>
                  Currently designing with&nbsp;
                  <a
                     className="cursor-pointer underline underline-offset-4  hover:text-grey transition duration-300"
                     rel="noopener noreferrer"
                     href="http://mvfglobal.com"
                     target="_blank"
                  >
                     MVF
                  </a>
                  .&nbsp;Previously at&nbsp;
                  <a
                     className="cursor-pointer underline underline-offset-4  hover:text-grey transition duration-300"
                     rel="noopener noreferrer"
                     href="https://www.brandwatch.com/"
                     target="_blank"
                  >
                     Brandwatch
                  </a>
                  .<br></br>Jury member at&nbsp;
                  <a
                     className="cursor-pointer underline underline-offset-4  hover:text-grey transition duration-300"
                     rel="noopener noreferrer"
                     href="https://www.cssdesignawards.com/"
                     target="_blank"
                  >
                     CSS Design Awards
                  </a>
                  .
               </p>

               <ul className="md:flex text-5xl justify-between mt-16 text-grey">
                  <li>UI/UX</li>
                  <li>Design Systems</li>
                  <li>Interactions</li>
                  <li>Animations</li>
                  <li>React.js</li>
               </ul>
            </div>
         </div>
      </section>
   )
}

export default About
