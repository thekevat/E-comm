import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [inputValue, setInputValue] = useState('');
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(inputValue);  // Only update context when button is clicked
    console.log("Search submitted:", inputValue);
  };

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <form onSubmit={handleSearchSubmit} className="my-5 mx-3">
        <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 rounded-full w-3/4 sm:w-1/2">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 outline-none bg-inherit text-sm"
            type="text"
            placeholder="Search"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-full ml-2"
          >
            Search
          </button>
        </div>
      </form>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        src={assets.cross_icon}
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;
