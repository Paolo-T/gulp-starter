import React from "react"
import SEO from "../components/Seo"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import TransitionPageIn from "../components/TransitionPageIn"
import ImgTiles from "../sections/ImgTiles"
import Card from "../components/Card"

import persona_image_1 from "../images/classica/classica_persona_2.png"
import persona_image_2 from "../images/classica/classica_persona_1.png"

function classica() {
   const userPersonas = [
      {
         name: "Gabriel",
         bio:
            "25 years old. Lives in the city and works as a retail assistant for a small clothing shop. Loves music and is a self taught guitar player. Wants to expand his musical boundaries by listening to classical music and learning about its culture.",
         goals: [
            "Learn about the culture surrounding classical music",
            "Start listening to classical music",
            "Find learning resources",
         ],
         frustrations: ["Confusion on what learning path should take", "Scattered learning resources"],
         image: persona_image_1,
      },
      {
         name: "Emmalynn",
         bio:
            "48 years old. Lives in a small town where she works as a teacher. Has a family and not much free time. Recently rediscovered her love for classical music and wants to resume listening to the classics and learn about the modern composers.",
         goals: ["Deepen knowledge of the classics", "Discover modern composers", "Find curated learning resources"],
         frustrations: ["Not much free time available to research", "Scattered learning resources"],
         image: persona_image_2,
      },
   ]

   const imageData = useStaticQuery(graphql`
      {
         classicaImg_1: file(relativePath: { eq: "classica/classica_tile_2.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         classicaImg_2: file(relativePath: { eq: "classica/classica_2.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         classicaImg_3: file(relativePath: { eq: "classica/classica_3.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         classicaImg_4: file(relativePath: { eq: "classica/classica_4.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         classicaImg_5: file(relativePath: { eq: "classica/classica_5.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         classicaImg_6: file(relativePath: { eq: "classica/classica_6.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
      }
   `)

   const imageBottomData = [
      imageData.classicaImg_2.childImageSharp.gatsbyImageData,
      imageData.classicaImg_5.childImageSharp.gatsbyImageData,
   ]

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
            title="Paolo Todde | Classica"
         />

         <div className="pt-32 sm:pt-32 md:pt-24 lg:pt-24 xl:pt-24">
            <TransitionPageIn>
               <div className="md:flex justify-between items-baseline mb-6 md:mb-4">
                  <h1 className="md:text-6xl mb-1 md:mb-0">Classica</h1>
                  <p className="text-2xl md:text-3xl text-grey mb-2 md:pl-5">Classical music app</p>
               </div>

               <GatsbyImage
                  image={imageData.classicaImg_1.childImageSharp.gatsbyImageData}
                  loading="eager"
                  alt="Classica app presentation"
               />

               <section className="pb-10 md:pb-20 md:pt-24">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-14 gap-x-0">
                     {/* Paragraph */}
                     <div className="hidden md:block col-start-2 col-end-4 md:mt-16">
                        <h4 className="pt-3 mb-2">Overview</h4>
                        <p className="text-grey">Music player app</p>
                     </div>
                     <div className="col-start-5 col-end-11 mt-10 md:mt-0">
                        <h2>Overview</h2>
                        <p>
                           Classica is a fun and friendly app for the classical music lovers. Whether they are seasoned
                           aficionados or enthusiastic newbies, they'll find plenty of learning material to support
                           their listening experience.
                        </p>
                     </div>
                     {/* Paragraph */}
                     <div className="hidden md:block col-start-2 col-end-4 md:mt-20">
                        <h4 className="pt-2 mb-2">Skills applied</h4>
                        <p className="text-grey">
                           Strategy
                           <br /> Concept
                           <br /> Product Design
                           <br /> UI Design
                        </p>
                     </div>
                     <div className="col-start-5 col-end-11">
                        <h2 className="pt-3">The brief</h2>
                        <p className="mb-8">
                           You’re asked to design some materials for a mobile app to be run on smartphones only. Here
                           some information on the app itself: The app is for listening to and learning about classical
                           music.
                           <br />
                           The app monetizes through subscriptions. Some of the content and features are free for all
                           users, while some are reserved to subscribers.
                           <br />
                           <br />
                           The target customers are the newbie with curiosity for the topic, but that so far has lacked
                           a convenient opportunity to educate themselves on it; and the long-standing aficionado that’s
                           looking for a high-quality, comprehensive library of classical music and related content to
                           enjoy on demand wherever they go.
                           <br />
                           <br />
                        </p>
                        <h2>The four different sections:</h2>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-0 md:gap-y-3 gap-x-0 items-start mb-6">
                           <h4 className="uppercase tracking-widest col-start-1 col-end-11 md:col-start-1 md:col-end-4 mt-4 md:mt-1.5 text-primary">
                              • Discover
                           </h4>
                           <p className="col-start-4 col-end-11 text-grey">
                              Users are recommended interesting classical music content.
                           </p>
                           <h4 className="uppercase tracking-widest col-start-1 col-end-11 md:col-start-1 md:col-end-4 mt-4 md:mt-1.5 text-primary">
                              • Search
                           </h4>
                           <p className="col-start-4 col-end-11 text-grey">Users can search their music library. </p>
                           <h4 className=" uppercase tracking-widest col-start-1 col-end-11 md:col-start-1 md:col-end-4 mt-4 md:mt-1.5 text-primary">
                              • Learn
                           </h4>
                           <p className="col-start-4 col-end-11 text-grey">
                              Users can follow an educational track and test and improve their classical music
                              knowledge.
                           </p>
                           <h4 className="uppercase tracking-widest col-start-1 col-end-11 md:col-start-1 md:col-end-4 mt-4 md:mt-1.5 text-primary">
                              • Profile
                           </h4>
                           <p className="col-start-4 col-end-11 text-grey">
                              Section that includes their history of content consumption, their favorites, their
                              achievements, and some settings.
                           </p>
                        </div>
                        <p className="col-start-5 col-end-11 mt-12">
                           The main navigation between sections may happen through a tab bar.
                        </p>
                     </div>
                     {/* Paragraph */}
                     <div className="hidden md:block col-start-2 col-end-4 md:mt-16">
                        <h4 className="pt-3 mb-2">Problem</h4>
                     </div>
                     <div className="col-start-5 col-end-11">
                        <h2>The problem</h2>
                        <p>
                           The need for a comprehensive resource hub to satisfy the curiosity of the classical music
                           enthusiasts.
                           <br />A place for the curious newbie searching for high-quality learning resources, discover
                           interesting content to learn about the classical music world. A hub for the expert to dig
                           deep into the details of their passion subject, discover new music and enjoy the classics.
                        </p>
                     </div>
                     {/* Paragraph */}
                     <div className="hidden md:block md:mt-14 col-start-2 col-end-4">
                        <h4 className="pt-4 mb-2">Solution</h4>
                     </div>
                     <div className="col-start-5 col-end-11">
                        <h2>The solution</h2>
                        <p>
                           An app that besides the excellent music player, provides a learning center to access
                           articles, podcasts, blogs and relevevant personalities in the field of classical music.
                        </p>
                     </div>
                  </div>
               </section>
               <section className="mt-10 px-0 md:px-50 md:pb-24">
                  <GatsbyImage
                     image={imageData.classicaImg_3.childImageSharp.gatsbyImageData}
                     loading="eager"
                     alt="App screen"
                  />
               </section>

               <section className="pt-10 md:pt-24">
                  <h2 className="mb-3 md:mb-5 md:col-start-5 md:col-end-11">User Personas</h2>
                  <div className="md:grid grid-cols-2 gap-8">
                     {userPersonas.map((persona, i) => (
                        <Card
                           key={i}
                           id={i}
                           title={persona.name}
                           // subtitle={`Pets owned: ${persona.pet}`}
                           description={persona.bio}
                           list_top={persona.goals}
                           list_top_title="Goals"
                           list_bottom={persona.frustrations}
                           list_bottom_title="Frustrations"
                           image={persona.image}
                        />
                     ))}
                  </div>
               </section>

               <section className="pt-20">
                  {imageBottomData.map((image, i) => (
                     <GatsbyImage image={image} key={i} loading="eager" alt="App screen" />
                  ))}
               </section>

               <section className="mt-10 px-0 md:px-50 md:pb-24">
                  <GatsbyImage
                     image={imageData.classicaImg_4.childImageSharp.gatsbyImageData}
                     loading="eager"
                     alt="App screen"
                  />
               </section>

               <ImgTiles isPageNav={true} />
            </TransitionPageIn>
         </div>
      </>
   )
}

export default classica
