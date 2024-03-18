import React from 'react'

export default function Category({product}) {
  return (
    <div>
        <button className='BuysEl'>
        <img src={product.imgUrl} width={200} height={200}></img>
        <p>{product.name}</p>
        </button>
    </div>
  )
}
