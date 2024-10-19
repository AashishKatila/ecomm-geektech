import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import allProducts from '../data/data'
import CartContext from '../context/CartContext'
import { toast } from 'react-toastify'

const FeaturedProducts = () => {
    const { addToCart } = useContext(CartContext);
    const featuredProducts = allProducts.slice(0, 4)
    return (
        <div className='my-8 mx-20 flex flex-col gap-4'>
            <h2 className='text-3xl font-semibold'>Featured products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-6 lg:grid-cols-4'>
                {featuredProducts.map((product) => (
                    <div className='flex flex-col gap-2 rounded-2xl justify-between' key={product.id}>
                        <div className='flex flex-col gap-2'>
                            <Link to={`/productDetail/${product.id}`}>
                                <div className="flex justify-center items-center h-60 w-full">
                                    <img src={product.image} alt='Googs' className='h-full w-full rounded-2xl ' />
                                </div>
                            </Link>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-xl'>{product.name}</h2>
                                <h2 className='text-xl font-semibold'>${product.price}</h2>
                            </div>
                            <p className='text-gray-500'>{product.description.slice(0, 40)}</p>
                        </div>
                        <div>
                            <button className='py-1 px-4 border-2 border-pink-500 rounded-3xl text-pink-500 hover:text-white hover:bg-pink-500' onClick={() => { addToCart(product); toast.success(`${product.name} has been added`) }}>Add to Cart</button>
                        </div>
                    </div>

                ))}
            </div>
            <div className='text-center mt-4'>
                <Link to='/shop'>
                    <button className='py-1 px-4 border-2 text-lg border-pink-500 rounded-3xl text-pink-500 hover:text-white hover:bg-pink-500'>Click to shop more!</button>
                </Link>
            </div>
        </div>
    )
}

export default FeaturedProducts