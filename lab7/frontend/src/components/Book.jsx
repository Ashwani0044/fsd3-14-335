
export default function Book({ book }) {
    return (
      <div className="group flex h-full flex-col rounded-3xl border border-[#e8d9c8] bg-[#fffaf2] p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl">
        <h2 className="mb-4 flex min-h-14 items-center justify-center text-center text-lg font-bold leading-6 text-[#3b261d]">
          {book.bname}
        </h2>
        <img
          className="mb-4 h-56 w-full rounded-2xl bg-[#f1e7da] object-cover"
          src={book.picUrl}
          alt={book.bname}
        />
        <p className="mb-2 rounded-xl bg-[#efe1d2] px-3 py-2 text-center text-lg font-bold text-[#70452f]">
          Price: Rs. {book.price}
        </p>
        <p className="mb-2 rounded-xl bg-[#f6eee4] px-3 py-2 text-center text-sm font-medium text-[#806b5d]">
          Quantity: {book.quantity}
        </p>
        <p className="mb-4 rounded-xl bg-[#f6eee4] px-3 py-2 text-center text-sm font-medium text-[#806b5d]">
          Rating: {book.rating}
        </p>
        <button
          className="mt-auto w-full rounded-xl bg-[#6f4430] px-4 py-3 font-semibold text-[#fffaf2] transition hover:bg-[#4b2e23] focus:outline-none focus:ring-2 focus:ring-[#b7794b] focus:ring-offset-2"
          type="button"
        >
          Buy Now
        </button>
      </div>
    )
}
