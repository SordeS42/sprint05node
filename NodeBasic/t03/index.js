'use srict'

let firstUpper = (str) => {
    if (str) {
        str = str.toLowerCase().trim();
        return (str[0].toUpperCase() + str.slice(1));
    }
    else {
        return (str = ' ');
    }
}

module.exports.firstUpper = firstUpper;