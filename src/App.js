import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';

import Weather from './app_component/weather.component';


//api calls api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}
const API_KEY = '30e40bd1f8db652a7d54fdf4420d0844';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
    };
    this.getWeather();

    this.weatherIcon = {
      Thunderstorm:"wi-thunderstorm",
      Drizzle:"wi-sleet",
      Rain:"wi-storm-showers",
      Snow:"wi-snow",
      Atmosphere:"wi-fog",
      Clear:"wi-day-sunny",
      Clouds:"wi-day-fog"
    }
  }

  calCelsius(temp){
    let cell = Math.floor(temp-273.15);
    return cell;
  }

  get_WeatherIcon(icons,rangeld){
    switch(true){
      case rangeld>=200 && rangeld<=232:
        this.setState({icon: this.weatherIcon.Thunderstorm});
        break;
      case rangeld>=300 && rangeld<=321:
        this.setState({icon: this.weatherIcon.Drizzle});
        break;
      case rangeld>=500 && rangeld<=531:
        this.setState({icon: this.weatherIcon.Rain});
        break;
      case rangeld>=600 && rangeld<=622:
        this.setState({icon: this.weatherIcon.Snow});
        break;
      case rangeld>=701 && rangeld<=781:
        this.setState({icon: this.weatherIcon.Atmosphere});
        break;
      case rangeld===800:
        this.setState({icon: this.weatherIcon.Clear});
        break;
      case rangeld>=801 && rangeld<=804:
        this.setState({icon: this.weatherIcon.Clouds});
        break;
      default:
        this.setState({icon: this.weatherIcon.Clouds});
    }
  }

  getWeather = async()=>{
    //const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`);
    //const api_call = await fetch(`http://worldtimeapi.org/api/timezone/Asia/Kolkata`);
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Washington,uk&appid=${API_KEY}`)
    const response = await api_call.json();
    console.log(response);
    this.setState({
      city:response.name,
      country:response.sys.country,
      celsius:this.calCelsius(response.main.temp),
      temp_max:this.calCelsius(response.main.temp_max),
      temp_min:this.calCelsius(response.main.temp_min),
      description:response.weather[0].description,
      //icon:this.weatherIcon.Thunderstorm
    });
    this.get_WeatherIcon(this.weatherIcon,response.weather[0].id);
  };

  render(){
    return(
      <div className="App">
      <Weather 
      city={this.state.city} 
      country={this.state.country} 
      temp_celsius={this.state.celsius} 
      temp_min={this.state.temp_min}
      temp_max={this.state.temp_max}
      description={this.state.description}
      weatherIcon={this.state.icon}
      />
      </div>
    );
  }
}

export default App;
