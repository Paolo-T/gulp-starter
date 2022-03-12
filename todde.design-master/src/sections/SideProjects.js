import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


function SideProjects() {
   const data = useStaticQuery(graphql`
      query sideProjects {
         threeImg: file(relativePath: { eq: "three/three_1.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         digitalArtImg: file(relativePath: { eq: "about/digitalArtThumb.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
      }
   `)
  return (
      <section className="py-20">
         <h2 className="flex-1">Side projects</h2>
         <div className="grid md:grid-cols-2 gap-8">
            <div className="w-full">
               <a href="https://www.instagram.com/paolo__todde/" target="_blank">
                  <GatsbyImage
                     image={data.digitalArtImg.childImageSharp.gatsbyImageData}
                     alt="Digital Art"
                     className="transition duration-500 transform hover:scale-95 cursor-pointer underline"
                     loading="eager"
                  />
               </a>
               <p className="mt-4 text-grey">Digital Art</p>
            </div>
            <div className="w-full">
               <Link to="/three" target="_blank">
                  <GatsbyImage
                     image={data.threeImg.childImageSharp.gatsbyImageData}
                     alt="3dc designs"
                     className="transition duration-500 transform hover:scale-95 cursor-pointer underline"
                     loading="eager"
                  />
               </Link>

               <p className="mt-4 text-grey">3DC ( Visual Brand )</p>
            </div>
         </div>
      </section>
  )
}

export default SideProjects