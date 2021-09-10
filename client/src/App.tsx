import './App.scss';
import { SensorEvents } from './Components/SensorEvents/SensorEvents';
import { Route } from 'react-router';
import { NavBar } from './Components/NavBar/NavBar';
import { SensorContainer } from './Components/SensorContainer/SensorContainer';
import { CreateSensor } from './Components/CreateSensor/CreateSensor';
import { AddEvent } from './Components/AddEvent/AddEvent';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={SensorContainer} />
      <Route path="/sensorEvents/:id" component={SensorEvents} />
      <Route path="/createSensor" component={CreateSensor} />
      <Route path="/addEvent/:id" component={AddEvent} />
    </div>
  );
}

export default App;
