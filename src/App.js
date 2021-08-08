import React,{useEffect,useState}from "react";
import './App.css';

const App = () => {

  const APP_ID = '703c21fa';
  const APP_KEY = '806b451eaf2876794c46545f4032f444';

  const[recipes, setRecipes] = useState([]);


  useEffect(() => {
    getRecipes();
  }, []);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);

  
}

  return(

    <div className="App">
      <form>
        <input className="search-bar" type="text" placeholder=""/>
        <button className="search-button" type = "submit">
          Search
          
        </button>
      </form>
      <h1 onClick={() => setCounter(counter+1)}>{counter}</h1>
    </div>
  );

}

export default App;
