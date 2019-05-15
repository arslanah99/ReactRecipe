import React, {useEffect, useState} from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () => {

  const APP_ID = '76f9f481'
  const API_KEY = 'c7fc64c5baca02116eb2781c456231d6'
  const [recipes, setRecipes] = useState([]);
 
  const [counter, setCounter] = useState(0);

  useEffect( () => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);

    console.log(data.hits)
  }

  return(
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" />
          <button type="submit" className="search-button">
            Search
          </button>
      </form>
      {recipes.map(recipe =>(
        <Recipe />
      ))}
    </div>
  )
}


export default App;
