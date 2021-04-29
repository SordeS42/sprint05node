let firstUpper = (str) => {
    if (!str)
        return ('');
    str = str.toLowerCase().trim();
    return (str[0].toUpperCase() + str.slice(1));
}
module.exports.firstUpper = firstUpper;