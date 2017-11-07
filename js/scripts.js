//Attach an event fro when the user submits the form

  $('#form').on('submit', function(event) {


    //Set the text-output span to the value of the first input
    var input = $("#input").val();
    $('#text-output').text("You typed: " + input);

    //Prevent the page from reloading
    event.preventDefault();
  });

function startTime(){
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
  if(i<10){i ="0" + i}; //add zero in front of numbers<10
  return i;
}
