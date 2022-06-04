import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Index({meal}) {
    const loaded = () =>{
        return meal.map((recipe) => (
            <div key={recipe._id} className="meal">
                 <h1>{recipe.day} |  </h1> 
              <Link to={`/meals/${recipe._id}`}>
                <h1> {recipe.name}</h1>
              </Link>
            </div>
          )
          )
        }
        const loading = () => {
            return (
              <>
            <Header />
            <h1>Loading...</h1>
            </>
            )
          }

          return (
            <>
            <Header />
           { meal ? loaded() : loading()}
           <Footer />
            </>
          )
        }

  
  export default Index