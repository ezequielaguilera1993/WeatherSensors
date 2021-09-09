import { Link } from "react-router-dom"
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, useEffect } from "react";
import { getAllSensors } from "../../Redux/Actions/Actions";
import Style from './NavBar.module.scss'

export const NavBar: React.FunctionComponent<{}> = ({ }) => {

    return (<div>
        <div id={Style.NavBar}>
            <div id={Style.title}>Whatever Weather</div>
        </div>
    </div>)

}
