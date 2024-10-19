import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import allProducts from '../data/data'
import CartContext from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const matchedproduct = allProducts.find((product) => product.id === Number(id));

    const { addToCart } = useContext(CartContext);

    return (
        <div className='flex flex-col gap-4 md:mx-20 mx-8'>
            <h2 className='text-2xl font-semibold'>Product Details</h2>
            <div className='flex flex-col lg:flex-row md:gap-6 gap-4 '>
                <div className='w-full lg:w-1/2'>
                    <img src={matchedproduct.image} className='rounded-2xl max-h-[500px]  w-full' />
                </div>
                <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                    <h2 className='text-2xl font-semibold'>{matchedproduct.name}</h2>
                    <p className='text-gray-400'>{matchedproduct.description}</p>
                    <div>
                        <button className='py-1 px-4 border-2 text-lg border-pink-400 rounded-3xl text-pink-400 hover:text-white hover:bg-pink-400' onClick={() => addToCart(matchedproduct)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail