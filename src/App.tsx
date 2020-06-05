import React, { useEffect, useState } from 'react';
import './App.scss';
import { Hit } from './models/recipe';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = 'bfae6ace';
  const APP_KEY = '890847a09f410c0adb3992a92b1222f7';

  // Need to specify the type of UseState
  const [recipes, setRecipes] = useState<Hit[]>([]);
  const [search, setSearch] = useState<string>('');
  const [query, setQuery] = useState('chicken');

  // 
  useEffect(() => {
    getRecipes()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();    
    setRecipes(data.hits);
  }

  const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const getSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(search);
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form" >
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button className="search-button">Search</button>
      </form>

      <p>Recipes : {query}</p>

      {recipes.map((recipe) => (  
        <Recipe 
          key={recipes.indexOf(recipe)}
          label={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  )
}

export default App;
