import React from "react"
import TransitionInview from "../components/TransitionInview"

function Reccomendations() {

   const reccomendations = [
      {
         id: "2",
         name: "Rebecca Harrison",
         JobTitle: "Creative Director – Brandwatch",
         description:
            "Paolo has been a great part of our team at Brandwatch. Helps create a brilliant team atmosphere; he brings a blend of calm determination and a real motivation for learning which in many ways encourages other to follow suit.\n\nI have no doubt that Paolo will continue on a path of growth wherever he decides to go. It’s been a real pleasure to both collaborate with and manage Paolo. I’m glad our paths crossed and no doubt they will again.",
      },
      {
         id: "1",
         name: "Matt Fletcher",
         JobTitle: "Senior Designer – Brandwatch",
         description:
            "Paolo is not only an incredibly talented designer but also a humble and brilliant human being. I thoroughly enjoyed working with and learning from him. I can’t recommend Paolo enough!",
      },
      {
         id: "3",
         name: "Pete Rundle",
         JobTitle: "Senior Developer & Designer – Brandwatch",
         description:
            "I was Paolo’s line manager for around 2 years. During that time Paolo was always pushing to improve, and his enthusiasm for both UI/UX and code was always tangible. He designed and coded many of our design system’s front-end components, which were always slick and on brand. As well as code, he also managed and maintained the team Figma library - enabling other designers to use our front-end components and speak the same language as developers.\n\nPaolo is a great person to work with day to day - positive, down to earth and extremely humble. Looking forward to seeing what Paolo will do next!",
      },
      {
         id: "5",
         name: "Margarita Cruz",
         JobTitle: "Art Director – IronDog Studio",
         description:
            "Paolo is a highly skilled Graphic Designer, he is very creative, honest, reliable and approachable to work with. Full of creative energy, he thrives on any challenge, making him to get work delivered with thought, insight, speed and most importantly, always to a high standard. A pleasure to work with Paolo.",
      },
      {
         id: "6",
         name: "Monica Salis",
         JobTitle: "CFO, Omnia International",
         description:
            "Paolo provided an excellent service in creating and refining our logo according to our request. Very professional, not only he undrestood exactly what our needs were, but he did it in a very short time. Absolutely recommended, we will be using him more and more in the future. Thanks Paolo!",
      },
      {
         id: "4",
         name: "Don Steyn",
         JobTitle: "Art Director – IronDog Studio",
         description:
            "Paolo is a great person to work with and brings a lightheartedness to the work place. He is motivated, talented, forward thinking and has a great work ethic. It was a pleasure working with him.",
      },
   ]

   return (
      <section className="mt-10 md:mt-20">
         <h2 className="mb-20 text-center">Recommendations</h2>
         <div
            className="w-100 mx-auto md:m-0
            grid grid-cols-1 md:grid-cols-2 gap-10 mb-10"
         >
            {reccomendations.map((reccomendation, i) => (
               <TransitionInview key={reccomendation.id}>
                  <div className={`bg-lessDark p-8 md:p-20 ${i % 2 == 0 ? "md:mt-20" : "md:mt-0"}`}>
                     <p className="mb-6 leading-7" style={{ whiteSpace: "pre-wrap" }}>
                        <span className="text-grey">“</span>
                        {reccomendation.description}
                        <span className="text-grey">”</span>
                     </p>
                     <p>{reccomendation.name}</p>
                     <p className="text-grey mt-1">{reccomendation.JobTitle}</p>
                  </div>
               </TransitionInview>
            ))}
         </div>
      </section>
   )
}

export default Reccomendations
