module.exports = class StrFrequency {
    constructor(str) {
        this.str = str.toUpperCase();
        this.wordArr = this.str.split(/[^A-Z]+/g);
        this.wordArr.splice(this.wordArr.length - 1, 1);
        this.letterArr = this.wordArr.join('').split('');
        this.toReverse = str.split('');
    }

    letterFrequencies() {
        let res = {};
        this.letterArr.forEach(element => {
            let PreResult = this.letterArr.filter(letter => letter == element);
            res[element] = PreResult.length;
        });
        return res;
    }

    wordFrequencies() {
        let res = {};
        this.wordArr.forEach(element => {
            let PreResult = this.wordArr.filter(word => word == element);
            res[element] = PreResult.length;
        });
        return res;
    }

    reverseString() {
        return (this.toReverse.reverse().join(''))
    }
}