import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

function ImgTile({ linkTo, title, subTitle, img, imgAlt, marginTop, marginBottom, rounded, isPageNav, isLocked }) {
   return (
      <>
         <Link to={linkTo}>
            <div
               className={`group w-full relative transition duration-500 transform text-center
                  ${
                     isPageNav
                        ? "transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                        : ""
                  }
                  ${isLocked ? "cursor-default" : "cursor-pointer"}
                  md:mt-${marginTop} md:mb-${marginBottom}`}
            >
               <GatsbyImage
                  className={`mb-1  rounded-${rounded ? rounded : 0} overflow-hidden`}
                  image={img}
                  alt={imgAlt}
                  loading={"eager"}
               />
               {!isPageNav ? (
                  <div className="text-left flex justify-between items-end pt-3">

                     <h2 className="mb-0 md:mb-0.5 text-xl md:text-4xl lg:text-4xl mr-4">{title}</h2>

                     {isLocked ? (
                           <div className="w-6 md:w-10">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="hover:text-grey"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 stroke="currentColor"
                                 strokeWidth={1.5}
                                 d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                              />
                           </svg>
                        </div>
                     ) : (
                        <p className="text-base md:text-2xl text-grey">{subTitle}</p>
                     )}
                  </div>
               ) : null}
            </div>
         </Link>
      </>
   )
}

export default ImgTile
