import React from 'react'
import '../assets/styles/Card.css'

function Card({ card }) {
  return (
    <React.Fragment>
      <div className='card'>
        <img className='card__img' src={card.image} alt="char_img" />
        <div className='card__body'>
          <p className='card__text'>{card.name}</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Card