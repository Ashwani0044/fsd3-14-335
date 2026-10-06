
const products = [
    {title:"Cabbage", id: 1, isFruit: false},
    {title:"Potato", id: 2, isFruit: false},
    {title:"Banana", id: 3, isFruit: true},
    {title:"Apple", id: 4, isFruit: true},
];

function Fruit() {
  return (
    <ul className="fruit-list">
      {products.map((item) => (
        <li
          className={item.isFruit ? "fruit-item fruit" : "fruit-item vegetable"}
          key={item.id}
        >
          {item.title}
        </li>
      ))}
    </ul>
  )
}

export default Fruit
