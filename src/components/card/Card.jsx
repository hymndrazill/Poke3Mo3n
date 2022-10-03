import React from 'react';
import './card.css'

const Card = ({pokemon}) => {
  return (
    <div className='card'>
        <div className="Card__img">
            <img src={pokemon.sprites.front_default} alt="" />
        </div>
        <div className="card__name">
            <p> {pokemon.name}</p>
        </div>
        <div className="card__types">
                {pokemon.types.map(type =>{
                    <div className='card__type'>
                        {type.type.name}
                    </div>
                })}
        </div>
        <div className="card__info">
                <div className="card__data card__data--weight ">
                <h3 className='title'>Weight</h3>
                  <p>{pokemon.weight}</p>  
                </div>  
                <div className="card__data card__data--height ">
                <h3 className='title'>height</h3>
                  <p>{pokemon.height}</p>  
                </div>  
                <div className="card__data card__data--ability ">
                <h3 className='title'>ability</h3>
                  <p>{pokemon.abilities[0].ability.name}</p>  
                </div>  
        </div>
    </div>
  )
}

export default Card