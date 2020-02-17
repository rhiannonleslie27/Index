var rhiannonObject = {
    firstName: "Rhiannon",
    lastName: "Brafford",
    age: 19,
    likesToTravel: true,
    favoriteMovies: ["Marriage Story", "Ant-Man"]
  }
  
  console.log(rhiannonObject.firstName); // "Rhiannon" 
  console.log(rhiannonObject.likesToTravel);
  console.log(rhiannonObject.favoriteMovies[1]);

  var temperature=65;
  var conditions="cloudy"
  var sunriseTime="7:43 a.m."
  var sunsetTime="5:56 p.m."

  console.log(temperature)
  console.log(conditions)
  console.log(sunriseTime)
  console.log(sunsetTime)

  var highTemperatures = [55, 57, 53, 47, 56, 50];
  var lowTemperatures = [33, 30, 29, 35, 31, 32];
  var firstItem=highTemperatures[0] // 55
  var secondItem=lowTemperatures[1] // 32
  var thirdItem=highTemperatures[3] // 53
  var fourthItem=lowTemperatures[4] // 31.6

  console.log(highTemperatures[0]);
  console.log(lowTemperatures[1]);

  var temperatures=49
  var condition="sunny"

  console.log(temperatures)
  console.log(condition)

  var todaysWeather={
    temperature1: {
      high: 65,
      low: 32
    },
    conditions1:"sunny",
    astronomy: {
      sunrise: "7:43 a.m.",
      sunset: "5:09 p.m."
    }
   }

   console.log(temperatures),
   console.log(conditions),
   console.log(todaysWeather.astronomy.sunrise)

   var weatherForecast = [
    {
     day: "Today",
     temperature: {
       high: 55,
       low: 32
     },
     conditions: "sunny",
     astronomy: {
       sunrise: "7:43 AM",
       sunset: "5:09 PM"
     }
    },
    {
     day: "Saturday",
     temperature: {
       high: 50,
       low: 29
      },
     conditions: "cloudy",
     astronomy: {
       sunrise: "7:44 AM",
       sunset: "5:08 PM"
     }
    },
    {
     day: "Sunday",
     temperature: {
       high: 47,
       low: 35
      },
     conditions: "chance of rain",
     astronomy: {
       sunrise: "7:45 AM",
       sunset: "5:07 PM"
     }
    }
   ]
   
   console.log(weatherForecast[0].conditions);
   console.log(weatherForecast.day['Today'].conditions),
   console.log(weatherForecast.Saturday.temperature.high),
   console.log(weatherForecast.Saturday.astronomy.sunrise),
   console.log(weatherForecast.Sunday.conditions),
   console.log(weatherForecast.Sunday.astronomy.sunset)
