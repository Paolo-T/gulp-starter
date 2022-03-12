import React from "react"
import SEO from "../components/Seo"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import TransitionPageIn from "../components/TransitionPageIn"
import ImgTiles from "../components/ImgTiles"

function BuzzSumo() {
   const imageData = useStaticQuery(graphql`
      {
         heroImg: file(relativePath: { eq: "buzzsumo/buzzsumo_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         buzzsumoImages: allFile(
            filter: { relativeDirectory: { eq: "buzzsumo/blog" } }
            sort: { fields: absolutePath }
         ) {
            nodes {
               id
               childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
               }
            }
         }
         gridImg: file(relativePath: { eq: "buzzsumo/buzzsumo_blog-grid.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         pricingImg: file(relativePath: { eq: "buzzsumo/buzzsumo_pricing.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         blogTiles: file(relativePath: { eq: "buzzsumo/buzzsumo_blog-tiles.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
      }
   `)

   return (
      <>
         <SEO
            keywords={[
               `UI Design`,
               `UX Design`,
               `User Experience`,
               `Product Designer`,
               `BuzzSumo`,
               `Application`,
               `Web Designer`,
               `Front-end Developer`,
               `Portfolio`,
               `Brighton`,
               `UK`,
            ]}
            title="Paolo Todde | BuzzSumo"
         />
         <div className="pt-32 sm:pt-32 md:pt-24 lg:pt-24 xl:pt-24">
            <TransitionPageIn>
               <div className="md:flex justify-between items-baseline mb-6 md:mb-4">
                  <h1 className="md:text-6xl mb-1 md:mb-0">BuzzSumo</h1>
                  <p className="text-2xl md:text-3xl text-grey mb-2 md:pl-5">Web design</p>
               </div>

               <GatsbyImage
                  image={imageData.heroImg.childImageSharp.gatsbyImageData}
                  loading="eager"
                  alt="Buzzsumo app presentation"
               />

               <section className="w-full mx-auto md:pb-10">
                  <div className="w-12/12 xl:w-8/12 mx-auto">
                     <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-14 gap-x-0 py-10 md:py-20">
                        {/* Paragraph */}
                        <div className="hidden md:block col-start-2 col-end-4 md:mt-28">
                           <h4 className="pt-1 mb-2">Skills applied</h4>
                           <p className="text-grey">
                              Web Design
                              <br />
                              Branding
                           </p>
                        </div>
                        <div className="md:mt-10 col-start-5 col-end-10">
                           <h2>Overview</h2>
                           <p>
                              BuzzSumo is a powerful platform that allows you to find engaging pieces of content and
                              discover new potential outreach opportunities. The site allows you to search for content
                              that has received the most shares, links and comments.
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="md:pt-20 mb-8 md:mb-20 md:pb-8">
                     <GatsbyImage
                        image={imageData.blogTiles.childImageSharp.gatsbyImageData}
                        loading="eager"
                        alt="App screen"
                     />
                  </div>

                  <GatsbyImage
                     image={imageData.pricingImg.childImageSharp.gatsbyImageData}
                     loading="eager"
                     alt="Buzzsumo pricing page"
                  />
               </section>

               <section className="w-12/12 xl:w-8/12 mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-14 gap-x-0 pb-10 md:py-20">
                     {/* Paragraph */}
                     <div className="hidden md:block col-start-2 col-end-4 md:mt-16">
                        {/* <h4 className="pt-1 mb-2">Skills applied</h4> */}
                        <p className="text-grey pt-2">
                           Branding
                           <br /> Photo manipulation
                        </p>
                     </div>
                     <div className="mt-10 md:mt-0 col-start-5 col-end-10">
                        <h2>Blog header images</h2>
                        <p>
                           <p>
                              Visual identity application to the blog header images section. Creating blog header using
                              a coherent branding language to carry across the visual identity.
                           </p>
                        </p>
                     </div>
                  </div>
               </section>

               <div className="grid grid-cols-3 gap-3 md:gap-6 md:pb-24">
                  {imageData.buzzsumoImages.nodes.map((image) => (
                     <GatsbyImage
                        image={image.childImageSharp.gatsbyImageData}
                        key={image.id}
                        className=""
                        loading="eager"
                        alt="Buzzsumo images"
                     />
                  ))}
               </div>

               <div className="md:pt-20">
                  <ImgTiles isPageNav={true} />
               </div>
            </TransitionPageIn>
         </div>
      </>
   )
}

export default BuzzSumo
