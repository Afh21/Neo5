import React from "react";
import "../assets/styles/Card.css";

const NOPHOTO =
   "https://media.istockphoto.com/id/1392182937/vector/no-image-available-photo-coming-soon.jpg?s=612x612&w=0&k=20&c=3vGh4yj0O2b4tPtjpK-q-Qg0wGHsjseL2HT-pIyJiuc=";

function Card({ card }) {
   return (
      <div className='container'>
         <div className='card'>
            <div className='card__body'>
               <img
                  className='card__img'
                  src={card?.image || NOPHOTO}
                  loading='lazy'
                  alt='char_img'
               />
               <div className='card__text'>
                  <p>{card?.name}</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Card;
