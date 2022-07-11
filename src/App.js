import React, { useState } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import LocationBox from './components/LocationBox/LocationBox';
import TempBox from './components/WeatherBox/WeatherBox';
import DetailBox from './components/DetailBox/DetailBox';
import ShowWeather from './components/ShowWeather/ShowWeather';
import './styles/index.css'

const api = {
  key: '9a222a6d159dfcc6144305b4959558f7',
  base: 'http://api.openweathermap.org/data/2.5/'
}

function App() {

  const [value, setValue] = useState('');
  const [weather, setWeather] = useState({});
  
  const search = (e) => {
    if(e.key === 'Enter') {
    fetch(`${api.base}weather?q=${value}&units=metric&appid=${api.key}`)
        .then(response => response.json())
        .then(result => {
          setWeather(result);
          setValue('');
          console.log(result)
        })
    }
  }

  const format_date = (d) => {
    let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 16) ? 'warm' : 'cold') : 'app'}>
        <main>
          <div className='search-box'>
            <SearchBox
              value = {value}
              onChange = {e => setValue(e.target.value)}
              onKeyPress = {search}
              type = 'text'
              placeholder='Поиск...'
            />
          </div>
          {(typeof weather.main != 'undefined') ? (
          <div>
            <LocationBox
              wName = {weather.name}
              wCountry = {weather.sys.country}
              wDate = {format_date(new Date())}/>
          <div className='weather'>
            <TempBox
              wTemp = {Math.round(weather.main.temp)}
                />
            <ShowWeather
              sWeather = {weather.weather[0].main}/>
            <DetailBox
              wWeather = {weather.weather[0].main}
              wWind = {Math.floor(weather.wind.speed)}
              wPressure = {((weather.main.pressure) / 1.33).toFixed()}
              />
          </div>
            
          </div>
          ) : ('')}
        </main>
    </div>
  );
          }

export default App;
