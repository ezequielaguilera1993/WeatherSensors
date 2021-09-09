import { Link } from "react-router-dom"


export const SensorEvents: React.FunctionComponent<{}> = ({ }) => {
    return (<div>
        SensorEvents
        <Link to="/sensors">
            <button>Go</button>
        </Link>
    </div>)

}
