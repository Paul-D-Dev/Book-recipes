import React, { FunctionComponent } from 'react';
import { Ingredient } from './models/recipe';

// Declare the type of the props
type RecipeProps= {
    label: string,
    calories: number,
    image: string,
    ingredients: Ingredient[],
}

// Declare the type of Recipe : FunctionComponent<Type>
const Recipe: FunctionComponent<RecipeProps> = ({label, calories, image, ingredients}) => {
    return (
        <div>
            <h1>{label}</h1>
            <ol>
                {ingredients.map((ingredient) => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt={label}/>
        </div>
    )
}

export default Recipe;