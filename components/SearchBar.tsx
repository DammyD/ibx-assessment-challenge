"use client";
import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { CustomButton } from '.';
import twistedarr from "../public/assets/arrows (1).svg";

interface SearchBarProps {
  onSearch: (results: any) => void; // Define the onSearch prop
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    console.log('Search submitted!');

    try {
      setLoading(true)
      const response = await fetch(`https://freetestapi.com/api/v1/books?search=${searchQuery}`);
      if (!response.ok) {
        throw new Error(`Error fetching books: ${response.statusText}`);
      }

      const data = await response.json();
      onSearch(data); // Pass the search results to the parent component
    } catch (error) {
      console.error('Error searching books:', error);
    }finally {
      setLoading(false);
    }
  };
  {loading && <p>Loading...</p>}

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="flex justify-center items-end">
        <div className="flex flex-col items-center sm:flex-row justify-center sm:items-end gap-4">
          <div className="bg-[#fafafa] w-full sm:w-[400px] md:w-[600px] h-[60px] py-2 px-3 rounded-[6px] flex items-center gap-1 sm:flex">
            <CustomButton title="categories" containerStyles="bg-dark-100 text-white rounded-md m-3" />
            <input
              type="text"
              placeholder="Search Anything"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full bg-[#fafafa] text-sm outline-none placeholder:text-[#bdbdbd]"
            />
            <FaSearch size="30" color="#bdbdbd" />
          </div>
          <h3 className="capitalize text-base font-bold mb-4 whitespace-nowrap">Or view the following courses...</h3>
          <div>
            <Image
              src={twistedarr}
              width={70}
              height={30}
              alt="arrows"
              className=""
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
