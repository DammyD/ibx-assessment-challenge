"use client";
import { SetStateAction, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { FaFilter } from "react-icons/fa";
import { fetchBooks } from "@/utils";
import { BooksCard } from ".";
import Link from "next/link";

const Courses = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    // Fetch all books initially or when the component mounts
    const fetchAllBooks = async () => {
      try {
        const books = await fetchBooks(); // Replace with your actual API call or data fetching logic
        setAllBooks(books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchAllBooks();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleSearch = (results: SetStateAction<never[]>) => {
    // Update the search results in the state
    setSearchResults(results);
  };
  return (
    <div className="mt-12 padding-x padding-y max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto" id="collection">
      <div className="flex flex-col items-center justify-center">
        <h1 className="2xl:text-[50px]text-center capitalize sm:text-[40px] text-[20px] font-extrabold mb-8 whitespace-nowrap leading-relaxed">
          search among <span className="text-purple-100">58340</span> courses
          and <br className="sm:inline-block ml-0 sm:ml-10" />
          <span className="ml-10">find your favorite course</span>
        </h1>
        <div></div>
      </div>
      <SearchBar onSearch={handleSearch}/>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-5 sm:mt-10">
        <div className="mb-4 sm:mb-0">
          <h2 className="font-bold uppercase flex items-center text-dark-700 text-lg">
            <span className="w-1.5 h-1.5 bg-purple-700 rounded-full mr-1"></span>
            New Courses(books)
          </h2>
        </div>

        <div className="flex capitalize justify-around items-center mt-2 sm:mt-0 flex-wrap">
          <div className="bg-gray-100 rounded-md px-4 py-3.5 m-2">
            <h4 className="font-bold text-base">All course</h4>
          </div>
          <div className="rounded-md px-4 py-3.5 m-2 hover:text-purple-100">
            <Link href="/" className="font-bold text-base">
              design
            </Link>
          </div>
          <div className="rounded-md px-4 py-3.5 m-2 hover:text-purple-100">
            <Link href="/" className="font-bold text-base">
              development
            </Link>
          </div>
          <div className="rounded-md px-4 py-3.5 m-2 hover:text-purple-100">
            <Link href="/" className="font-bold text-base">
              photography
            </Link>
          </div>
          <div className="rounded-md px-4 py-3.5 m-2 hover:text-purple-100">
            <Link href="/" className="font-bold text-base">
              music
            </Link>
          </div>
          <div className="group inline-block">
            <div className="rounded-md px-2.5 py-2 bg-gray-100 group-hover:bg-purple-500 group-hover:text-white transition duration-300">
              <FaFilter />
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-md shadow-md mt-4">
          {allBooks.map((book) => (
            <BooksCard book={book} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
