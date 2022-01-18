import React from 'react'
import Products from '../../../utils/bag-products'

const Bag = () => {
  return (
    <>
      <div>
        {Products.map((Product) => (
          <>
            <h3>{Product.name}</h3>
            <p>{Product.description}</p>
            <h4>{Product.price}</h4>
          </>
        ))}
      </div>
    </>
  )
}

export default Bag
