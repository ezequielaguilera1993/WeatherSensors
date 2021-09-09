import './App.css';
import { SensorEvents } from './Components/SensorEvents/SensorEvents';
import { Route } from 'react-router';
import { NavBar } from './Components/NavBar/NavBar';
import { SensorContainer } from './Components/SensorContainer/SensorContainer';
import { CreateSensor } from './Components/CreateSensor/CreateSensor';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={SensorContainer} />
      <Route path="/sensorEvent" component={SensorEvents} />
      <Route path="/createSensor" component={CreateSensor} />
    </div>
  );
}

export default App;
