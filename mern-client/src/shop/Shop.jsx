import React, { useEffect, useState } from 'react'

import { Card } from 'flowbite-react';




const Shop = () => {
  const [books, setBooks] = useState([]);

  



  useEffect (() =>{
fetch("https://book-shelf-1.onrender.com0/all-books").then(res =>res.json()).then(data => setBooks(data));
  },[])

  

  return (
    <div className='mt-28 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center'>All Your Books are here</h2>

    <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
      {
        books.map(book =>  <Card
        >
          <img src={book.imageUrl} alt="" className='h-96'/>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {book.bookTitle}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          Author - {book.authorName}
          </p>
          <button className='bg-yellow-700 font-semibold text-white rounded'>Read Now</button>
        </Card> )
      }
    </div>

    </div>
  )
}

export default Shop