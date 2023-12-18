"use client";
import { ChangeEvent, FormEvent, useState } from 'react';
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { CustomButton } from '.';
import twistedarr from "../public/assets/arrows (1).svg";

interface SearchBarProps {
  handleSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearchBooks = (event: ChangeEvent<HTMLInputElement>) => {
   setSearch(event.target.value);

  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event .preventDefault();
  setLoading(true);
    handleSearch(search);
  };

  


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="flex justify-center items-end">
        <div className="flex flex-col items-center sm:flex-row justify-center sm:items-end gap-4">
          <div className="bg-[#fafafa] w-full sm:w-[400px] md:w-[600px] h-[60px] py-2 px-3 rounded-[6px] flex items-center gap-1 sm:flex">
            <CustomButton title="categories" containerStyles="bg-dark-100 text-white rounded-md m-3" />
            <input
              type="text"
              placeholder="Search Anything"
              value={search}
              onChange={handleSearchBooks}
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
