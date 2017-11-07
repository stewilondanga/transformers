$('#form').on('submit', function(event) {






   var input = $("#input").val();
   $('#text-output').text("You typed: " + input);


   event.preventDefault();
 });
