import { Link } from "react-router-dom"


export const Sensors: React.FunctionComponent<{}> = ({ }) => {
    return (<div>
        Sensors

        <Link to="/sensorEvent">
            <button>Go</button>
        </Link>
    </div>)

}
