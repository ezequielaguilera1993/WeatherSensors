import './App.css';
import { SensorEvents } from './Components/SensorEvents/SensorEvents';
import { Route } from 'react-router';
import { NavBar } from './Components/NavBar/NavBar';
import { SensorContainer } from './Components/SensorContainer/SensorContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path="/" component={SensorContainer} />
      <Route path="/sensorEvent" component={SensorEvents} />
    </div>
  );
}

export default App;
