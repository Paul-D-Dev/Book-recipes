import React, { useState, FunctionComponent, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import RecipeService from '../services/recipe-service';
import { Recipe } from '../models/recipe';


type Params = {name : string};

const RecipeDetail: FunctionComponent<RouteComponentProps<Params>> = ({match}) => {
    const [recipe, setRecipe] = useState<Recipe | null>(null);

    useEffect(() => {
        getRecipe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [match.params.name]);

    const getRecipe = () => {
        RecipeService.getRecipe(match.params.name).then(recipe => setRecipe(recipe))
    } 

       return(
        <div>
            <p>Salut</p>
            <p>{recipe?.calories}</p>
        </div>
    )
}

export default RecipeDetail;