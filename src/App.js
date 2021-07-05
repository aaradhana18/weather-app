import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';

import Weather from './app_component/weather.component';


//api calls api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}
const API_key = '30e40bd1f8db652a7d54fdf4420d0844';

class App extends React.Component{
  constructor(){
    super();
    this.state = {};
    this.getWeather();
  }

  getWeather = async()=>{
    const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`);
    const response = await api_call.json();
    console.log(response);
  };

  render(){
    return(
      <div className="App">
      <Weather/>
      </div>
    );
  }
}

export default App;
