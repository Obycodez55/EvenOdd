function testResults() {
  var inputValue = Number(document.querySelector("input").value);
  var test = inputValue % 2;

  if (test === 0) {
    document.querySelector(".result").innerHTML =
      "Hello! " +
      inputValue +
      ' is an <span class="even">Even</span> number. <br> It is divisible by 2 without any remainder.';
   
  } else {
    document.querySelector(".result").innerHTML =
      "Hello! " +
      inputValue +
      ' is an <span class="odd">Odd</span> number. <br> It is not divisible by 2 without any remainder.';

  }
}
