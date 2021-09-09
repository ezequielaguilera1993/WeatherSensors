import { Link } from "react-router-dom"
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, useEffect } from "react";
import { getAllSensors } from "../../Redux/Actions/Actions";
import Style from './SensorContainer.module.scss'
import { RootState } from "../../Redux/Reducers";
import { SensorType, StoreType, SensorAndEventsType } from "../../Redux/Store";
import { SensorCard } from "../SensorCard/SensorCard";


export const SensorContainer: React.FunctionComponent<{}> = ({ }) => {
    const dispatch = useDispatch();
    const store: StoreType = useSelector((state: RootState) => state).defaultReducer
    const sensors: SensorAndEventsType[] = store.sensors

    useEffect(() => {
        dispatch(getAllSensors())
    }, [])

    return (
        <div id={Style.SensorContainer}>
            {sensors.map(e =>
                <SensorCard
                    key={e.id}
                    active={e.active}
                    id={e.id}
                    location={e.location}
                    maxval={e.maxval}
                    minval={e.minval}
                    name={e.name}
                    sensorEvents={e.sensorEvents}
                />)}

            <Link to="/createSensor">
                <button
                    style={{
                        position: "absolute",
                        right: "4%",
                        top: "50%",
                        width: "7vw",
                        height: "7vw",
                        borderRadius: "50%",
                        transform: "translateY(-50%)",
                        boxShadow: "0 0 1rem 0.1rem white",
                        fontSize: "1.2rem",
                        border: "10px solid black outset",
                        backgroundColor: "rgb(37, 37, 37)",
                        color: "white",
                    }}
                >
                    Crear Sensor
                </button>
            </Link>
        </div>
    )

}
