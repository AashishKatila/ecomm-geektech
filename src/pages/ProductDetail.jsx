import React from 'react'
import Bag from '../assets/bag.jpg'
import { Link } from 'react-router-dom'

const ProductDetail = () => {
  return (
    <div className='flex flex-col gap-4 md:mx-20 mx-8'>
        <h2 className='text-2xl font-semibold'>Product Details</h2>
        <div className='flex flex-col lg:flex-row md:gap-6 gap-4 '>
            <div className='w-full lg:w-1/2'>
            <img src={Bag} className='rounded-2xl' />
            </div>
            <div className='w-full lg:w-1/2 flex flex-col gap-4'>
            <h2 className='text-2xl font-semibold'>Bag</h2>
            <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam tempora voluptatem explicabo aliquam nobis laboriosam, dolorum voluptatum eaque, aliquid tempore maiores? Minima nam voluptatum cum illo laudantium in nemo ea dolorum suscipit ipsum facere soluta debitis cumque velit sapiente alias eligendi, deleniti inventore totam sed veniam aspernatur natus ex. Et, numquam quia dolore sit aliquam, eaque deleniti voluptatem ad sapiente ipsa, corporis cum id suscipit laudantium possimus est porro accusantium soluta eveniet voluptates? Eveniet dicta adipisci, officiis repellat minima esse.</p>
            <Link to='/'>
                <button className='py-1 px-4 border-2 text-lg border-pink-400 rounded-3xl text-pink-400 hover:text-white hover:bg-pink-400'>
                    Add to Cart
                </button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail