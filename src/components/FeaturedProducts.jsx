import React from 'react'
import Bag from '../assets/bag.jpg'
import Googs from '../assets/googs.jpg'
import Suitcase from '../assets/suitcase.jpg'
import Shirt from '../assets/shirt.jpg'

const FeaturedProducts = () => {
    const products=[{
        id:1,
        title: "Googles",
        description: "Protect your eyes from harmful rays with a touch of a style.",
        price:15,
        image: Googs,
    },
    {
        id:2,
        title: "Googles",
        description: "Protect your eyes from harmful rays with a touch of a style.",
        price:15,
        image: Bag,
    },
    {
        id:3,
        title: "Googles",
        description: "Protect your eyes from harmful rays with a touch of a style.",
        price:15,
        image: Shirt,
    },
    {
        id:4,
        title: "Googles",
        description: "Protect your eyes from harmful rays with a touch of a style.",
        price:15,
        image: Suitcase,
    },]
  return (
    <div className='my-8 mx-20 flex flex-col gap-4'>
        <h2 className='text-3xl font-semibold'>Featured products</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-2 lg:grid-cols-4'>
            {products.map((product) =>(
                <div className='flex flex-col gap-2 rounded-2xl justify-between'>
                    <div className='flex flex-col gap-2'>
                    <div className="flex justify-center items-center h-60 w-72">
                    <img src={product.image} alt='Googs' className='h-full w-full rounded-2xl ' />
                    </div>
                    <div className='flex justify-between'>
                        <h2 className='text-xl'>{product.title}</h2>
                        <h2 className='text-xl font-semibold'>${product.price}</h2>
                    </div>
                    <p className='text-gray-500'>{product.description.slice(0,40)}</p>
                    </div>
                    <div>
                    <button className='py-1 px-4 border-2 border-pink-500 rounded-3xl text-pink-500 hover:text-white hover:bg-pink-500'>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
        <div className='text-center mt-4'>
        <button className='py-1 px-4 border-2 text-xl border-pink-500 rounded-3xl text-pink-500 hover:text-white hover:bg-pink-500'>Click to shop more!</button>
        </div>
    </div>
  )
}

export default FeaturedProducts