import React from 'react';
import './App.scss';
import RecipeList from './pages/RecipeList';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import RecipeDetail from './components/RecipeDetail';

const App = () => {

  return(
    <Router>

    <div className="App">
      <Switch>
        <Route exact path='/' component={RecipeList}></Route>
        <Route path="/recipe/:name" component={RecipeDetail}></Route>
      </Switch>
    </div>

    </Router>
  )
}

export default App;
