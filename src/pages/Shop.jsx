import React, { useContext, useState } from 'react'
import CartContext from '../context/CartContext.jsx'
import allproducts from '../data/data.js';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Shop = () => {
    const { cart, addToCart, searchQuery } = useContext(CartContext);
    const [filter, setFilter] = useState('')

    const handleFilter = (e) => {
        setFilter(e.target.value)
    }

    const filteredProducts = allproducts.filter(product => {
        const matchedSearchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchedFilter = filter ? product.category === filter : true;
        return matchedSearchQuery && matchedFilter;
    })

    const isProductInCart = (productId) => {
        return cart.some(item => item.id === productId);
    };

    return (
        <div className='flex flex-col gap-4 md:mx-20 mx-8 my-8'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-semibold'>All Products</h2>
                <select name="Filter by" className='outline-none px-2 rounded-3xl bg-gray-200' onChange={handleFilter}>
                    <option value="">Filter</option>
                    <option value="cloth">Cloth</option>
                    <option value="accessories">Accessories</option>
                    <option value="gadget">Gadget</option>
                </select>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-10'>
                {filteredProducts.map((product) => (
                    <div className='flex flex-col gap-2'>
                        <Link to={`/productDetail/${product.id}`}>
                            <img src={product.image} className='rounded-3xl h-72 w-full' />
                        </Link>

                        <div className='flex justify-between'>
                            <h2 className='text-xl'> {product.name}</h2>
                            <p className='text-xl'>${product.price}</p>
                        </div>
                        <p>{product.description.slice(0, 100)} ....</p>
                        <div>
                            <button className={`py-1 px-4 border-2 text-lg rounded-3xl ${isProductInCart(product.id) ? "cursor-not-allowed bg-gray-400 text-white  " : "border-pink-400 text-pink-400 hover:text-white hover:bg-pink-400"} `}
                                onClick={() => {
                                    if (!isProductInCart(product.id)) {
                                        addToCart(product);
                                        toast.success(`${product.name} added to cart`);
                                    }
                                }}
                            >
                                {isProductInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop