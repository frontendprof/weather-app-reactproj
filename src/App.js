import React from 'react';

function App() {


  const api={
    key:"b6cf9d3ea1693c4c05ed173fa6233f84",
    base:"http://api.openweathermap.org/data/2.5/"

  }



  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input className="search-bar" placeholder="Search ..." type="text"></input>

        </div>
        
      </main>
    </div>
  );
}

export default App;
