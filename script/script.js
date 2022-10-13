let btnC = document.querySelector("#btnC");
let btnF = document.querySelector("#btnF");
let btnK = document.querySelector("#btnK");
let btnR = document.querySelector("#btnR");
let tempF = document.querySelector("#tempF").value;
let tempK = document.querySelector("#tempK").value;
let tempR = document.querySelector("#tempR").value;

btnC.onclick = function converteGrausC() {
  let tempC = document.querySelector("#tempC").value;
  document.querySelector("#tempF").value = parseFloat(tempC) * 1.8 + 32;
  document.querySelector("#tempK").value = parseFloat(tempC) + 273.15;
  document.querySelector("#tempR").value = parseFloat(tempC) * (9 / 5) + 491.67;
};

btnF.onclick = function converteGrausF() {
  let tempF = document.querySelector("#tempF").value;
  document.querySelector("#tempC").value = parseFloat(tempF - 32) / 1.8;
  document.querySelector("#tempK").value =
    parseFloat((tempF - 32) * 5) / 9 + 273;
  document.querySelector("#tempR").value = parseFloat(tempF) + 459.67;
};

btnK.onclick = function converteGrausK() {
  let tempK = document.querySelector("#tempK").value;
  document.querySelector("#tempF").value =
    parseFloat(tempK - 273.15) * 1.8 + 32;
  document.querySelector("#tempC").value = parseFloat(tempK) - 273.15;
  document.querySelector("#tempR").value = parseFloat(tempK) * 1.8;
};

btnR.onclick = function converteGrausR() {
  let tempR = document.querySelector("#tempR").value;
  document.querySelector("#tempF").value = parseFloat(tempR) - 459.67;
  document.querySelector("#tempK").value = parseFloat(tempR) / 1.8;
  document.querySelector("#tempC").value = parseFloat(tempR - 491.67) / 1.8;
};
