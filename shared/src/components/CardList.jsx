import React from "react";
import "../assets/styles/CardList.css";
import Card from "./Card";

function CardList({ items }) {
   return (
      <React.Fragment>
         <ul className='list__group'>
            {items?.length > 0 &&
               items.map((item) => (
                  <li key={item.id} className='list__group__item'>
                     <Card card={item} />
                  </li>
               ))}
         </ul>
      </React.Fragment>
   );
}

export default CardList;
