import React, { useEffect, useState } from "react";
import "./Slider.css";

const dataSlider = [
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
   {
      id: 5,
      title: "Five",
      text: "Five Links This is an stretched grid column. This segment will always match the tab height",
   },
];

export default function Slider() {
   const [data, setData] = useState(dataSlider);
   const [index, setIndex] = useState(0);

   useEffect(() => {
      const lastIndex = data.length - 1;
      if (index < 0) {
         setIndex(lastIndex);
      }
      if (index > lastIndex) {
         setIndex(0);
      }
   }, [index]);

   return (
      <div
         style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
      >
         {/* <button className="open-walkthrough">Start</button> */}
         <div className="walkthrough show reveal">
            <div className="walkthrough-pagination">
               {data.map((val, key) => {
                  return <a className={`dot ${index === key && "active"}`}></a>;
               })}
            </div>
            <div className="walkthrough-body">
               <ul className="screens animate">
                  {data.map((val, key) => {
                     const { id, title, text } = val;
                     return (
                        <li
                           key={id}
                           className={`screen ${key === index && "active"}`}
                        >
                           <div className="media logo">
                              <img
                                 className="logo"
                                 src="https://s3.amazonaws.com/jebbles-codepen/icon.png"
                              />
                           </div>
                           <h3>
                              {title}
                              {/* <br>Walkthrough</br> */}
                           </h3>
                           <p>{text}</p>
                        </li>
                     );
                  })}
               </ul>
               <button
                  className="prev-screen"
                  onClick={() => setIndex(index - 1)}
               >
                  <i className="icon-angle-left" style={{ color: "" }}>
                     ⬅
                  </i>
               </button>
               <button
                  className="next-screen"
                  onClick={() => setIndex(index + 1)}
               >
                  <i className="icon-angle-right">➡</i>
               </button>
            </div>
            <div className="walkthrough-footer">
               <button
                  className={`button next-screen ${
                     index === data.length - 1 && "finish"
                  }`}
                  onClick={() => {
                     setIndex(index + 1);
                  }}
               >
                  Next
               </button>
               {/* <button className="button finish close" disabled="true">Finish</button> */}
            </div>
         </div>
      </div>
   );
}
