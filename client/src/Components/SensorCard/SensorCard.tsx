import { Link } from "react-router-dom"
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, useEffect } from "react";
import { getAllSensors } from "../../Redux/Actions/Actions";
import Style from './SensorCard.module.scss'
import { SensorType, SensorAndEventsType } from "../../Redux/Store";

export const SensorCard: React.FunctionComponent<SensorAndEventsType> = ({
    active,
    id,
    location,
    maxval,
    minval,
    name,
    sensorEvents
}) => {

    function handleDeleteSensor() {
        console.log("img");
        axios.delete("http://localhost:3001/sensor/deleteSensor", {
            data: { id }
        });
    }

    let eventsValues = sensorEvents.map(e => e.value)

    let eventTriggered = eventsValues.some(e => e <= minval || e >= maxval)

    return (<div id={eventTriggered ? Style.SensorCardEventTriggered : Style.SensorCard}>

        <img onClick={handleDeleteSensor} id={Style.delete} src="https://cdn.icon-icons.com/icons2/1157/PNG/512/1487086362-cancel_81578.png" />

        <div id={Style.nameContainer}>
            <input id={Style.name} contentEditable={true} defaultValue={name} />
            <img id={Style.edit} src="https://image.flaticon.com/icons/png/512/51/51648.png" />
        </div>
        <div>{active}</div>
        {/* <div>{id}</div> */}
        <div>{"Latitud: " + location[0] + " / Longitud: " + location[1]}</div>
        <div>{"Mínima: " + minval}</div>
        <div>{"Máxima: " + maxval}</div>

    </div>)

}
