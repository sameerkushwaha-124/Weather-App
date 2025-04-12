import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-[400px] px-5 flex justify-center items-center ' >
      <input
        className='search-input w-full outline-none border-1 border-gray-300 rounded-md p-2 mr-2'
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className='btn px-4 font-semibold text-black py-2 bg-blue-500 rounded-md hover:bg-blue-700' type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
