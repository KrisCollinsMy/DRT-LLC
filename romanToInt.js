"use strict";

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanNumeralTable = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let skipNextLoop = false;
    let finalValue = 0;
    for(let i=0; i<s.length; i++){

        if(skipNextLoop){
            skipNextLoop = false;
            continue;
        }
        
        let nextRomanNumeralValue = romanNumeralTable[s[i+1]] ?? 0;
        let currentRomanNumeralValue = romanNumeralTable[s[i]];
        
        if(nextRomanNumeralValue > currentRomanNumeralValue){
            finalValue += nextRomanNumeralValue - currentRomanNumeralValue;
            skipNextLoop = true;
        }else{
            finalValue += currentRomanNumeralValue;
        }

    }

    return finalValue;

};

module.exports = romanToInt;