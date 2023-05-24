$(".btn").click(testResults);

function testResults() {
  var inputValue = Number(document.querySelector("input").value);
  var test = inputValue % 2;

  if (isNaN(inputValue)) {
    $(".result").html("Error: Please enter a valid number.");
    $(".result").addClass("red");
  } else {
    $(".result").removeClass("red");

    if (test === 0) {
      $(".result").html(
        "Hello! " +
          inputValue +
          ' is an <span class="even">Even</span> number. <br> It is divisible by 2 without any remainder.'
      );
    } else {
      $(".result").html(
        "Hello! " +
          inputValue +
          ' is an <span class="odd">Odd</span> number. <br> It is not divisible by 2 without any remainder.'
      );
    }
  }
}
