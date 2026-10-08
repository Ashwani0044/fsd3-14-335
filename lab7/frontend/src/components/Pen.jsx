export default function Pen({pen}) {

    return (
        <div className="group flex h-full flex-col items-center rounded-3xl border border-[#e8d9c8] bg-[#fffaf2] p-5 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#9b6746]">Writing essentials</p>
            <img className="mb-5 h-48 w-full rounded-2xl bg-[#f1e7da] object-contain p-3" src={pen.picUrl} alt={`${pen.company} pen`} />
            <h2 className="text-lg font-bold text-[#3b261d]">{pen.company}</h2>
            <p className="mt-2 text-xl font-bold text-[#70452f]">Rs. {pen.price}</p>
        </div>
    )
}