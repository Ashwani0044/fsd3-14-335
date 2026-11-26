import React from 'react'
import Book from './Book.jsx'
import { books } from '../data.js'

const BookList = () => {
  return (
    <div>
        <h1>-------- Book List --------</h1>
      {books.map((book, i) => (
        <Book
          key={i}
          name={book.name}
          author={book.author}
          price={book.price}
          rating={book.rating}
          image_url={book.image_url}
        />
      ))}
    </div>
  )
}

export default BookList
