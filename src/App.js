import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';

import Weather from './app_component/weather.component';

const API_key = '30e40bd1f8db652a7d54fdf4420d0844';

function App() {
  return (
    <div className="App">
      <Weather/>
    </div>
  );
}

export default App;
