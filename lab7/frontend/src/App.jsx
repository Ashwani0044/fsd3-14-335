import Book from "./components/Book";

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

<Book />

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