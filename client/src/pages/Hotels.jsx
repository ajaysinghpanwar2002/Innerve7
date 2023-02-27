import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
// var geocoder = require('geocoder');
import dateFormat from 'dateformat';
import Loader from '../components/Loader';
import HotelCard from '../components/HotelCard';

// fake hostels
import fakeHosteldata from '../data/FakeHotel.js'
import FakeHotel from '../data/FakeHotel.js';
import '../styles/components/hotelCard.css'

function Hotels() {
    const [loading, setLoading] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [checkIn, setCheckIN] = useState('');
    const [checkOut, setCheckOUT] = useState('');
    const [location, setLocation] = useState('');
    const [adults, setAdults] = useState('');
    const [radius, setRadius] = useState('');
    // latitude and longitude
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    // final data from api 
    const [hotelsBigData, setHotelsBigData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await axios.get("http://localhost:3001/users");
                setFirstName(userData.data[userData.data.length - 1].firstName);
                setLastName(userData.data[userData.data.length - 1].lastName);
                setEmail(userData.data[userData.data.length - 1].EmailAddress);
                setCheckIN(userData.data[userData.data.length - 1].checkInDate);
                setCheckOUT(userData.data[userData.data.length - 1].checkOutDate);
                setLocation(userData.data[userData.data.length - 1].Destination);
                setAdults(userData.data[userData.data.length - 1].NoOfGuests);
                setRadius('5000');

                const options = {
                    method: 'GET',
                    // url: 'https://trueway-geocoding.p.rapidapi.com/Geocode',
                    params: { address: location, language: 'en' },
                    headers: {
                        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_API_KEY,
                        'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
                    }
                };

                const locationData = await axios.request(options);
                // console.log(locationData.data.results[0].location);
                setLat(locationData.data.results[0].location.lat);
                setLon(locationData.data.results[0].location.lng);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [location]);


    const checkInDate = dateFormat(checkIn, 'yyyy-mm-dd');
    // const checkOutDate = dateFormat(checkOut, 'yyyy-mm-dd');

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const options = {
                    method: 'GET',
                    // url: 'https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng',
                    params: {
                        // latitude: lat,
                        // longitude: lon,
                        latitude: '18.5204',
                        longitude: '73.8567',
                        lang: 'en_US',
                        limit: '30',
                        adults: adults,
                        checkin: checkInDate,
                        nights: '2'
                    },
                    headers: {
                        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_API_KEY,
                        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                    }
                };
                const hotelsData = await axios.request(options);
                console.log(hotelsData.data.data);
                setHotelsBigData(hotelsData.data.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchHotels();
    }, [lat, lon, adults, checkInDate]);


    return (
        <div>
            {/* {
                loading ? <Loader /> : (
                    <div>
                        {Array.isArray(hotelsBigData) && FakeHotel.map((i) => {
                            return (
                                <HotelCard
                                    id = {i.location_id}
                                    key={i.location_id}
                                    name={i.name}
                                    img={i.photo.images.original.url}
                                    reviews={i.num_reviews}
                                    price={i.price}
                                    rating={i.rating}
                                /> 
                            )
                        })}
                    </div>
                )
            } */}
            {
                    <div className="card-container">
                        {FakeHotel.map((i) => {
                            return (
                                <HotelCard
                                    id={i.location_id}
                                    key={i.location_id}
                                    name={i.name}
                                    // img={i.photo.images.original.url}
                                    reviews={i.num_reviews}
                                    price={i.price}
                                    rating={i.rating}
                                />
                            )
                        })} 
                    </div>
                
            }
        </div>
    )
};


export default Hotels