import React from 'react'

function Hello() {
  return (
    <div>
      <h1>Book name</h1>
      <h2>Author</h2>
      <h3>Price</h3>
    </div>
  )
}

function Hello2(args) {
  return (
    <div>
      <h1>{args.bookName}</h1>
      <h2>{args.author}</h2>
      <h3>Rs. {args.price}</h3>
      <h1>-------------------------------------------------</h1>
      <br />
    </div>
  )
}

const App = () => {
  const bookName = ["The Great Gatsby", "To Kill a Mockingbird", "1984", "Pride and Prejudice", "The Catcher in the Rye"];
  const author = ["F. Scott Fitzgerald", "Harper Lee", "George Orwell", "Jane Austen", "J.D. Salinger"];
  return (
    <div>
      <h1>React Fundamental</h1>  
      <Hello />

      {bookName.map((book, i) => (
        <Hello2 
          key={i} 
          bookName={book} 
          author={author[i]} 
          price={(i+1) * 100} 
        />
      ))}

    </div>
  )
}

export default App
