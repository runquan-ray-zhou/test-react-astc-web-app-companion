import { events } from "../../assets/data"
import "./Events.css"
export default function Events() {
    return (
        <div className="Events">
            <div className="Events__block">
                <div className="Events__time">
                    <h3>9:00 AM</h3>
                </div>
                <div className="Events__content">
                <i className="fa-regular fa-calendar"></i>
                    <div>
                        <div className="Event-name">
                            <p>{events[0].name}:</p>
                        </div>
                        <div className="Event-time">
                            <p>{events[0].time}</p>
                        </div>
                        <div className="Event-presenter">
                            <p>Presenter:</p><p>{events[0].presenter}</p>
                        </div>
                        <div className="Event-location">
                            <p>Location:</p><p>{events[0].location}</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
                <div className="Events__content">
                <i className="fa-regular fa-calendar"></i>
                    <div>
                        <div className="Event-name">
                            <p>{events[0].name}:</p>
                        </div>
                        <div className="Event-time">
                            <p>{events[0].time}</p>
                        </div>
                        <div className="Event-presenter">
                            <p>Presenter:</p><p>{events[0].presenter}</p>
                        </div>
                        <div className="Event-location">
                            <p>Location:</p><p>{events[0].location}</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div className="Events__block">
                <div className="Events__time">
                    <h3>10:00 AM</h3>
                </div>
                <div className="Events__content">
                <i className="fa-regular fa-calendar"></i>
                    <div>
                        <div className="Event-name">
                            <p>{events[0].name}:</p>
                        </div>
                        <div className="Event-time">
                            <p>{events[0].time}</p>
                        </div>
                        <div className="Event-presenter">
                            <p>Presenter:</p><p>{events[0].presenter}</p>
                        </div>
                        <div className="Event-location">
                            <p>Location:</p><p>{events[0].location}</p>
                        </div>
                    </div>
                <i className="fa-solid fa-chevron-right"></i>
                </div>
                <div className="Events__content">
                <i className="fa-regular fa-calendar"></i>
                    <div>
                        <div className="Event-name">
                            <p>{events[0].name}:</p>
                        </div>
                        <div className="Event-time">
                            <p>{events[0].time}</p>
                        </div>
                        <div className="Event-presenter">
                            <p>Presenter:</p><p>{events[0].presenter}</p>
                        </div>
                        <div className="Event-location">
                            <p>Location:</p><p>{events[0].location}</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>
    )
}