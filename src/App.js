import React, {useState, useEffect} from "react";
import './index.css';

const API_URL = 'https://api.chucknorris.io/jokes/random';

function App() {
  const [joke, setJoke] = useState('');



  const generateJoke = () => {
    fetch(API_URL)
.then(res => res.json())
.then(data => setJoke(data.value))
;
  }

  useEffect(() => {
generateJoke();

  }, [])

  


  return (
    <div class="Box">
<h1>Chuck Norris Jokes Generator</h1>
<img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" width={300}></img>
<p>{joke}</p>
<button onClick={generateJoke}>Get new joke :) </button>
    </div>
  );
}

export default App;
