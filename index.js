const inputEl = document.getElementById("unit-input")
const inputBtn = document.getElementById("input-btn")

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

let initalUnit = ""

inputBtn.addEventListener("click", function() {

  initalUnit = inputEl.value
  lengthEl.innerHTML = `${initalUnit} meters = ${convertMetersToFeet(initalUnit)} feet | 
  ${initalUnit} feet = ${convertFeetToMeters(initalUnit)} meters`
 
  volumeEl.innerHTML = `${initalUnit} liters = ${convertLitersToGallons(initalUnit)} gallons | 
  ${initalUnit} gallons = ${convertGallonsToLiters(initalUnit)} liters`
  
  massEl.innerHTML = `${initalUnit} kilos = ${convertKilosToPounds(initalUnit)} pounds | 
  ${initalUnit} pounds = ${convertPoundsToKilos(initalUnit)} kilos`
  
})


function convertMetersToFeet(value) {
  let feetTotal = value * 3.281
  return Number(feetTotal.toFixed(3))
}

function convertFeetToMeters(value) {
  let metersTotal = value / 3.281
  return Number(metersTotal.toFixed(3))
}

function convertLitersToGallons(value) {
  let gallonsTotal = value * .264
  return Number(gallonsTotal.toFixed(3))
}

function convertGallonsToLiters(value) {
  let litersTotal = value / .264
  return Number(litersTotal.toFixed(3))
}

function convertKilosToPounds(value) {
  let poundsTotal = value * 2.204
  return Number(poundsTotal.toFixed(3))
}

function convertPoundsToKilos(value) {
  let kilosTotal = value / 2.204
  return Number(kilosTotal.toFixed(3))
}


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/