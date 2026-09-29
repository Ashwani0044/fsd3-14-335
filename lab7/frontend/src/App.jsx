
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
      <img src="https://m.media-amazon.com/images/I/81t9cbIICUL._AC_UL480_FMwebp_QL65_.jpg" alt="React_Book" />
      <h1>Let Us React</h1>
      <h2>Price: 765.00</h2>
      <h3>Quantity: 5</h3>
      <h2>Rating: 4.3</h2>
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