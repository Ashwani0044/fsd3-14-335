import React from 'react';

const Book = (args) => {
  return (
    <div className="book-card">
      <img
        src={args.image_url}
        alt={args.name || 'Book cover'}
        style={{ width: '200px', height: '300px', objectFit: 'cover' }}
      />
      <h2>{args.name}</h2>
      <p>By {args.author}</p>
      <p>
        <strong>Rs. {args.price}</strong>
      </p>
      {args.rating && <p>Rating: {args.rating} / 5</p>}
    </div>
  );
};

export default Book;
