import React from 'react';

const LocationBox = ({wName, wCountry, wDate}) => {
    return (
        <div className='location-box'>
            <div className='location'>{wName}, {wCountry}</div>
            <div className='date'>{wDate}</div>
        </div>
    );
};

export default LocationBox;