
const Button = () => {
    const handleClick = () => {
        alert("Button Clicked!!")
    }
    return (
        <button
          className="rounded-xl bg-[#6f4430] px-5 py-3 font-semibold text-[#fffaf2] transition hover:bg-[#4b2e23] focus:outline-none focus:ring-2 focus:ring-[#b7794b] focus:ring-offset-2"
          onClick={handleClick}
          type="button"
        >
          Click Me
        </button>
    )
}

const Event = () => {
  return (
    <section className="flex h-full flex-col items-start rounded-3xl border border-[#e8d9c8] bg-[#fffaf2] p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b6746]">A small moment</p>
      <h2 className="mb-2 mt-2 text-xl font-bold text-[#3b261d]">Take a little break</h2>
      <p className="mb-6 text-sm leading-6 text-[#806b5d]">
        Pause, take a breath, and enjoy the little things.
      </p>
      <div className="mt-auto">
        <Button />
      </div>
    </section>
  )
}

export default Event
