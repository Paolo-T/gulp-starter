import React from "react"
import SEO from "../components/Seo"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import TransitionPageIn from "../components/TransitionPageIn"
import ImgTiles from "../sections/ImgTiles"

function Shuush() {
   const imageData = useStaticQuery(graphql`
      {
         shuushImg_0: file(relativePath: { eq: "shuush/shuush_tile_2.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         shuushImg_1: file(relativePath: { eq: "shuush/shuush_1.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         shuushImg_2: file(relativePath: { eq: "shuush/shuush_2.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         shuushImg_3: file(relativePath: { eq: "shuush/shuush_3.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         shuushImg_4: file(relativePath: { eq: "shuush/shuush_4.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         shuushImg_5: file(relativePath: { eq: "shuush/shuush_5.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         shuushImg_6: file(relativePath: { eq: "shuush/shuush_6.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         shuushImg_7: file(relativePath: { eq: "shuush/shuush_7.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
      }
   `)

   const imagesBottom = [
      imageData.shuushImg_2.childImageSharp.gatsbyImageData,
      imageData.shuushImg_3.childImageSharp.gatsbyImageData,
      imageData.shuushImg_4.childImageSharp.gatsbyImageData,
   ]

   return (
      <>
         <SEO
            keywords={[
               `UI Design`,
               `UX Design`,
               `User Experience`,
               `Product Designer`,
               `App`,
               `Application`,
               `Web Designer`,
               `Front-end Developer`,
               `Portfolio`,
               `Brighton`,
               `UK`,
            ]}
            title="Paolo Todde | Shuush"
         />
         <div className="pt-32 sm:pt-32 md:pt-24 lg:pt-24 xl:pt-24">

            <TransitionPageIn>
               <div className="md:flex justify-between items-baseline mb-6 md:mb-4">
                  <h1 className="md:text-6xl mb-1 md:mb-0">Shuush</h1>
                  <p className="text-2xl md:text-3xl text-grey mb-2 md:pl-5">Minimalist Messaging App</p>
               </div>
               <GatsbyImage image={imageData.shuushImg_0.childImageSharp.gatsbyImageData} loading="eager" />

               <div className="pb-10 md:mb-20 md:mt-20">
                  <section className="w-12/12 xl:w-8/12 mx-auto">
                     <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-14 gap-x-0">
                        {/* Paragraph */}
                        <div className="hidden md:block col-start-2 col-end-4 md:mt-16">
                           <h4 className="mt-3 mb-2">Overview</h4>
                           <p className="text-grey">Messaging app</p>
                        </div>
                        <div className="mt-10 md:mt-0 col-start-5 col-end-11">
                           <h2 className="">Overview</h2>
                           <p>
                              Shuush! is a fun messaging app, with a minimalist User interface. Its fresh and
                              friendly design will help you keeping in contact with your loved ones. The simple and
                              intuitive user interface will facilitate communications and sharing.
                           </p>
                        </div>
                     </div>
                  </section>
               </div>

               {imagesBottom.map((image) => (
                  <div className="max-w-screen-2xl mx-auto">
                     <GatsbyImage image={image} key={image.id} loading="eager" alt="App screen" />
                  </div>
               ))}

               <section className="w-full mx-auto py-16 mt-12">
                  <GatsbyImage
                     image={imageData.shuushImg_5.childImageSharp.gatsbyImageData}
                     loading="eager"
                     alt="App screen"
                  />
               </section>

               <section className="w-full mx-auto pt-16 md:pb-24">
                  <GatsbyImage
                     image={imageData.shuushImg_1.childImageSharp.gatsbyImageData}
                     loading="eager"
                     alt="App screen"
                  />
               </section>

               <ImgTiles isPageNav={true} className="pt-20" />
            </TransitionPageIn>
         </div>
      </>
   )
}

export default Shuush
