import { useState } from "react";
import { useNavigate } from "react-router";
export default function New({createMeal}) {
    const navigate = useNavigate();
    const [newForm, setNewForm] = useState({
        day: "",
        name: "",
        description: "",
        ingredients: [],
        time: "",
    })

    const handleChange = (event) =>{
        setNewForm((prevState) =>({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
        const handleSubmit = (event) => {
            event.preventDefault()
            createMeal(newForm)
            setNewForm({
                day: "",
                name: "",
                description: "",
                ingredients: [],
                time: "",
            });
            navigate('/');
        }

    return (
        <div className="new-meal">
            <form onSubmit={handleSubmit}>
                <select name="day" onChange={handleChange} value={newForm.day}>
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
                    name="name"
                    placeholder="name"
                    value={newForm.name}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="description"
                    placeholder="description"
                    value={newForm.description}
                    onChange={handleChange}
                />
                <input 
                    type="number" 
                    name="time"
                    placeholder="time"
                    value={newForm.time}
                    onChange={handleChange}
                />
                  <input 
                    type="text" 
                    name="ingredients"
                    placeholder="ingredients"
                    value={newForm.ingredients}
                    onChange={handleChange}
                />
                <button type="submit">Add New Meal</button>
            </form>
        </div>
    )
}