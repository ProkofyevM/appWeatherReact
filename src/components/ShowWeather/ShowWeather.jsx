import React from 'react';

const ShowWeather = (props) => {
    return (
        <div className={(props.sWeather === 'Clear')? 'show-box clear': (props.sWeather === 'Clouds')? 'show-box clouds'  : (props.sWeather === 'Rain')? 'show-box rain': (props.sWeather === 'Thunderstorm')? 'show-box storm' : 'ff'}>
            
        </div>
    );
};

export default ShowWeather;