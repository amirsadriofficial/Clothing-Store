import React from 'react'
import Products from '../../../utils/watches-products'

const Watches = () => {
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

export default Watches
