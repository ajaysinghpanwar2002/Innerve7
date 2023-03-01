import React from 'react'
import '../styles/components/hotelDetailCard.css'
import { useNavigate } from 'react-router-dom';

function HotelDetailsCard({id,name,address,phone,category,price,num_reviews,timezone,available,about,img}) {
    const navigate = useNavigate();
    const handleClick =()=>{
        navigate(`/payment/${id}/${price}`);
    }
    return (
        <div className="hotel-details-card">
            <div className="hotel-details-card__image">
                <img src= {img} alt="img" />
            </div>
            <div className="hotel-details-card__content">
                <h2 className="hotel-details-card__name">Name: {name}</h2>
                <p className="hotel-details-card__address">Address: {address}</p>
                <p className="hotel-details-card__phone">Phone: {phone}</p>
                <p className="hotel-details-card__category">Category: {category}</p>
                <p className="hotel-details-card__price">price: {price}</p>
                <p className="hotel-details-card__reviews">{num_reviews} Reviews</p>
                <p className="hotel-details-card__timezone">Timezone: {timezone}</p>
                <p className="hotel-details-card__availability">booking:{available ? 'Available' : 'Not available'}</p>
                <p className="hotel-details-card__about">About Pricing:{about}</p>
            </div>
            <div>
                <button onClick={handleClick}>Book Now</button>
            </div>
        </div>
    )
}

export default HotelDetailsCard