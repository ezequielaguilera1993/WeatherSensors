import { Link } from "react-router-dom"
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, useEffect } from "react";
import { getAllSensors, putSensor, putSensorEvent } from "../../Redux/Actions/Actions";
import Style from './AddEvent.module.scss'
import { useForm, Resolver } from "react-hook-form";
import swal from 'sweetalert';



type FormValues = {
    value: number
};



const resolver: Resolver<FormValues> = async (values) => {

    let errObj: any = {}
    let someMissed: boolean = false

    type IarrErr = ["value"]
    let arrErr: IarrErr = ["value"]

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

export const AddEvent: React.FunctionComponent<{ match: any }> = ({ match }) => {
    const dispatch = useDispatch();

    const id: number = match.params.id

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>({
        resolver: resolver
    });

    const onSubmit = handleSubmit((data) => {
        axios.put("http://localhost:3001/sensor/putSensorEvent", {
            data: { value: data.value, id }
        }).then((res) => {
            dispatch(putSensorEvent(res.data))
            swal("Evento asociado con exito 👌");

        }).catch(err => console.log(err))

    });

    return (
        <div className={Style.createSensor}>
            <h1>Crear Evento</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Valor</label>
                    <input {...register("value")} placeholder='valor ej: 22' />
                    {errors?.value ? <p className={Style.errorLabel}>{errors.value.message}</p> : <p className={Style.errorLabel}> </p>}
                </div>
                <input type="submit" value="Crear" />
            </form>
        </div>
    );
}
