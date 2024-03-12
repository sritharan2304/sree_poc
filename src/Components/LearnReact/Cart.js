import React, { useState } from 'react'

const Cart = () => {
const [cartcount,setCartcount] = useState(0);

const handleclick = () => {
  setCartcount(cartcount +1)
}

  return (
    <div>
      <span>
        Number of items in the cart : {cartcount}
      </span>
      <button onClick={handleclick}>{cartcount} Add to Cart</button>
    </div>
  )
}

export default Cart
