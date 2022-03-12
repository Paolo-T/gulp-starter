import React from "react"
import SEO from "../components/Seo"
import { graphql, useStaticQuery } from "gatsby"
import TransitionPageIn from "../components/TransitionPageIn"
import Card from "../components/Card"
import { GatsbyImage } from "gatsby-plugin-image"
import ImgTiles from "../components/ImgTiles"

import persona_image_1 from "../images/petTime/petTime_persona_1.png"
import persona_image_2 from "../images/petTime/petTime_persona_2.png"

const userPersonas = [
   {
      name: "Jenny",
      pet: "Two dogs",
      bio:
         "26 years old. Lives in the city and works as a Marketing manager in a medium sized tech company. Lives a very active lifestyle, loves sports and the outdoors and enjoys walks and traveling",
      goals: [
         "Enjoying the outdoors with her pets",
         "Find dog friendly venues",
         "Find where her dogs will be taken care of when needed (Vet, Dog groomer)",
      ],
      frustrations: [
         "She is new in the city and doesn't know the best places where she can walk her dogs",
         "Some shops/venues don't allow in dogs",
      ],
      image: persona_image_1,
   },
   {
      name: "Drew",
      pet: "Cat",
      bio:
         "34 years old. Lives in the city and works long hours as Chef in a restaurant he owns. Has a family and not much free time. Recently adopted a pet cat from animal shelter.",
      goals: [
         "Learn how to welcome newly adopted cat",
         "Find learning resources about rescue animals",
         "Find where their cat will be taken care of when needed (Vet, Cat groomer)",
      ],
      frustrations: ["Doesn't have much experience with rescue pets", "Doesn't much free time"],
      image: persona_image_2,
   },
]

