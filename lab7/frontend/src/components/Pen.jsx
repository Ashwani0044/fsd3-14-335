export default function Pen({pen}) {

    return (
        <div className="pen">
            <img className="pen-image" src={pen.picUrl} alt="pen" />
            <h3 className="pen-company">{pen.company}</h3>
            <h4 className="pen-price">Rs. {pen.price}</h4>
        </div>
    )
}