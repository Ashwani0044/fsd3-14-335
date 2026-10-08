import Book from "./components/Book";
import Pen from "./components/Pen";
import {b1, b2} from "./data/book";
import {p1, p2} from "./data/pen";
import Fruit from "./components/Fruit";
import Event from "./components/Event";

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
    <div className="min-h-screen bg-[#f5efe6] text-[#3b261d]">
      <header className="overflow-hidden bg-[#3b261d] text-[#fffaf2]">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#d6a77b]">
            Thoughtfully picked for you
          </p>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            The Daily Grind <span className="text-[#d6a77b]">Market</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#eadfd2] sm:text-lg">
            A little something for your reading nook, your desk, and your everyday.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-14">
        <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#9b6746]">
              The good things
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              A few favorites
            </h2>
          </div>
          <p className="text-sm text-[#806b5d]">Made for slow mornings and good ideas.</p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <Book book={b1} />
          <Book book={b2} />
          <Book book={b1} />
          <Book book={b2} />
          <Pen pen={p1} />
          <Pen pen={p2} />
          <Fruit />
          <Event />
        </div>
      </main>
    </div>
  )
}