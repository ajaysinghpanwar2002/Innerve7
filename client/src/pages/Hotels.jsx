import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
// var geocoder = require('geocoder');
import dateFormat from 'dateformat';

function Hotels() {
    // 8 states 
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
                    url: 'https://trueway-geocoding.p.rapidapi.com/Geocode',
                    params: { address: location, language: 'en' },
                    headers: {
                        'X-RapidAPI-Key': 'f653f9944amsh1059ac4e6bf88ecp106dc7jsn3faca1ff2942',
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
    const checkOutDate = dateFormat(checkOut, 'yyyy-mm-dd');
    // console.log(checkInDate);
    // console.log(checkOutDate);

    // for params we have now => checkInDate, checkOutDate, lat, lon, adults

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng',
                    params: {
                        latitude: lat,
                        longitude: lon,
                        lang: 'en_US',
                        limit: '30',
                        adults: adults,
                        checkin: checkInDate,
                        nights: '2'
                    },
                    headers: {
                        'X-RapidAPI-Key': 'f653f9944amsh1059ac4e6bf88ecp106dc7jsn3faca1ff2942',
                        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                    }
                };
                const hotelsData = await axios.request(options);
                console.log(hotelsData.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchHotels();
    }, [lat, lon, adults, checkInDate]);

    return (
        <div>
            <h1>List of hotels in {location} it latitude is {lat} and longitude is {lon} on {checkIn}</h1>
        </div>
    )
}

export default Hotels