// HTML Components
const unitInput = document.querySelector("#unit-input");
const convertBtn = document.querySelector(".convert-btn");
const mTf = document.querySelector("#mtf");
const fTm = document.querySelector("#ftm");
const lTg = document.querySelector("#ltg");
const gTl = document.querySelector("#gtl");
const kTp = document.querySelector("#ktp");
const pTk = document.querySelector("#ptk");

convertBtn.addEventListener("click", () => {
  let unit = parseInt(unitInput.value)
  meterFeet(unit)
  feetMeter(unit)
  literGallon(unit)
  gallonLiter(unit)
  kiloPound(unit)
  poundKilo(unit)
})


// Formulas
function meterFeet(unit) {
  let feet = (unit*3.28084).toFixed(3)
  mTf.textContent = `${unit} meters = ${feet} feet  |`
}

function feetMeter(unit) {
  let meter = (unit*0.3048).toFixed(3)
  fTm.textContent = `  ${unit} feet = ${meter} meters`
}

function literGallon(unit) {
  let gallon = (unit*0.264172).toFixed(3)
  lTg.textContent = `${unit} liters = ${gallon} gallons  |`
}

function gallonLiter(unit) {
  let liter = (unit*3.785412).toFixed(3)
  gTl.textContent = `  ${unit} gallons = ${liter} liters`
}

function kiloPound(unit) {
  let pound = (unit*2.2).toFixed(3)
  kTp.textContent = `${unit} kilograms = ${pound} pounds  |`
}

function poundKilo(unit) {
  let kilo = (unit*0.45359237).toFixed(3)
  pTk.textContent = ` ${unit} pounds = ${kilo} kilograms`
}