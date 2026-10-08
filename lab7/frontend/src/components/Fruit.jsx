
const products = [
    {title:"Cabbage", id: 1, isFruit: false},
    {title:"Potato", id: 2, isFruit: false},
    {title:"Banana", id: 3, isFruit: true},
    {title:"Apple", id: 4, isFruit: true},
];

function Fruit() {
  return (
    <section className="h-full rounded-3xl border border-[#e8d9c8] bg-[#fffaf2] p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b6746]">Fresh picks</p>
      <h2 className="mb-5 mt-2 text-xl font-bold text-[#3b261d]">Market basket</h2>
      <ul className="divide-y divide-dashed divide-[#e8d9c8]">
        {products.map((item) => (
          <li className="flex items-center justify-between py-3" key={item.id}>
            <span className="font-medium text-[#5c4638]">{item.title}</span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                item.isFruit
                  ? "bg-[#efe1d2] text-[#70452f]"
                  : "bg-[#f6eee4] text-[#806b5d]"
              }`}
            >
              {item.isFruit ? "Fruit" : "Vegetable"}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Fruit
