import { Link } from "react-router-dom";
import "./BottomNav.css"

export default function BottomNav() {

    return (
        <nav>
            <Link to="/">
                <button><i className="fa-solid fa-house"></i><p>Home</p></button>
            </Link>
            <Link to="/Schedule">
                <button><i className="fa-regular fa-clock"></i><p>Schedule</p></button>
            </Link>
            <Link to="/Route">
                <button><i className="fa-solid fa-route"></i><p>Route</p></button>
            </Link>
            <Link to="/Exhibits">
                <button><i className="fa-solid fa-store"></i><p>Exhibits</p></button>
            </Link>
            <Link to="/Map">
                <button><i className="fa-regular fa-map"></i><p>Map</p></button>
            </Link>
        </nav>
    )
}