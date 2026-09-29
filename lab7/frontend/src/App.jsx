
const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/81t9cbIICUL._AC_UL480_FMwebp_QL65_.jpg",
  bname: "React Designing Pattern",
  price: 1099,
  quantity: 7,
  rating: 4.8,
};


function Book() {
  return (
    <div>
      <h1>{b1.bname}</h1>
      <img src={b1.picUrl} alt="React_Book" />
      <h2>Price: {b1.price}</h2>
      <h3>Quantity: {b1.quantity}</h3>
      <h2>Rating: {b1.rating}</h2>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Book />
      <h1>Hello React</h1>
      <Book />
      <Book />
      <Book />
      <Book />
    </>
  )
}