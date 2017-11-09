

$("#query").submit(function (event) {
  event.preventDefault();
  var input =  $("input#city").val();
  var url = new URL("http://api.openweathermap.org/data/2.5/weather");
  var params = {
    q: input,
    APPID: 'd4a0f5b3136c8361259da7bb97d6072d'
  }

  Object.keys(params).forEach(function (key) {
    url.searchParams.append(key, params[key]);
  })

  fetch(url)
  .then(function (data) {
    return data.json();
  })
  .then(function(weather_data){
    console.log(weather_data);
    $("#weather").html("<p> Base: "+weather_data.main.temp+"</p>");
  });
})


function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerHTML=valNum-273.15;
}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
