import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const Cart = () => {
    const {cart,setCart,increaseQuantity, removeFromCart, decreaseQuantity} = useContext(CartContext)
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    // console.log("Cart Items = ",cart)

  return (
    <div className='lg:mx-20 mx-8 flex flex-col gap-4'>
    <h2 className='text-2xl font-semibold'>Your Cart</h2>
    {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
        <>
      <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>{cart.map((item) => (
        <div key={item.id} className='flex gap-4 items-center  '>
            <div>
                <img src={item.image} className='h-40 w-40 rounded-3xl' />
            </div>
            <div className='flex flex-col gap-2'>

          <h2>{item.title}</h2>
          <p>Price: ${item.price} x {item.quantity} = {item.price * item.quantity}</p>
          <div className='flex items-center gap-4 '>

          <button onClick={() => decreaseQuantity(item.id)} className='px-4 py-1 bg-slate-100 rounded-3xl font-bold text-xl'>-</button>
          <p className='font-semibold'>{item.quantity}</p>
          <button onClick={() => increaseQuantity(item.id)} className='px-4 py-1 bg-slate-100 rounded-3xl font-bold text-xl'>+</button>
          </div>
            <button onClick={() => removeFromCart(item.id)} className='text-white bg-red-400 px-4 py-1 rounded-3xl'>Remove</button>
          </div>
        </div>
      ))}
      </div>
      <div className='flex flex-col gap-4 items-center justify-center'>
      <h2 className='text-xl '>Total Price: <span className='text-2xl font-semibold'> ${totalPrice}</span></h2>
      <h2 className='bg-pink-500 px-4 py-1 text-white text-xl rounded-3xl' onClick={()=>setCart([])}>Checkout</h2>
      </div>
      </>
    )}
  </div>
  )
}

export default Cart