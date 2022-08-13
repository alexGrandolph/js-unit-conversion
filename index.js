const inputEl = document.getElementById("unit-input")
const inputBtn = document.getElementById("input-btn")
let lengthEl = document.getElementById("length-el")
let initalUnit = ""

inputBtn.addEventListener("click", function() {

  initalUnit = inputEl.value
  lengthEl.innerHTML = `${initalUnit} meters = ${convertMetersToFeet(initalUnit)} feet | 
  ${initalUnit} feet = ${convertFeetToMeters(initalUnit)} meters`
})


function convertMetersToFeet(value) {
  let total = value * 3.281
  return Number(total.toFixed(3))
}

function convertFeetToMeters(value) {
  let total = value / 3.281
  return Number(total.toFixed(3))
}
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/