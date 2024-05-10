let output = document.getElementById("output");

function printDisplay(input) {
  output.value += input;
}

function clearOutput() {
  output.value = "";
}

function delOutput() {
  //output.value = output.toString().slice(0, -1);
  output.value = output.value.slice(0, -1);
}

function percent() {
  output.value = eval(output.replace("%", "/100"));
}

function calculate() {
  try {
    output.value = eval(output.value.replace("%", "/100"));
  } catch (error) {
    output.value = "Error";
  }
}