function petTime() {
   const ImageData = useStaticQuery(graphql`
      {
         petTime_1: file(relativePath: { eq: "petTime/petTime_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         petTime_2: file(relativePath: { eq: "petTime/petTime_2.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         petTime_3: file(relativePath: { eq: "petTime/petTime_3.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         petTime_4: file(relativePath: { eq: "petTime/petTime_1.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         petTime_5: file(relativePath: { eq: "petTime/petTime_4.png" }) {
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
               `App`,
               `Application`,
               `Web Designer`,
               `Front-end Developer`,
               `Portfolio`,
               `Brighton`,
               `UK`,
            ]}
            title="Paolo Todde | Pet Time"
         />

         <div className="pt-32 sm:pt-32 md:pt-24 lg:pt-24 xl:pt-24">
            <TransitionPageIn>
               <div className="md:flex justify-between items-baseline mb-6 md:mb-4">
                  <h1 className="md:text-6xl mb-1 md:mb-0">Pet Time</h1>
                  <p className="text-2xl md:text-3xl text-grey mb-2 md:pl-5">Pet management app</p>
               </div>
               <GatsbyImage
                  image={ImageData.petTime_1.childImageSharp.gatsbyImageData}
                  alt="Pet Time app presentation"
                  loading="eager"
               />

               <div className="w-full mx-auto md:pt-24">
                  <section className="w-12/12 xl:w-8/12 mx-auto">
                     <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-14 gap-x-0 pb-10 md:pb-24">
                        {/* Paragraph */}
                        <div className="hidden md:block col-start-2 col-end-4 md:mt-16">
                           <h4 className="pt-3 mb-2">Overview</h4>
                           <p className="text-grey">Pet management</p>
                        </div>
                        <div className="mt-10 md:mt-0 col-start-5 col-end-11">
                           <h2>Overview</h2>
                           <p>
                              Pet Time is a fun and friendly app for animal lovers. Whether you are experts or
                              enthusiastic newbies, you'll find plenty of learning resources to help taking care of your
                              pet friends.
                           </p>
                        </div>
                        {/* Paragraph */}
                        <div className="hidden md:block col-start-2 col-end-4 md:mt-16">
                           <h4 className="pt-3 mb-2">Skills applied</h4>
                           <p className="text-grey">
                              Product Design
                              <br />
                              Strategy
                              <br /> Concept
                              <br /> UI Design
                           </p>
                        </div>
                        <div className="col-start-5 col-end-11">
                           <h2>The brief</h2>
                           <p className="mb-8">
                              The app is for those passionate about pets, who want to learn more about their loved
                              domestic animals.
                              <br />
                              The target customers are the curious newbie who has, so far, lacked a convenient
                              opportunity to educate themselves on the topic, and the long-standing aficionado who’s
                              looking for a high-quality, comprehensive app to teach them how to take care of their
                              beloved pets, plus related content to enjoy on the go.
                              <br />
                              <br />
                              The app monetizes through subscriptions. Some content and features are free for all users,
                              while others are reserved for subscribers.
                              <br />
                              <br />
                           </p>

                           <h2> The four sections:</h2>
                           <div className="grid grid-cols-1 md:grid-cols-12 gap-y-0 md:gap-y-3 gap-x-0 items-start mb-10">
                              <h4 className="uppercase tracking-widest col-start-1 col-end-11 md:col-start-1 md:col-end-4 mt-4 md:mt-1.5 text-primary">
                                 • Discover
                              </h4>
                              <p className="col-start-4 col-end-11 text-grey">
                                 Users are recommended interesting content about their pet.
                              </p>
                              <h4 className="uppercase tracking-widest col-start-1 col-end-11 md:col-start-1 md:col-end-4 mt-4 md:mt-1.5 text-primary">
                                 • Learn
                              </h4>
                              <p className="col-start-4 col-end-11 text-grey">
                                 Users can follow an educational track and test and improve their knowledge on pets.
                              </p>
                              <h4 className="uppercase tracking-widest col-start-1 col-end-11 md:col-start-1 md:col-end-4 mt-4 md:mt-1.5 text-primary">
                                 • Maps
                              </h4>
                              <p className="col-start-4 col-end-11 text-grey">
                                 Users can find pet shops, veterinary clinics, pet friendly venues and places for pet
                                 care.
                              </p>
                              <h4 className="uppercase tracking-widest col-start-1 col-end-11 md:col-start-1 md:col-end-4 mt-4 md:mt-1.5 text-primary">
                                 • Profile
                              </h4>
                              <p className="col-start-4 col-end-11 text-grey">
                                 Section that includes the User's history of content consumption, their favorites, their
                                 achievements, and some settings.
                              </p>
                           </div>

                           <p>
                              The main navigation between sections may happen through a tab bar UI, or another system of
                              your choosing.
                           </p>
                        </div>
                        {/* Paragraph */}
                        <div className="hidden md:block mb-10 col-start-2 col-end-4 md:mt-16">
                           <h4 className="pt-3 mb-2">Solution</h4>
                        </div>
                        <div className="col-start-5 col-end-11">
                           <h2>The solution</h2>
                           <p>
                              An app that provides a dedicated section for interesting articles, news, podcasts,
                              learning resources. A section to help finding pet friendly locations and facilities. The
                              UI will be user friendly and easy to navigate. All resources will be easy to access and
                              find.
                           </p>
                        </div>
                     </div>
                  </section>
                  <div className="mt-10 px-0 md:px-50 md:pb-24">
                     <GatsbyImage
                        image={ImageData.petTime_4.childImageSharp.gatsbyImageData}
                        loading="eager"
                        alt="App screen"
                     />
                  </div>

                  <section className="w-12/12 xl:w-8/12 mx-auto pt-10 md:pt-24">
                     <h2 className="mb-3 md:mb-5 md:col-start-5 md:col-end-11">User Personas</h2>

                     <div className="md:grid grid-cols-2 gap-8">
                        {userPersonas.map((persona, i) => (
                           <Card
                              key={i}
                              id={i}
                              title={persona.name}
                              subtitle={`Pets owned: ${persona.pet}`}
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

                  <section className="w-12/12 xl:w-8/12 mx-auto pt-5 md:pt-32">
                     <div className="md:grid md:grid-cols-12 gap-y-10 md:gap-y-14 gap-x-0">
                        {/* Paragraph */}
                        <div className="col-start-2 col-end-4 mt-1">
                           <h2>User Flow</h2>
                        </div>
                        <div className="col-start-5 col-end-11 mt-4">
                           {/* <h2 className="text-3xl font-bold mb-3 md:mb-4">User Flow</h2> */}
                           <p>
                              After the initial Log in / Sign Up, the user is presented with the Home screen where they
                              can browse the most important topics regarding the care of their beloved pets. After
                              choosing their subject of interest, they are presented with all the available resources
                              and content focused on that particular topic.
                              <br></br>
                              <br></br>Some of the content is free and some is "Premium" that requires a paid
                              subscription to access. If the user is not yet subscribed, is directed to a paywall where
                              to subscribe before accessing the Premium content.
                           </p>
                        </div>
                     </div>
                  </section>
               </div>

               <section className="mt-10 px-0 md:px-50 md:pb-24">
                  <GatsbyImage
                     image={ImageData.petTime_3.childImageSharp.gatsbyImageData}
                     loading="eager"
                     alt="App screen"
                  />
               </section>

               <section className="mt-10 px-0 md:px-50 md:pb-24">
                  <GatsbyImage
                     image={ImageData.petTime_5.childImageSharp.gatsbyImageData}
                     loading="eager"
                     alt="App screen"
                  />
               </section>

               <section className="mt-10 px-0 md:px-50 md:pb-24">
                  <GatsbyImage
                     image={ImageData.petTime_2.childImageSharp.gatsbyImageData}
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

export default petTime
