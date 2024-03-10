import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

export const ReadYourBook = () => {
    const [books, setBooks] =useState([]);
    useEffect(() =>{
        fetch("https://book-shelf-1.onrender.com")
    },[])
  return (
    <div>
      <BookCards books={books} headline="Read Your Book"/>
    </div>
  )
}
