import React, { FunctionComponent } from 'react';
import {Link} from 'react-router-dom';
import '../styles/recipe-card.scss'
import { Recipe } from '../models/recipe';
import encodeUrl from '../helpers/urlEncode';
// Declare the type of the props
type RecipeCardProps= {
    recipe: Recipe
    label: string,
    calories: number,
    image: string,
}

// Declare the type of Recipe : FunctionComponent<Type>
const RecipeCard: FunctionComponent<RecipeCardProps> = ({label, calories, image, recipe}) => {

    return (
        <div className="recipe">
            <Link to={`/recipe/${encodeUrl(recipe.uri)}`} className="recipe__img">
                <img src={image} alt={label}/>
            </Link>

            <div className="recipe__content">
                <h2 className="recipe__title">{label}</h2>

                <p className="recipe__energy">Energy : {Math.round(calories)} kcal</p>

                <div className="link__button">
                    <Link to={`/recipe/${encodeUrl(recipe.uri)}`} className='recipe__link'>RECIPE</Link>
                </div>
            </div>

        </div>
    )
}

export default RecipeCard;