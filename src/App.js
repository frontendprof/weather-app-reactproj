import React, {useState} from 'react';



const api={
  key:"b6cf9d3ea1693c4c05ed173fa6233f84",
  base:"http://api.openweathermap.org/data/2.5/"

}



function App() {

  const [query,setQuery]=useState('');
  const [weather,setWeather]=useState({});

  const search=env=>{
    if(env.key==="Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric$&APPID=${api.key}`)
      .then(res=>res.json())
      .then(result=>{
        setQuery("");
        setWeather(result);
        console.log(result);
        
      });
    }
  }



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
    <div className={(typeof weather.main != "undefined")?((weather.main.temp>20)
    ? "App-warm" : "App"):"App"}>
      <main>

        <div className="search-box">
          <input className="search-bar" placeholder="Search ..." type="text"
          onChange={e=>setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          ></input>
        </div>
        
      {(typeof weather.main != "undefined")?
      (
        <div>

          <div className="location-box">
            <div className="location">{weather.name},{weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>

          <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp-273)}︒C</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>

        </div>
      ):("")
      }

      </main>
    </div>
  );
}

export default App;
