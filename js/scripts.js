$(document).ready(function(){
  var number = parseInt(prompt("Enter your number: "));
  total = 1;
    for (var index = 1; index <= number; index +=1) {
      total *= index;
      alert(total);
    }
})
