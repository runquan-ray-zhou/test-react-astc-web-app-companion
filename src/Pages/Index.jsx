import "./Index.css"

export default function Index() {
    return (
        <div className="Index">
            <div className="Index-date">
                <h3>September 29th</h3>
            </div>
            <div className="Index-toggle">
                <button className="Index-speaker-button">Speakers</button>
                <button className="Index-Exhibits-button">Exhibits</button>
            </div>
            <div className="Index-Select">
                <label htmlFor="">
                    <select name="" id="">
                        <option value="">Select Category</option>
                    </select>
                </label>
            </div>
        </div>
    )
}