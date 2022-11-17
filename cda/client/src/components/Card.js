import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className='card text-center'>
        <div className='overflow'>
        <div className='card__body md-4'>
            <img height="200px" src={props.imgSrc} alt={props.srcTitle} className='card-img-top' />
            <h2 className='card__title'>{props.cardTitle}</h2>
            <p2 className='card__description txt-secondary'>{props.cardDescription}</p2>
            <div>
            <button className='card__btn btn btn-success'>
              <Link to={props.url}>{props.cardButtonText}</Link>
            </button>
            </div>
            </div>
        </div>
        </div>
  )
}

export default Card