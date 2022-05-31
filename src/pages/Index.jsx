import { Link } from "react-router-dom"

function Index({meal}) {
    const loaded = () =>{
        return meal.map((recipe) => (
            <div key={recipe._id} className="meal">
                 <h1>{recipe.day}</h1> 
              <Link to={`/meals/${recipe._id}`}>
                <h2>{recipe.name}</h2>
              </Link>
            </div>
          ))
        }
        const loading = () => {
            return <h1>Loading...</h1>
          }
        
          return (
            meal ? loaded() : loading()
          )
        }

  
  export default Index