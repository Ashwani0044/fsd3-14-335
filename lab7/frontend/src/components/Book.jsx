
export default function Book({ book }) {
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
