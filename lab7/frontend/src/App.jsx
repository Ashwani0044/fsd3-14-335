
const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/81t9cbIICUL._AC_UL480_FMwebp_QL65_.jpg",
  bname: "React Designing Pattern",
  price: 1099,
  quantity: 7,
  rating: 4.8,
};

const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/71ATEbKrGeL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "React Key Concepts",
  price: 2588,
  quantity: 9,
  rating: 4.6,
};

function Book({ book }) {
  const qtyStyle = {
    fontSize:"1.2rem",
    color:"black",
    textAlign:"center",
    backgroundColor:"yellow",
    padding:"10px",
  };

  return (
    <div className="book">
      <h1>{book.bname}</h1>
      <img src={book.picUrl} alt="React_Book" />
      <h2 style ={{fontSize:"1.2rem",
        color:"white",
        textAlign:"center",
        backgroundColor:"red",
        padding:"10px"}}
      >Price: {book.price}</h2>
      <h3 style={qtyStyle}>Quantity: {book.quantity}</h3>
      <h2 style={{
        fontSize:"1.2rem",
        color:"blue",
        textAlign:"center",
        backgroundColor:"gray",
        padding:"10px",
      }}>Rating: {book.rating}</h2>
      <button type="submit">Buy Now</button>
    </div>
  )
}

export default function App() {
  return (
    <>
      <h1>........ONLINE BOOK STORE........</h1>
      <div className="container">
        <Book book={b1}/>
        <Book book={b2}/>
        <Book book={b1}/>
        <Book book={b2}/>
      </div>
    </>
  )
}