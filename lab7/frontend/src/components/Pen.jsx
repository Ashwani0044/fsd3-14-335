export default function Pen({pen}) {

    return (
        <>
            <img src={pen.picUrl} alt="pen" />
            <h3>{pen.company}</h3>
            <h4>Rs. {pen.price}</h4>
        </>
    )
}