import React from 'react';



const api={
  key:"b6cf9d3ea1693c4c05ed173fa6233f84",
  base:"http://api.openweathermap.org/data/2.5/"

}



function App() {



  const dateBuilder=d=>{
    let months= ["January","February","March","April","May","June","July", "August","September","October","November","December"];
    let days=['Sunday','Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];

    let day=days[d.getDay()];
    let month=months[d.getMonth()];
    let year=d.getFullYear();
    let date=d.getDate();

    return `${day} ${date}, ${month} ${year}`
  }



  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input className="search-bar" placeholder="Search ..." type="text"></input>

        </div>

        <div className="location-box">
          <div className="location">New York City, US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>

      <div className="weather-box">
        <div className="temp">15C</div>
        <div className="weather">Sunny</div>
      </div>

      </main>
    </div>
  );
}

export default App;
