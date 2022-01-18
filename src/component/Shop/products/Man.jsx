import React from 'react'
import Products from '../../../utils/man-products'

const Man = () => {
  return (
    <>
      <div>
        {Products.map((Product) => (
          <>
            <h3>{Product.name}</h3>
            <p>{Product.description}</p>
          </>
        ))}
      </div>
    </>
  )
}

export default Man
