"use strict";
/*
  Use this comment to write down a list of things you'd check in the student code:
  - Check that it transform Arabic numerals into Roman (and vice versa)
  - Check that it returns the result of transformation

  - `TYPE_ERROR` — if the argument is neither a number nor a string
  - `RANGE_ERROR` — if the number is outside the range of 1-3999
  - `UNKNOWN_SYMBOLS` — if the argument contains symbols that can't be processed, like punctuation, irrelevant Latin characters or `NaN`.
  */
exports.__esModule = true;
var errors = [];
// Write your code here
var src_1 = require("../post/src");
if (typeof src_1["default"] !== "function") {
    errors.push("You have to create the roman() function");
}
else {
    if ((0, src_1["default"])("I") === undefined || (0, src_1["default"])("I") === null) {
        errors.push("The roman() function must return the result");
    }
    var romanized = [
        (0, src_1["default"])("I") === 1,
        (0, src_1["default"])("II") === 2,
        (0, src_1["default"])("IV") === 4,
        (0, src_1["default"])("V") === 5,
        (0, src_1["default"])("IX") === 9,
        (0, src_1["default"])("X") === 10,
        (0, src_1["default"])("XL") === 40,
        (0, src_1["default"])("L") === 50,
        (0, src_1["default"])("XC") === 90,
        (0, src_1["default"])("C") === 100,
        (0, src_1["default"])("CD") === 400,
        (0, src_1["default"])("D") === 500,
        (0, src_1["default"])("CM") === 900,
        (0, src_1["default"])("M") === 1000,
    ];
    if (romanized.some(function (t) { return t === false; })) {
        errors.push("Check that your function converts roman numerals to arabic");
    }
    var deromanized = [
        (0, src_1["default"])(1) === "I",
        (0, src_1["default"])(2) === "II",
        (0, src_1["default"])(4) === "IV",
        (0, src_1["default"])(5) === "V",
        (0, src_1["default"])(9) === "IX",
        (0, src_1["default"])(10) === "X",
        (0, src_1["default"])(40) === "XL",
        (0, src_1["default"])(50) === "L",
        (0, src_1["default"])(90) === "XC",
        (0, src_1["default"])(100) === "C",
        (0, src_1["default"])(400) === "CD",
        (0, src_1["default"])(500) === "D",
        (0, src_1["default"])(900) === "CM",
        (0, src_1["default"])(1000) === "M",
    ];
    if (deromanized.some(function (t) { return t === false; })) {
        errors.push("Check that your function converts arabic numerals to roman");
    }
    try {
        (0, src_1["default"])("LK");
        (0, src_1["default"])("@.#x");
        errors.push("Must throw error for unknown symbols");
    }
    catch (e) {
        // console.log("error", e);
    }
    try {
        (0, src_1["default"])(5000);
        (0, src_1["default"])(-3);
        errors.push("Must throw error for values outside the range of 1-3999");
    }
    catch (e) {
        // console.log("error", e);
    }
    try {
        // @ts-ignore
        (0, src_1["default"])({});
        errors.push("Must throw TYPE_ERROR for args not strings or numbers");
    }
    catch (e) {
        // console.log("error", e);
    }
}
console.log(errors);
