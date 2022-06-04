import { Link } from "react-router-dom"
function Footer(props) {
    return (
        <nav className="footer">
              <Link to="/meals">
              <img className="footerImg person" src="https://i.imgur.com/vSjcddv.png?2" alt="Click to all meals" />
            </Link> 
            <Link to="/meals/new">
            <img className="footerImg" src="https://i.imgur.com/TUF0MZN.png?1" alt="Click to add new meal" />
            </Link> 

            <Link to="/meals/recipes">
            <img className="footerImg" src="https://i.imgur.com/quScvLP.png?1" alt="Click to get recipe ideas" />
            </Link> 
        </nav>
    )
  }
  
  export default Footer



    