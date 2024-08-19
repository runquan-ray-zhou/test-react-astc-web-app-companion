import Events from "../Components/Events/Events"
import "./Index.css"

export default function Index() {
    return (
        <div className="Index">
            <div className="searchbar-container">
                <form>
                    <input type="text" name="search" id="search" placeholder="Search" autoComplete='off'/>
                    <button>
                    {' '}
                    <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </div>
            <div className="Index-date">
                <h2>Saturday Sep 29th</h2>
            </div>
            <Events />
        </div>
    )
}