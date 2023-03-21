import {Link} from "react-router-dom";

const MealItem = (props) => {
    return <div className='card'>
        <div className='card-image'>
            <img src={props.strMealThumb} alt={props.strMeal}/>
        </div>
        <div className='card-content'>
            <span className='card-title'>{props.strMeal}</span>
        </div>
        <div className='card-action'>
            <Link to={`/recipe/${props.idMeal}`} className='btn'>
                Watch recipe
            </Link>
        </div>
    </div>

}

export {MealItem};