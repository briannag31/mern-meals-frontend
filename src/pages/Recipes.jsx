import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header"

const Recipes = ({recipeList}) => {
  const apiKey = "e61e9a21648e4ecea611937d92a2c146"
  const params = useParams()
  const ingredient = params.ingredient
  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=30&ranking=2&ignorePantry=true&apiKey=${apiKey}`

  //https://api.spoonacular.com/recipes/findByIngredients?ingredients=chocolate&number=30&ranking=2&ignorePantry=true&apiKey=e61e9a21648e4ecea611937d92a2c146

  const [recipes, setRecipes] = useState(null)

  const getRecipe = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setRecipes(data)
    
  }
  const [recipeFormState, setRecipeFormState] = useState({ingredient: ""});

  const handleChange = (event) => {
      const newState = {...recipeFormState}
      newState[event.target.name] = event.target.value
      setRecipeFormState(newState)



  };

  const handleSubmit = (event) => {
      event.preventDefault()
      recipeList(recipeFormState.ingredient)
      setRecipeFormState(
          {ingredient: ""}
      )
  }

 useEffect(() => {
     getRecipe()
    }, []);

  const loaded = () => {
    return (
      <div>
        <h1>{ingredient}</h1>
        <h2>{recipeList.title}</h2>
      </div>
 
    )
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return(
    <>
    <Header />
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="ingredient" 
            onChange={handleChange}
            value={recipeFormState.ingredient}/>
            <input type="submit" value="Sumbit" />
        </form>
    </div>
    {recipes ? loaded() : loading()}
    </>
    )
}

export default Recipes