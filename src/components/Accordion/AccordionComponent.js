import React, { useState } from "react";

export default function AccordionComponent({ title, text }) {
   const [active, setActive] = useState(false);
   const click = () => {
      setActive((prev) => !prev);
   };
   return (
      <div>
         <div onClick={click} className={`${active ? `active` : ""} title`}>
            <i className="dropdown icon"></i>
            {title}
         </div>
         {active && <div className="">{active && <p>{text}</p>}</div>}
      </div>
   );
}
