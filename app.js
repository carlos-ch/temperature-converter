const celciusInput = document.querySelector("#celcius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input")

function roundNum(num) {
  return Math.round(num * 100) / 100;
}

function celciusToFahrenheitAndKelvin() {
  const cTemp = celciusInput.value;
  const fTemp = (cTemp * (9/5)) + 32;
  fahrenheitInput.value = roundNum(fTemp);
  const kTemp = parseInt(cTemp) + 273.15;
  kelvinInput.value = roundNum(kTemp);
}
celciusInput.addEventListener("input", celciusToFahrenheitAndKelvin)

function fahrenheitToCelciusAndKelvin() {
  const fTemp = parseFloat(fahrenheitInput.value);
  const cTemp = (fTemp - 32)* 5/9;
  celciusInput.value = roundNum(cTemp);
  const kTemp = cTemp + 273.15;
  kelvinInput.value = roundNum(kTemp);
}

fahrenheitInput.addEventListener("input", fahrenheitToCelciusAndKelvin)

function kelvinToCelciusAndFahrenheit() {
  const kTemp = parseFloat(kelvinInput.value);
  const cTemp = kTemp - 273.15;
  celciusInput.value = roundNum(cTemp);
  const fTemp = (cTemp * 9 / 5) + 32;
  fahrenheitInput.value = roundNum(fTemp);
}
kelvinInput.addEventListener("input", kelvinToCelciusAndFahrenheit)
