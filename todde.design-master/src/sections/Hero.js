import React from 'react'

function Hero() {
  return (
     <div className="mb-16 md:mb-0 pt-0 xs:pt-10 sm:pt-20 md:pt-20 lg:pt-20 xl:pt-28">
        {/* <Carousel /> */}

        <div className="grid grid-flow-col grid-cols-24 grid-rows-2 md:grid-rows-1 justify-end sm:items-start md:items-end mb-10 sm:mb-0 md:mb-20 mt-10">
           <h1 className="col-start-1 col-end-24 sm:col-start-1 sm:col-end-16 md:col-start-1 md:col-end-13 md_2:col-start-1 md_2:col-end-12 lg:col-start-1 lg:col-end-13 xl:col-start-1 xl:col-end-12 2xl:col-start-1 2xl:col-end-14">
              <span className="text-grey">UI</span>
              <br></br>
              Designer
              <br></br>
              <span className="text-grey">&</span> Coder
           </h1>
           <p
              className="col-start-1 col-end-24 md_2:col-start-13 md_2:col-end-25 lg:col-start-14 lg:col-end-25 xl:col-start-12 xl:col-end-25 2xl:col-start-14 2xl:col-end-25
                           text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-grey lg:pb-1"
              // style={{ lineHeight: "2.43rem" }}
           >
              Specializing in intuitive and sharp digital experience solutions. Well crafted designs for{" "}
              <span className="text-primary">human focused</span> utilitarian interfaces. Shaping digital experience{" "}
              <span className="text-primary">one pixel at the time</span>.
           </p>
        </div>
     </div>
  )
}

export default Hero