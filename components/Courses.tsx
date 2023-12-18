"use client";
import {  useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { FaFilter } from "react-icons/fa";
import { fetchBooks } from "@/utils";
import { BooksCard } from ".";
import Link from "next/link";

interface BookProps {
  id: number; 
  title: string; 
  cover_image: string; 
}

const Courses = ({}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [allBooks, setAllBooks] = useState<BookProps[]>([]);
  const [searchResults, setSearchResults] = useState<BookProps[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  
  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchAllBooks = async () => {
      try {
        const books = await fetchBooks();
        setAllBooks(books);
        setLoading(false);
      } catch (error) {
       setError(error as Error);
       setLoading(false);
      }
    };

    fetchAllBooks();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleSearch = async (query: string) => {
    // Update the search query
    setSearchQuery(query);
  
    // If the query is empty, reset the search results to allBooks
    if (query.trim() === '') {
      setSearchResults(allBooks);
      return;
    }
  
    // Perform the search using the new API
    try {
      setLoading(true);
      setError(null);
  
      const response = await fetch(`https://freetestapi.com/api/v1/books?search=${encodeURIComponent(query)}`);
      const searchResultsData = await response.json();
      console.log('Search Results:', searchResultsData);
  
      // Update the search results in the state
      setSearchResults(searchResultsData);
      setLoading(false);
    } catch (error) {
      setError(error as Error);
      setLoading(false);
    }
  };

  const lastBookIndex = currentPage * itemsPerPage;
  const firstBookIndex = lastBookIndex - itemsPerPage;
  const currentBooks = allBooks.slice(firstBookIndex, lastBookIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

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
      <SearchBar handleSearch={handleSearch}/>

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
            <Link href="/" className="font-semibold text-base">
              design
            </Link>
          </div>
          <div className="rounded-md px-4 py-3.5 m-2 hover:text-purple-100">
            <Link href="/" className="font-semibold text-base">
              development
            </Link>
          </div>
          <div className="rounded-md px-4 py-3.5 m-2 hover:text-purple-100">
            <Link href="/" className="font-semibold text-base">
              photography
            </Link>
          </div>
          <div className="rounded-md px-4 py-3.5 m-2 hover:text-purple-100">
            <Link href="/" className="font-semibold text-base">
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
          {currentBooks.map((book) => (
            <BooksCard key={book.id} book={book} />
          ))}
        </div>
         {/* Pagination buttons */}
         <div className="flex justify-center mt-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-purple-700 text-white px-4 py-2 mr-2 rounded-md cursor-pointer"
          >
            Previous
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={lastBookIndex >= allBooks.length}
            className="bg-purple-700 text-white px-4 py-2 rounded-md cursor-pointer"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Courses;
