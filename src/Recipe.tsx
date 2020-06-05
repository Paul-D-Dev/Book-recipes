import React, { FunctionComponent } from 'react';

// Declare the type of the props
type RecipeProps= {
    label: string,
    calories: number,
    image: string
}

// Declare the type of Recipe : FunctionComponent<Type>
const Recipe: FunctionComponent<RecipeProps> = ({label, calories, image}) => {
    return (
        <div>
            <h1>{label}</h1>
            <p>{calories}</p>
            <img src={image} alt={label}/>
        </div>
    )
}

export default Recipe;