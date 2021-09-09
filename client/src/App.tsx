import './App.css';
import { Sensors } from './Components/Sensors/Sensors';
import { SensorEvents } from './Components/SensorEvents/SensorEvents';
import { Route } from 'react-router';


function App() {
  return (
    <div className="App">
      <Route path="/sensors" component={Sensors} />
      <Route path="/sensorEvent" component={SensorEvents} />
    </div>
  );
}

export default App;
