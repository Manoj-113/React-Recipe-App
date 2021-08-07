import React,{useEffect,useState}from "react";
import './App.css';

const App = () => {

  const APP_ID = '703c21fa';
  const APP_KEY = '806b451eaf2876794c46545f4032f444';

  const exampleRequest =  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;


  const[counter, setCounter] = useState(0);


 useEffect(() => {
   console.log('Effect has been run');
 });

  return(

    <div className="App">
      <form>
        <input className="search-bar" type="text" placeholder=""/>
        <button onClick={() => setCounter(counter+1)} className="search-button" type = "submit">
          Search
          {counter}
        </button>
      </form>
    </div>
  );

}

export default App;
