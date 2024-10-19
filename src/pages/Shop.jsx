import React from 'react'
import allProducts from '../data/data.js'
import { Link } from 'react-router-dom'

const Shop = () => {
    console.log("Data = ",allProducts)
  return (
    <div className='flex flex-col gap-4 md:mx-20 mx-8 my-8'>
        <h2 className='text-2xl font-semibold'>All Products</h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-10'>
            {allProducts.map((product) =>(
                <div className='flex flex-col gap-2'>
                    <img src={product.image} className='rounded-3xl' />
                    <div className='flex justify-between'>
                    <h2 className='text-xl'> {product.name}</h2>
                    <p className='text-xl'>${product.price}</p>
                    </div>
                    <p>{product.description.slice(0,100)} ....</p>
                    <Link to='/'>
                    <button className='py-1 px-4 border-2 text-lg border-pink-400 rounded-3xl text-pink-400 hover:text-white hover:bg-pink-400'>Add to Cart</button>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Shop