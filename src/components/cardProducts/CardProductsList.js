import React from 'react'
import CardProductsdesign from './CardProductsdesign'

function CardProductsList({list}) {
  return (
    <div className='card-div'>
       {list.map((index) => (
         
        <CardProductsdesign products={index}/>
 
        ))}
    </div>
  )
}

export default CardProductsList

