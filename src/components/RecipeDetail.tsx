import React, { useState, FunctionComponent, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import RecipeService from '../services/recipe-service';
import { Recipe } from '../models/recipe';
import formatLabel from '../helpers/format-label';
import '../styles/recipe-detail.scss';

type Params = {name : string};

const RecipeDetail: FunctionComponent<RouteComponentProps<Params>> = ({match}) => {
    const [recipe, setRecipe] = useState<Recipe>();

    useEffect(() => {
        getRecipe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [match.params.name]);

    const getRecipe = async () => {
        await RecipeService.getRecipe(match.params.name).then(recipe => setRecipe(recipe))
    } 

    const filterComposition = (nutrient: string) => {
        if (nutrient === 'Fat' || nutrient === 'Carbs' || nutrient === 'Protein') {
            return nutrient;
        }
    }

       return(
        <div>

            <div className="btn-back">
                <Link to="/">Back</Link>
            </div>

            <div className="recipe__detail">

                <section className="recipe__presentation">
                    <div className="recipe__img-wrapper">
                        <img src={recipe?.image} alt={recipe?.label}/>
                    </div>

                    <h1 className="recipe__label">{recipe?.label}</h1>
                    <p className="recipe__calories">{recipe?.calories} kcal</p>

                </section>

                <section className="recipe__ingredients">
                    <h3>Ingredients</h3>
                    <ul className="recipe__ingredients-list">
                        {recipe?.ingredientLines.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </section>

                <section>

                    <div className="recipe__composition">
                        <h3>Composition nutrients</h3>
                        <ul className="recipe__composition-list">
                            {recipe?.digest.filter(d => filterComposition(d.label)).map((dfilter, index) => (
                                <li key={index} className="recipe__composition-item">
                                    <p className={formatLabel(dfilter.label)}>{dfilter.label}</p>
                                    <p>{Math.round(dfilter.total)} {dfilter.unit}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="btn__link">
                        <a href={recipe?.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="recipe__link"
                            >
                            Recipe step by step
                        </a>
                    </div>

                </section>

            </div>

        </div>
    )
}

export default RecipeDetail;