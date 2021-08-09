import React,{useEffect,useState}from "react";
import './App.css';
import Recipe from '../src/Recipe';

const App = () => {

  const APP_ID = '703c21fa';
  const APP_KEY = '806b451eaf2876794c46545f4032f444';

  const[recipes, setRecipes] = useState([]);
  const[search, setSearch] = useState('');


  useEffect(() => {
    getRecipes();
  }, []);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
};

const updateSearch = e => {
  setSearch(e.target.value);
}

  return(

    <div className="App">
      <form>
        <input className="search-bar" type="text" placeholder="" value={search} onChange = {}/>
        <button className="search-button" type = "submit">
          Search
        </button>
      </form>
      
      {recipes.map(recipe => (
        <Recipe 
        key = {recipe.recipe.label}
        title = {recipe.recipe.label} 
        calories= {recipe.recipe.calories}
        image= {recipe.recipe.image}
        />
      ))}

    </div>
  );

}

export default App;
