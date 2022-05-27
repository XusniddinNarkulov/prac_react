import React, { useState } from "react";
import AccordionComponent from "./AccordionComponent";

const data = [
   {
      id: 1,
      title: "What is a dog?",
      text: "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world",
   },
   {
      id: 2,
      title: "What kinds of dogs are there?",
      text: "There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.",
   },
   {
      id: 3,
      title: "How do you acquire a dog?",
      text: "Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world",
   },
];

export default function Accordion() {
   return (
      <div className="ui inverted segment">
         <div className="ui inverted accordion">
            {data.map((val, key) => {
               return <AccordionComponent key={key} {...val} />;
            })}
         </div>
      </div>
   );
}
