import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Index from "../pages/Index"
import Show from "../pages/Show"
import New from "../pages/New"
import Recipes from "../pages/Recipes"

export default function Main() {

    const [meal, setMeal] = useState(null);

    const URL = 'https://mern-meals.herokuapp.com/meals/';

    const getMeal = async () => {
        const data = await fetch(URL).then(res => res.json());
        setMeal(data);
    }

    const createMeal = async recipe => {
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(recipe),
        });
        getMeal();
    };
    const recipeList = async recipe => {
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(recipe),
        });
        getMeal();
    };

    const updateMeal = async (recipe, id) => {
        await fetch(URL + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        });
        getMeal();
    };

    const deleteMeal = async id => {
        await fetch(URL + id, {method: 'DELETE'});
        getMeal();
    }


    useEffect(() => {
        getMeal();
    }, []);

    return (
        <main>
            <Routes>
                <Route path="/" element={<Index meal={meal}/>} />
                <Route path="/meals/:id" element={
                    <Show 
                        meal={meal} 
                        deleteMeal={deleteMeal} 
                        updateMeal={updateMeal}
                       />
                    } />
                     <Route path="/meals/new" element={
                    <New 
                        createMeal={createMeal}
                       />
                    } />
                     <Route path="/meals/recipes" element={
                    <Recipes />
                    } />
            </Routes>
        </main>
    )
}