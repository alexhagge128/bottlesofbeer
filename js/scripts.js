$(document).ready(function() {
  $("form#beerForm").submit(function(event) {
    var userNumber = $("input#beer").val();

  var bottles;
  for (counter = userNumber; counter >= 1; counter = counter - 1)
  {
      if (counter == 1) {
          bottles = 'bottle';
      } else {
          bottles = 'bottles';
      }
      alert(counter+" "+bottles+" of beer on the wall.");
      if (counter < userNumber) {
          alert("");
          alert(counter+" "+bottles+" of beer on the wall.");
      }
      alert(counter+" "+bottles+" of beer.");
      alert("Take one down.");
      alert("Pass it around.");
      if (counter == 1) {
          alert("No bottles of beer on the wall.");
      }
  }

    event.preventDefault();
  });
});
