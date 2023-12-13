
import React from 'react'
import { BookProps } from '@/types';
import Image from 'next/image';

interface BooksCardProps {
    book: BookProps;
}

const BooksCard = ({ book }: BooksCardProps) => {
    const {cover_image, title, id} = book;
    // console.log(cover_image);

  return (
    <div className="flex-1 w-full items-center pt-10 relative">
        <div className="flex flex-wrap relative">
            <div className="card border px-3 py-3 rounded-md">
            {cover_image ? (
                <Image src={cover_image} width={300} height={100} className="object-contain" alt="book profile"/>
                ) : (
                    <p>No image available</p>
                )}
                 <div>
                <h3 className="font-bold uppercase flex items-center text-dark-700">{title}</h3>
            </div>
            </div>
            </div>
            <div></div>
            </div>         

  )
}

export default BooksCard