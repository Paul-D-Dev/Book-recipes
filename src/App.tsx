import React, { useEffect, useState } from 'react';
import './App.scss';
import { Hit } from './models/recipe';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = 'bfae6ace';
  const APP_KEY = '890847a09f410c0adb3992a92b1222f7';

  // Need to specify the type of UseState
  const [recipes, setRecipes] = useState<Hit[]>([])

  useEffect(() => {
    getRecipes()
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();    
    setRecipes(data.hits);    
  }

  return(
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button className="search-button">Search</button>
      </form>

      {recipes.map((recipe) => (  
        <Recipe 
          key={recipes.indexOf(recipe)}
          label={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  )
}

export default App;
