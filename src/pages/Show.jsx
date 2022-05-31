import { useParams, useNavigate } from "react-router";
import { useState } from "react";

export default function Show({meal, updateMeal, deleteMeal}) {

    const { id } = useParams();
    const recipe = meal.find(recipe => recipe._id === id);
    const navigate = useNavigate();

    const [editForm, setEditForm] = useState(recipe);

    const handleChange = evt => {
        setEditForm({
            ...editForm,
            [evt.target.name]: evt.target.value
        });
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        updateMeal(editForm, id);
        navigate('/');
    };

    const removeMeal = () => {
        deleteMeal(id);
        navigate('/');
    }


    return (
        <div className="meal">
            <h1>{recipe.day}</h1>
            <h4>Name: <br /> {recipe.name}</h4>
            <h4>Description: {recipe.description}</h4>
            <h4>Cook Time: {recipe.time}</h4>
            <h4>Ingredients: <br />  {recipe.ingredients[0]}</h4>
            <h4>{recipe.ingredients[1]}</h4>
            <h4>{recipe.ingredients[2]}</h4>
            <h4>{recipe.ingredients[3]}</h4>
            <h4>{recipe.ingredients[4]}</h4>
            <h4>{recipe.ingredients[5]}</h4>
            <h2>Edit your Meal</h2>
            <form onSubmit={handleSubmit}>
             <select name="day" onChange={handleChange} value={editForm.day}>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
                </select>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                 <input 
                    type="text" 
                    name="description"
                    placeholder="description"
                    value={editForm.description}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="ingredients"
                    placeholder="ingrdients"
                    value={editForm.ingredients}
                    onChange={handleChange}
                />
                <input 
                    type="number" 
                    name="time"
                    placeholder="cook time"
                    value={editForm.time}
                    onChange={handleChange}
                />
              <button id="edit" type="submit">
                Edit Meal
            </button>
            <button id="delete" onClick={removeMeal}>
                Delete Meal
            </button>
            </form>
        </div>
    )
}
