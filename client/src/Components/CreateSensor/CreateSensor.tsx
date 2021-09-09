import { Link } from "react-router-dom"
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, useEffect } from "react";
import { getAllSensors, putSensor } from "../../Redux/Actions/Actions";
import Style from './CreateSensor.module.scss'
import { useForm, Resolver } from "react-hook-form";
import swal from 'sweetalert';

type FormValues = {
    name: string;
    lat: string;
    long: string;
};


const resolver: Resolver<FormValues> = async (values) => {

    let errObj: any = {}
    let someMissed: boolean = false

    type IarrErr = ["name", "lat", "long"]
    let arrErr: IarrErr = ["name", "lat", "long"]

    for (let i of arrErr) {
        if (!values[i]) {
            someMissed = true
            errObj[i] = {
                type: "required", message: "Campo requerido"
            }
        }
    }
    return {
        values: someMissed ? {} : values,
        errors: errObj
    };
};


export const CreateSensor: React.FunctionComponent<{}> = ({ }) => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>({
        resolver: resolver
    });
    const onSubmit = handleSubmit((data) => {
        axios.put("http://localhost:3001/sensor/putSensor", {
            data
        }).then((res) => {
            dispatch(putSensor(res.data))
            swal("Sensor creado con éxito :D");

        }).catch(err => console.log(err))

    });

    return (
        <div className={Style.createSensor}>
            <h1>Crear Sensor</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Nombre</label>
                    <input {...register("name")} placeholder='"Londres"' />
                    {errors?.name ? <p className={Style.errorLabel}>{errors.name.message}</p> : <p className={Style.errorLabel}> </p>}
                </div>

                <div>
                    <label>Latitud</label>
                    <input {...register("lat")} placeholder="-180 a 180" />
                    {errors?.lat ? <p className={Style.errorLabel}>{errors.lat.message}</p> : <p className={Style.errorLabel}> </p>}
                </div>

                <div>
                    <label>Longitud</label>
                    <input {...register("long")} placeholder="-90 a 90" />
                    {errors?.long ? <p className={Style.errorLabel}>{errors.long.message}</p> : <p className={Style.errorLabel}> </p>}
                </div>



                <input type="submit" value="Crear" />
            </form>
        </div>
    );
}
