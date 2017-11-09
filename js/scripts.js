//Attach an event fro when the user submits the form


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




































$('#form').on('submit', function(event) {


  //Set the text-output span to the value of the first input
  var input = $("#input").val();
  $('#text-output').text("You typed: " + input);


  //Prevent the page from reloading
  event.preventDefault();
});











































function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  }; //add zero in front of numbers<10
  return i;
}

$(document).ready(function() {
  $("#button").click(function() {
    //action
    alert("Once you type your text in the form and click send it is printed then a notification is sent");
  });
});

$(document).ready(function() {
  $("#changes").click(function() {
    $("#change").text("information sets us in motion");
  });
});
