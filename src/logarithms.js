// requires

let exponent = require("./classes/exponent");
let log = require("./classes/log");

let logE = (n, e) => Math.log(n)/Math.log(e);



/* 
    Problems from: https://math.colorado.edu/math1300/resources/Exercises_LogarithmicFunction.pdf 
*/



/* 64 = 8^2 - Convert To Log Form */

let ExponentialToLogForm = (ans, exponent) => {
    return {
        string: `logE(${ans}, ${exponent.base}) = ${exponent.power}`,
        evalute: logE(ans, exponent.base) === exponent.power
    }
}

/* 
    console.log(ExponentialToLogForm(64, new exponent(8, 2)));
    
    returns { string: 'logE(64, 8) = 2', evalute: true }

*/



/* log3 81 = 4 - to exponential form*/

let LogToExponentialForm = (log, ans) => {
    return {
        string: `${log.e} = ${log.base}^${ans}`,
        evalute: log.e === log.base ** ans
    }
}

/*  
    console.log(LogToExponentialForm(new log(3, 81), 4));

    returns { string: '81 = 3^4', evalute: true }
*/



/* log5 25 = y - Find y */

/* 
    console.log(logE(25, 5));
    
    returns 2
*/




