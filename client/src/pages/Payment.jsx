import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import StripeContainer from '../components/StripeContainer';

function Payment() {
    let { id, price } = useParams();
    const [showItem, setShowItem] = useState(false);
    return (
        <div style={{
            background: '#f8f8f8',
            display: 'flex',
            'flex-direction': 'column'
        }}>
            <h1>Book your hotel with Udchalein</h1>
            {showItem ? (<StripeContainer />) : (
                <div>
                    <div>
                        <h3>Bill Range: {price}<br />For the hotel id {id}</h3>
                        <button onClick={() => setShowItem(true)}>Book Hotel</button>
                    </div>
                    <div>
                        <h1>Book your hotel, using payment link</h1>
                        <h3>
                            <a href='https://buy.stripe.com/test_28o2as8IGeFK2Fa288' target="_blank">Stripe Payment link</a>
                        </h3>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Payment