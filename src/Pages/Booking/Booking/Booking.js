import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect( ()=>{
        fetch(`https://serene-brushlands-95273.herokuapp.com/services/${serviceId}`)
        .then( res => res.json())
        .then( data => setService(data))
    },[])

    return (
        <div>
            <h2>Details of : {service.name}</h2>
            <h2>Booking of : {serviceId}</h2>
        </div>
    );
};

export default Booking;