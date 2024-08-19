import "./Event.css"

export default function Event({ event }) {
    return (
        <div className="Event">
            <div className="Event-time">
                <p>{event.time}</p>
            </div>
            <div className="Event-info">
                <div className="Event-name">
                    <p>{event.name}:</p>
                </div>
                <div className="Event-description">
                    <p>{event.description}</p>
                </div>
                <div className="Event-presenter">
                    <p>Presenter:</p><p>{event.presenter}</p>
                </div>
                <div className="Event-location">
                    <p>Location:</p><p>{event.location}</p>
                </div>
                <div className="Event-button">
                    <button>Leadership and Direction</button>
                </div>
            </div>
        </div>
    )
}