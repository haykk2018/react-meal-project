import {useEffect, useState} from "react";
import {getCategoryMeals} from "../api";
import {MealItem} from "./MealItem";
import {useParams} from "react-router-dom";

const CategoryMealList = (props) => {

    const [categoryMeals, setCategoryMeals] = useState([]);
    const {name} = useParams();

    useEffect(() => {
        getCategoryMeals(name).then(
            data => setCategoryMeals(data.meals)
        )
    }, []);

    return <main className='container content'>
        <div className='list'>

            {categoryMeals.map((meal) => (
                <MealItem key={meal.idMeal} {...meal} />
            ))}
        </div>
    </main>
}

export {CategoryMealList};