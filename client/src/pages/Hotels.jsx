import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

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

    useEffect(() => {
        axios.get("http://localhost:3001/users").then((res) => {
            // console.log(res.data);
            let data = res.data;
            setFirstName(res.data[data.length - 1].firstName);
            setLastName(res.data[data.length - 1].lastName);
            setEmail(res.data[data.length - 1].EmailAddress);
            setCheckIN(res.data[data.length - 1].checkInDate);
            setCheckOUT(res.data[data.length - 1].checkOutDate);
            setLocation(res.data[data.length - 1].Destination);
            setAdults(res.data[data.length - 1].NoOfGuests);
            setRadius('5000');
        });
    }, [])

    const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
        params: { query: 'eiffel tower', lang: 'en_US', units: 'km' },
        headers: {
            'X-RapidAPI-Key': 'f653f9944amsh1059ac4e6bf88ecp106dc7jsn3faca1ff2942',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };


    useEffect(() => {
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    }, []);

    return (
        <div>
            <h1>List of hotels</h1>
        </div>
    )
}

export default Hotels