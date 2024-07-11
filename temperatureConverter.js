let userValue = prompt(`Put in Value for conversion`);
while (isNaN(userValue)) {
    userValue = prompt(`Please put in a number!!!`)
}

let unit1 = prompt (`Unit --- C, F or K`);
while (unit1 != "C" && unit1 != "F" && unit1 != "K") {
    unit1 = prompt ("Must be 'C', 'F', or 'K'! (Case Sensitive)");
}

let unit2 = prompt (`Unit of Conversion`);
while (unit2 != "C" && unit2 != "F" && unit2 != "K") {
    unit2 = prompt ("Must be 'C', 'F', or 'K'! (Case Sensitive)");
}

const UserAns = (temperatureConverter (userValue, unit1, unit2));
function temperatureConverter (userValue, unit1, unit2) {
    let answer = 0
    if ((unit1 === "C" && unit2 === "C") || (unit1 === "F" && unit2 === "F") || (unit1 === "K" && unit2 === "K")){
        answer = alert (`You're not Serious!!!`)

        return answer;
    }

    if (unit1 === "C" && unit2 === "F") {
       answer = celsuisToFahrenheit (userValue)
    } else if (unit1 === "C" && unit2 === "K") {
        answer = CelsiusToKelvin (userValue)
    }else if (unit1 === "F" && unit2 === "C") {
        answer = fahrenheitToCelsius (userValue)
    }else if (unit1 === "F" && unit2 === "K") {
        answer = fahrenheitToKelvin (userValue)
    } else if (unit1 === "K" && unit2 === "C") {
        answer = KelvinToCelsius (userValue)
    } else if (unit1 === "K" && unit2 === "F") {
        answer = KelvinToFahrenheit (userValue)
    }

    return alert(`${userValue} \'${unit1} = ${answer} \'${unit2}`);
}


function celsuisToFahrenheit (C){
    const Fahrenheit =  C * (9/5) + 32;
    const roundUp2 = Fahrenheit.toFixed(2);

    return roundUp2;
}
function fahrenheitToCelsius (F){
    const Celsius = (F - 32) * 5/9;
    const roundUp2 = Celsius.toFixed (2);

    return roundUp2;
}
function CelsiusToKelvin (C) {
    const Kelvin = Number (C) + 273;

    return Kelvin;
}
function KelvinToCelsius (K) {
    const Celsius = K - 273;

    return Celsius;
}
function fahrenheitToKelvin (F) {
    Kelvin = (F - 32) * 5/9 + 273;
    roundUp2 = Kelvin.toFixed(0);

    return roundUp2;
}
function KelvinToFahrenheit (K) {
    Fahrenheit = (K -273) * (9/5) + 32;
    roundUp2 = Fahrenheit.toFixed(2);

    return roundUp2;
}