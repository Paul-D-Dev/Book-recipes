import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import Loader from '../components/Loader';
import { Hit } from '../models/recipe';
import RecipeService from '../services/recipe-service';
import '../styles/recipe-list.scss';

const RecipeList = () => {
    const [recipes, setRecipes] = useState<Hit[]>([]);
    const [search, setSearch] = useState<string>('');
    const [query, setQuery] = useState('chicken');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getRecipes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
      }
    
    const getSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setQuery(search);
    }

    const getRecipes = async () => {
        RecipeService.getRecipes(query).then(recipes => {
            setRecipes(recipes.hits)
            setIsLoading(false);
        })
    }

    return (
        <div>

            <form onSubmit={getSearch} className="search-form" >
                <input 
                type="text" 
                className="search-bar" 
                placeholder="Tap your ingredient"
                value={search} 
                onChange={updateSearch}/>
                <button className="search-button">Search</button>
            </form>

            {isLoading ? 
                ''
            :
                <p className="recipe__request">Recipe : {query}</p>
            }

            {isLoading ?
                <Loader />
            :
                <div className="recipe__wrapper">
                    {recipes.map((recipe) => (  
                        <RecipeCard 
                        key={recipes.indexOf(recipe)}
                        recipe={recipe.recipe}
                        label={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        />
                    ))}
                </div>
            }

        </div>
    )
}

export default RecipeList;