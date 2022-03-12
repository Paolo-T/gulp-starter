import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ImgTile from "../components/ImgTile"
import TransitionInview from "../components/TransitionInview"

function ImgTiles50({ isPageNav }) {
   // const pageLocation = typeof window !== "undefined" ? window.location.pathname : "";

   const data = useStaticQuery(graphql`
      query {
         classicaImg: file(relativePath: { eq: "classica/classica_tile_2.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         shuushImg: file(relativePath: { eq: "shuush/shuush_tile_2.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         petImg: file(relativePath: { eq: "petTime/petTime_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         spaceDigestImg: file(relativePath: { eq: "spaceDigest/spaceDigest_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         buzzsumoImg: file(relativePath: { eq: "buzzsumo/buzzsumo_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         brandwatchImg: file(relativePath: { eq: "brandwatch/brandwatch_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         homelyImg: file(relativePath: { eq: "homely/homely_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
      }
   `)

   const tilesData = [
      // {
      //    label: "UI/UX Design",
      //    title: "Homely",
      //    subTitle: "DIY",
      //    cta: "View use case",
      //    img: data.homelyImg.childImageSharp.gatsbyImageData,
      //    id: data.petImg.id,
      //    linkTo: "/pet-time",
      //    imgAlt: "Pet Time app ui design",
      //    rounded: false,
      //    isLocked: false,
      // },
      {
         label: "UI/UX Design",
         title: "Pet Time",
         subTitle: "Pet management app",
         cta: "View use case",
         img: data.petImg.childImageSharp.gatsbyImageData,
         id: data.petImg.id,
         linkTo: "/pet-time",
         imgAlt: "Pet Time app ui design",
         rounded: false,
         isLocked: false,
      },
      {
         label: "UI/UX Design",
         title: "Classica",
         subTitle: "Classical music app",
         cta: "View use case",
         img: data.classicaImg.childImageSharp.gatsbyImageData,
         id: data.classicaImg.id,
         linkTo: "/classica",
         imgAlt: "classica app ui design",
         rounded: false,
         isLocked: false,
      },
      {
         label: "UI/UX Design",
         title: "Shuush!",
         subTitle: "Messaging app",
         cta: "View use case",
         img: data.shuushImg.childImageSharp.gatsbyImageData,
         id: data.shuushImg.id,
         linkTo: "/shuush",
         imgAlt: "Shuush! app ui design",
         rounded: false,
         isLocked: false,
      },
      // {
      //    label: "Web Design / Development",
      //    title: "Space Digest",
      //    subTitle: "Website",
      //    cta: "View more",
      //    img: data.spaceDigestImg.childImageSharp.gatsbyImageData,
      //    id: data.spaceDigestImg.id,
      //    linkTo: "/space-digest",
      //    imgAlt: "Website page",
      //    rounded: false,
      // },
      {
         label: "Web Design",
         title: "BuzzSumo",
         subTitle: "Website marketing",
         cta: "View more",
         img: data.buzzsumoImg.childImageSharp.gatsbyImageData,
         id: data.buzzsumoImg.id,
         linkTo: "/buzzsumo",
         imgAlt: "Buzzsumo web page",
         rounded: false,
         isLocked: false,
      },
      // {
      //    label: "Web Design",
      //    title: "Brandwatch",
      //    subTitle: "Coming soon",
      //    cta: "View more",
      //    img: data.brandwatchImg.childImageSharp.gatsbyImageData,
      //    id: data.brandwatchImg.id,
      //    linkTo: "#",
      //    imgAlt: "Brandwatch webpage",
      //    rounded: false,
      //    isLocked: true,
      // },
   ]

   // const navItemsNumber = Object.keys(data).length;
   // const onOneLine = pageLocation === "/three" ? navItemsNumber : navItemsNumber - 1;

   return (
      <section className="w-full">
         {isPageNav && <h2 className="mb-15 md:mb-6 mt-16 md:mt-0">Other projects</h2>}

         <div
            className={`w-100 mx-auto md:m-0
            grid ${isPageNav ? "grid-cols-1 md:grid-cols-4 gap-5 pb-8" : "grid-cols-1 gap-10 md:gap-32"}`}
         >
            {tilesData.map((tile) => (
               // pageLocation !== tile.linkTo && (
               <TransitionInview key={tile.id}>
                  <ImgTile
                     className={`mb-1 rounded-${tile.rounded ? tile.rounded : 0} overflow-hidden opacity-50`}
                     alt={tile.title}
                     loading={"eager"}
                     img={tile.img}
                     imgAlt={tile.imgAlt}
                     title={!isPageNav && tile.title}
                     subTitle={!isPageNav && tile.subTitle}
                     cta={tile.cta}
                     label={!isPageNav && tile.label}
                     linkTo={tile.linkTo}
                     marginTop={tile.marginTop}
                     marginBottom={tile.marginBottom}
                     rounded={tile.rounded}
                     isPageNav={isPageNav}
                     isLocked={tile.isLocked}
                  />
               </TransitionInview>
            ))}
         </div>
      </section>
   )
}

export default ImgTiles50
