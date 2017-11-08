$('#form').on('submit', function(event) {






   var input = $("#input").val();
   $('#text-output').text(" " + input);


   event.preventDefault();
 });


 function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML=valNum-273.15;
  }
