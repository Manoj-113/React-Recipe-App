import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = '703c21fa';
  const APP_KEY = '806b451eaf2876794c46545f4032f444';

  const exampleRequest =  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

 

  return(

    <div className="App">
      <form>
        <input className="search-bar" type="text" placeholder=""/>
        <button className="search-button" type = "submit">
          Search
        </button>
      </form>
    </div>
  );

}

export default App;
