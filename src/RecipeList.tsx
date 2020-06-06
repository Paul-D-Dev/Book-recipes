import React, { FunctionComponent } from 'react';
import './styles/recipe-list.scss'
// Declare the type of the props
type RecipeListProps= {
    label: string,
    calories: number,
    image: string,
}

// Declare the type of Recipe : FunctionComponent<Type>
const RecipeList: FunctionComponent<RecipeListProps> = ({label, calories, image}) => {
    return (
        <div className="recipe">
            <div className="recipe__img">
                <img src={image} alt={label}/>
            </div>

            <div className="recipe__content">
                <h2 className="recipe__title">{label}</h2>

                <p className="recipe__energy">Energy : {Math.round(calories)} kcal</p>

                <div className="link__button">
                    <a href="#" className='recipe__link'>RECIPE</a>
                </div>
            </div>

        </div>
    )
}

export default RecipeList;