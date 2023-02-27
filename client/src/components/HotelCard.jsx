import '../styles/components/HotelCard.css'

const HotelCard = ({ name, img, reviews, price, rating }) => {
    return (
        <div className="hotel-card">
            <div className='hotel-card-first'>
                <img src={img} alt="img" />
            </div>
            <div>
                <div>{rating}</div>
                <div>{reviews}</div>
            </div>
            <div>
                <div>{name}</div>
                <div>{price}</div>
            </div>
        </div>
    )
}
export default HotelCard