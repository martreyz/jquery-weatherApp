"use strict";
const APIKey = "7c05765e48a736503ac58fa052f36c1a";

$(".input").change(function (e) {
  let inputValue = e.target.value;

  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${APIKey}`,
    success: function (response) {
      const temperature = Math.round(response.main.temp - 273.15) + "ºC";
      const wind = response.wind.speed * 161 + "km/h";
      const weather = "Sky status: " + response.weather[0].main;
      $(".results").animate({ opacity: "1" });
      $(".temperature").text(temperature);
      $(".wind").text(wind);
      $(".weather").text(weather);
    },
  });
});

$(".input").keypress(function (event) {
  if (event.keyCode === 10 || event.keyCode === 13) {
    event.preventDefault();
    $(".input").trigger("change");
  }
});
