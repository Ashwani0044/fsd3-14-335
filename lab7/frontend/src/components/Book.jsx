
export default function Book({ book }) {
    return (
      <div className="book">
        <h1 className="book-title">{book.bname}</h1>
        <img className="book-image" src={book.picUrl} alt="React_Book" />
        <h2 className="book-price">Price: {book.price}</h2>
        <h3 className="book-quantity">Quantity: {book.quantity}</h3>
        <h2 className="book-rating">Rating: {book.rating}</h2>
        <button className="book-button" type="submit">Buy Now</button>
      </div>
    )
}
