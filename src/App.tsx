import React, { useEffect } from 'react';
import './App.scss';

const App = () => {

  const APP_ID = 'bfae6ace';
  const APP_KEY = '890847a09f410c0adb3992a92b1222f7';

  useEffect(() => {
    getRecipes()
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json()
    console.log(data.hits);    
  }

  return(
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button className="search-button">Search</button>
      </form>
    </div>
  )
}

export default App;
