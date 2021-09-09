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
        </div>
    )

}
