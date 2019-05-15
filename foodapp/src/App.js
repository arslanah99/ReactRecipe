import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = '76f9f481'
  const API_KEY = 'c7fc64c5baca02116eb2781c456231d6'

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`
 
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Effect has been runned');
  }, [])

  return(
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" />
          <button type="submit" className="search-button">
            Search
          </button>
      </form>
      <h1 onClick = {() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  )
}


export default App;
