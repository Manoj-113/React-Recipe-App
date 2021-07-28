import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = '703c21fa';
  const APP_KEY = '703c21fa';

  const example_rqst =  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

 

  return(

    <div className="App">
      <h1>Hello React</h1>
    </div>
  );

}

export default App;
