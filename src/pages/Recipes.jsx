import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Recipes = (props) => {
  const apiKey = "e61e9a21648e4ecea611937d92a2c146"
  const params = useParams()
  const ingredient = params.ingredient
  const url = `https://api.spoonacular.com/recipes/search?query=${ingredient}&apiKey=${apiKey}&number=20`



  const [recipes, setRecipes] = useState(null)

  const getRecipe = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setRecipes(data)
    
  }



// need to add search box related to the ingredient variable -- look at movie project

 useEffect(() => {
     getRecipe()
    }, []);

  const loaded = () => {
    return (
      <div>
        <h1>{ingredient}</h1>
        <h2>{recipes.results.title}</h2>
        <img src={recipes.results.image} alt={recipes.results.title} />
      </div>
    )
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return recipes ? loaded() : loading()
}

export default Recipes