import React from 'react'

function Shopping({item,quantity,price }) {
  return (
  <>
  <h1>Shopping Component</h1>
  <p>Item:{item}</p>
  <p>Quantity:{quantity}</p>
  <p>Price:{price}</p>
  <p>Total Price:{quantity*price}</p>
  </>
  )
}

export default Shopping