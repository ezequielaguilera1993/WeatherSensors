import { Link } from "react-router-dom"
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, useEffect, useState } from "react";
import { deleteSensor, getAllSensors, patchSensorName } from "../../Redux/Actions/Actions";
import Style from './SensorCard.module.scss'
import { SensorType, SensorAndEventsType } from "../../Redux/Store";
import { TargetElement } from "@testing-library/user-event";

export const SensorCard: React.FunctionComponent<SensorAndEventsType> = ({
    active,
    id,
    location,
    maxval,
    minval,
    name: initialName,
    sensorEvents
}) => {
    const dispatch = useDispatch();



    function handleDeleteSensor() {
        axios.delete("http://localhost:3001/sensor/deleteSensor", {
            data: { id }
        }).then(() => {
            //Si sale bien, lo elimino del estadox
            dispatch(deleteSensor(id))

        }).catch(err => console.log(err))
    }


    async function onChangeSensorName(e: React.ChangeEvent<HTMLInputElement>) {
        let changeName = e.target.value
        axios.patch("http://localhost:3001/sensor/patchSensorName", {
            data: { id, name: changeName }
        }).then(() => {
            //Si sale bien, lo elimino del estadox
            dispatch(patchSensorName({ id, name: changeName }))

        }).catch(err => console.log(err))
    }







    let eventsValues = sensorEvents.map(e => e.value)

    let eventTriggered = eventsValues.some(e => e <= minval || e >= maxval)

    return (
        <Link to={"/SensorEvents/" + id} style={{ textDecoration: 'none' }}>
            <div id={eventTriggered ? Style.SensorCardEventTriggered : Style.SensorCard}>

                <img onClick={handleDeleteSensor} id={Style.delete} src="https://cdn.icon-icons.com/icons2/1157/PNG/512/1487086362-cancel_81578.png" />

                <div id={Style.nameContainer}>
                    <input id={Style.name} contentEditable={true} onChange={onChangeSensorName} defaultValue={initialName} />
                    <img id={Style.edit} src="https://image.flaticon.com/icons/png/512/51/51648.png" />
                </div>
                <div>{active}</div>

                <div>{"Latitud: " + location[0] + " / Longitud: " + location[1]}</div>
                <div>{"Mínima: " + minval}</div>
                <div>{"Máxima: " + maxval}</div>

            </div>
        </Link>
    )

}
