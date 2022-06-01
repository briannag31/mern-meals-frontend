import { Link } from "react-router-dom"
function Footer(props) {
  const footerStyle = {
    width: "100%",
    height: "75px",
    margin: "auto",
    position: "absolute",
    bottom: "0",
  };
  const iconStyle ={
   paddingLeft: "15px"
  }
    return (
        <nav style={footerStyle} className="footer">
              <Link to="/index">
              <i class="fa-solid fa-fork-knife fa-3x"></i>
            </Link> 
            <Link to="/meals/new">
            <i style={iconStyle} className="fa-solid fa-plus fa-3x"></i>
            </Link> 
            <Link to="/meals/recipes">
            <i style={iconStyle} className="fa-solid fa-lightbulb fa-3x"></i>
            </Link> 
        </nav>
    )
  }
  
  export default Footer



    