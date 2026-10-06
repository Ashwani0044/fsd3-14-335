
const Button = () => {
    const handleClick = () => {
        alert("Button Clicked!!")
    }
    return (
        <button style={{padding: "4px 8px", color: "white", background: "green"}}
         onClick={handleClick}>
            Click Me
        </button>
    )
}

const Event = () => {
  return (
    <div>
      <Button />
    </div>
  )
}

export default Event
