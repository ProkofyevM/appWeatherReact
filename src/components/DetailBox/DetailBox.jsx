import React from 'react';
import PressureSvg from '../SvgLogo/PressureSvg';
import WeatherSvg from '../SvgLogo/WeatherSvg';
import WindSvg from '../SvgLogo/WindSvg';

const DetailBox = ({wWeather, wWind, wPressure, wIcon}) => {
    return (
        <div className='detail-box'>
            
            <div className='sky'><WeatherSvg id='weatherSvg'/> {wWeather}</div>
            <div className='wind'><WindSvg id='windSvg'/> {wWind} м/с</div>
            <div className='pressure'><PressureSvg id='pressureSvg'/> {wPressure} мм </div>
        </div>
    );
};

export default DetailBox;