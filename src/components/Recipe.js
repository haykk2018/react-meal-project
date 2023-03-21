import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getRecipeById} from "../api";

const Recipe = (props) => {

    const [recipe, setRecipe] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getRecipeById(id).then(
            data => setRecipe(data.meals[0])
        )
    }, []);

    return <main className='container content'>
        <div className='recipe'>
            <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
            <h1>{recipe.strMeal}</h1>
            <h6>Category: {recipe.strCategory}</h6>
            {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
            <p>{recipe.strInstructions}</p>

            <table className='centered'>
                <thead>
                <tr>
                    <th>Ingredient</th>
                    <th>Measure</th>
                </tr>
                </thead>
                <tbody>
                {Object.keys(recipe).map((key) => {
                    if (key.includes('Ingredient') && recipe[key]) {
                        return (
                            <tr key={key}>
                                <td>{recipe[key]}</td>
                                <td>
                                    {
                                        recipe[
                                            `strMeasure${key.slice(
                                                13
                                            )}`
                                            ]
                                    }
                                </td>
                            </tr>
                        );
                    }
                    return null;
                })}
                </tbody>
            </table>

            {recipe.strYoutube ? (
                <div className='row'>
                    <h5 style={{margin: '2rem 0 1.5rem'}}>
                        Video Recipe
                    </h5>
                    <iframe
                        title={id}
                        src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                            -11
                        )}`}
                        allowFullScreen
                    />
                </div>
            ) : null}
        </div>
    </main>


}

export {Recipe}