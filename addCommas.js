const addCommas = (num) => {

// This was my initial try by my own logic: 
// // turn num into string so it can be more mutable.
// let numAsStr = num.toString();

// // eliminate three digit numbers that are negative or positive right off the bat
// if ((numAsStr[0] === "-" && numAsStr.length <= 4) || (numAsStr.length <= 3)) {
//     return numAsStr;
// }

// https://stackoverflow.com/questions/6784894/add-commas-or-spaces-to-group-every-three-digits

// This turns num into a string in an array called str, and if num contains a decimal it splits into two strings
// let str = num.toString().split('.');

// I don't understand this unicode logic very much:
// if (str[0].length >= 5) {
//     str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
// }
// if (str[1] && str[1].length >= 5) {
//     str[1] = str[1].replace(/(\d{3})/g, '$1 ');
// }
// return str.join('.');

// Or simply this can be used: 
return num.toLocaleString();

// https://stackoverflow.com/questions/6784894/add-commas-or-spaces-to-group-every-three-digits
}

module.exports = addCommas;