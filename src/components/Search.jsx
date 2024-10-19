import React, { useContext } from 'react'
import { CiSearch } from "react-icons/ci";
import CartContext from '../context/CartContext.jsx'

export const Search = () => {
  const { searchQuery, setSearchQuery } = useContext(CartContext)

  return (
    <div
      className="flex items-center justify-between flex-1 bg-gray-100 rounded-2xl "
    >
      <input
        placeholder="Search ..."
        className="bg-transparent px-2 py-1 outline-none "
        type="text"
        name="name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <CiSearch size={20} className="mr-4" />
    </div>
  );
};
