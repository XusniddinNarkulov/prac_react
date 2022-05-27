import React, { useState } from "react";

export default function Tab() {
   const [active, setActive] = useState(false);
   const [index, setIndex] = useState(0);

   const data = [
      {
         id: 1,
         title: "Bio",
         text: "Bio This is an stretched grid column. This segment will always match the tab height",
      },
      {
         id: 2,
         title: "Pics",
         text: "Pics This is an stretched grid column. This segment will always match the tab height",
      },
      {
         id: 3,
         title: "Companies",
         text: "Companies This is an stretched grid column. This segment will always match the tab height",
      },
      {
         id: 4,
         title: "Links",
         text: "Links This is an stretched grid column. This segment will always match the tab height",
      },
   ];

   const { text } = data[index];

   return (
      <div className="ui grid">
         <div className="four wide column">
            <div className="ui vertical fluid tabular menu">
               {data.map((val, key) => {
                  return (
                     <a
                        key={key}
                        className={`item ${key === index && "active"}`}
                        onClick={() => setIndex(key)}
                     >
                        {val.title}
                     </a>
                  );
               })}
            </div>
         </div>
         <div className="twelve wide stretched column">
            <div className="ui segment">{text}</div>
         </div>
      </div>
   );
}
