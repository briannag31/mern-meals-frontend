import { Link } from "react-router-dom"
function Header(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <img className="nav-img" src="https://i.imgur.com/QTaaQyZ.png?1" alt="Meal Planner Logo" />
            </Link> 
        </nav>
    )
  }
  
  export default Header