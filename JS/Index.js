
/// <reference types="../@types/jquery" />


  const url = 'https://restcountries.com/v3.1/all';
  let countries = [];
  var datalist =``;
  let btn = document.getElementById("btn");
  let list = document.getElementById("dropdown-menu-Id");
  let countryDataWeather = document.getElementById("countryWeather");
  fetch(url)
 .then(response => response.json())
 .then(data => {
     
     countries = data ;
     for(let i =0;i<countries.length;i++)
     {
         
         //console.log((countries[i].altSpellings[0]));
         if(countries[i].capital?.length > 0)
         {
            datalist +=`<option value=${countries[i].capital[0]}>${(countries[i].capital[0])}</option>`;
         }
     }
     list.innerHTML = datalist;

     
 })
 .catch(error => console.error(error))


 btn.addEventListener("click",function()
 {
     let country = list.value;
     console.log(country);



          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=86bd8a884ced5b1329848274c1e35c1d&units=metric`)
          .then(response => response.json())
          .then(data => {
              console.log(data);
              let countryData = ``;
              countryData +=` 
              <h2>weather in ${data.sys.country} </h2>
              <p>Description:${data.weather[0].description}</p>
              <p>temperature:${data.main.temp}</p>
              <p>humidity:${data.main.humidity} %</p>
              <p>pressure:${data.main.pressure} hPa</p>
              <p>wind speed:${data.wind.speed} m/s</p>
              `
              countryDataWeather.innerHTML = countryData;

          });

 });

