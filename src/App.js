import { useState } from 'react';
import axios from 'axios';

function App() {
  //let quote="Don't let yesterday take up too much of today.";
  const [quote,setQuote]=useState("One moment of pain is worth a lifetime of glory.");

  const generateQuote =() => {
    var options = {
      method: 'GET',
      url: 'https://quotes15.p.rapidapi.com/quotes/random/',
      headers: {
        'x-rapidapi-key': '5d1aa71f1amshe94ffe4ba8827fbp1333e8jsn018a5a7387cf',
        'x-rapidapi-host': 'quotes15.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      //console.log(response.data.content);
      setQuote(response.data.content);
    }).catch(function (error) {
      console.error(error);
    });

  }
  return (
    <div className="mainBlock">
      <center>
      <h1 className="heading">Quote Generator</h1>
      <div className="Quote">
          <div className="Quote-text">
            {quote}
          </div>
        </div>
      <button type="button" className="btn" onClick={generateQuote}>Generate Quote</button>
      </center>
      
      <footer>
          Made with &#128151; by Ujjawal Sharma
      </footer>
     
    </div>
  );
}

export default App;
