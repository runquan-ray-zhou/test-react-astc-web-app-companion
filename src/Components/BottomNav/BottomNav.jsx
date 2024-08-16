import { Link } from "react-router-dom";
import "./BottomNav.css"

export default function BottomNav() {

    return (
        <nav>
            <Link to="/Home">
                <button><i className="fa-solid fa-house"></i></button>
            </Link>
            <Link to="/Schedule">
                <button><i className="fa-regular fa-clock"></i></button>
            </Link>
            <Link to="/Route">
                <button><i className="fa-solid fa-route"></i></button>
            </Link>
            <Link to="/Exhibits">
                <button><i className="fa-solid fa-store"></i></button>
            </Link>
            <Link to="/Map">
                <button><i className="fa-regular fa-map"></i></button>
            </Link>
        </nav>
    )
}