import { Link } from "react-router-dom"
import Style from './SensorEvents.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Reducers";
import { StoreType, SensorEventType, SensorType } from "../../Redux/Store";

export const SensorEvents: React.FunctionComponent<{ match: any }> = ({ match }) => {

    const id = match.params.id
    const store: StoreType = useSelector((state: RootState) => state).defaultReducer
    let sensor = store.sensors.find(e => e.id === id)
    let minval = sensor?.minval
    let maxval = sensor?.maxval

    let sensorEvents = store.sensors.find(e => e.id === id)?.sensorEvents || []

    let sensorName = sensor?.name

    function trigger(value: number): boolean {
        if (minval && maxval) {
            return (value <= minval || value >= maxval) ? true : false
        }
        else { alert("ERROR en trigger"); return false }
    }

    return (<div id={Style.container}>
        <h1 id={Style.title}> {sensorName && sensorName[0].toUpperCase() + sensorName.slice(1)}</h1>
        <div id={Style.eventsContainer}>


            {sensorEvents.map(e =>
                <div id={trigger(e.value) ? Style.eventTrigger : Style.event}>
                    <div>{"Value: " + e.value}</div>
                    <div>{"Creación: " + e.createat}</div>
                </div>
            )}
        </div>

        <Link to={"/addEvent/" + id}>
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
                Añadir evento
            </button>
        </Link>

    </div>

        // <div id={eventTriggered ? Style.SensorCardEventTriggered : Style.SensorCard}>

        //     <img onClick={handleDeleteSensor} id={Style.delete} src="https://cdn.icon-icons.com/icons2/1157/PNG/512/1487086362-cancel_81578.png" />

        //     <div id={Style.nameContainer}>
        //         <input id={Style.name} contentEditable={true} onChange={onChangeSensorName} defaultValue={initialName} />
        //         <img id={Style.edit} src="https://image.flaticon.com/icons/png/512/51/51648.png" />
        //     </div>
        //     <div>{active}</div>

        //     <div>{"Latitud: " + location[0] + " / Longitud: " + location[1]}</div>
        //     <div>{"Mínima: " + minval}</div>
        //     <div>{"Máxima: " + maxval}</div>

        // </div>

    )

}
