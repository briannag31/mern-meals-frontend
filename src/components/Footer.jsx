import { Link } from "react-router-dom"
function Footer(props) {
    return (
        <nav className="footer">
              <Link to="/index">
            <i className="fa-solid fa-fork-knife"></i>
            </Link> 
            <Link to="/meals/new">
            <i className="fa-solid fa-plus"></i>
            </Link> 
            <Link to="/meals/recipes">
            <i className="fa-solid fa-lightbulb"></i>
            </Link> 
        </nav>
    )
  }
  
  export default Footer



    