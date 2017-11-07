//Attach an event fro when the user submits the form

  $('#form').on('submit', function(event) {





    //Set the text-output span to the value of the first input
    var input = $("#input").val();
    $('#text-output').text("You typed: " + input);

    //Prevent the page from reloading
    event.preventDefault();
  });
