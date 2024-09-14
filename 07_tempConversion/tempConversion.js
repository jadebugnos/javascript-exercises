const convertToCelsius = function(temp) {
  const toBeRounded = (temp - 32) / 1.8;
  const rounded = Math.round(toBeRounded * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(temp) {
  const toBeRounded = (temp * 1.8) + 32;
  const rounded = Math.round(toBeRounded * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
