import Event from "../Components/Event/Event"
import { events } from "../assets/data"
import "./Home.css"

export default function Home() {
    return (
        <div className="Home">
            <div className="Home-date">
                <h3>September 29th</h3>
            </div>
            <div className="Home-toggle">
                <button className="Home-speaker-button">Speakers</button>
                <button className="Home-Exhibits-button">Exhibits</button>
            </div>
            <div className="Home-Select">
                <label htmlFor="">
                    <select name="" id="">
                        <option value="">Select Category</option>
                    </select>
                </label>
            </div>
            <div className="Home-Events">
            {events.map((event) => 
                <Event event={event} key={event.id} />
                )}
            </div>
        </div>
    )
}