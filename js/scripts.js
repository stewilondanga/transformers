$('#form').on('submit', function(event) {






   var input = $("#input").val();
   $('#text-output').text(" " + input);


   event.preventDefault();
 });


 function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML=valNum-273.15;
  }

  function myFunction() {
       // Get the snackbar DIV
       var x = document.getElementById("snackbar")

       // Add the "show" class to DIV
       x.className = "show";

       // After 3 seconds, remove the show class from DIV
       setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
   }
