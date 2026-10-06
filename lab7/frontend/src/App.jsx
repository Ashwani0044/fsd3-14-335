import Book from "./components/Book";
import Pen from "./components/Pen";
import {b1, b2} from "./data/book";
import {p1, p2} from "./data/pen";
import Fruit from "./components/Fruit";

// const b1 = {
//   picUrl: "https://m.media-amazon.com/images/I/81t9cbIICUL._AC_UL480_FMwebp_QL65_.jpg",
//   bname: "React Designing Pattern",
//   price: 1099,
//   quantity: 7,
//   rating: 4.8,
// };

// const b2 = {
//   picUrl: "https://m.media-amazon.com/images/I/71ATEbKrGeL._AC_UY327_FMwebp_QL65_.jpg",
//   bname: "React Key Concepts",
//   price: 2588,
//   quantity: 9,
//   rating: 4.6,
// };

// const p1 = {
//   picUrl: "https://m.media-amazon.com/images/I/51vhSCJlpnL._SX522_.jpg",
//   company: "MontBlane",
//   price: 11050,
// };

// const p2 = {
//   picUrl: "https://m.media-amazon.com/images/I/61LcfXrT4kL._SX522_.jpg",
//   company: "Pierre Cardin",
//   price: 570,
// };

export default function App() {
  return (
    <>
      <h1>........ONLINE BOOK STORE........</h1>
      <div className="container">
        <Book book={b1}/>
        <Book book={b2}/>
        <Book book={b1}/>
        <Book book={b2}/>
        <Pen pen={p1}/>
        <Pen pen={p2}/>
        <Fruit />
      </div>
    </>
  )
}