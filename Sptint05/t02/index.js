let checkDivision = (start = 0, end = 100) => {
    for (let i = start; i <= end; i++) {
        let num = [];
        let resultat = [];
        num.push(`The number ${i} `);
        if (i % 2 == 0) resultat.push("is divisible by 2");
        if (i % 3 == 0) resultat.push("is divisible by 3");
        if (i % 10 == 0) resultat.push("is divisible by 10");
        if (i % 2 !== 0 && i % 3 !== 0 && i % 10 !== 0) resultat.push("-");

        resultat = resultat.join(', ');
        let all = num.concat(resultat);
        all = all.join(' ');
        console.log(all);
    }
}

module.exports.checkDivision = checkDivision;