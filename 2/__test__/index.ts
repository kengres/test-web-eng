/*
  Use this comment to write down a list of things you'd check in the student code:
  - Check that it transform Arabic numerals into Roman (and vice versa)
  - Check that it returns the result of transformation
  - Check that it throw a TYPE_ERROR
  - Check that it throw a RANGE_ERROR
  - Check that it throw a UNKNOWN_SYMBOLS
  */

const errors = [];

// Write your code here
import roman from "../post/src";

if (typeof roman !== "function") {
  errors.push("You have to create the roman() function");
} else {
  if (roman("I") === undefined || roman("I") === null) {
    errors.push("The roman() function must return the result");
  }
  const romanized = [
    roman("I") === 1,
    roman("II") === 2,
    roman("IV") === 4,
    roman("V") === 5,
    roman("IX") === 9,
    roman("X") === 10,
    roman("XL") === 40,
    roman("L") === 50,
    roman("XC") === 90,
    roman("C") === 100,
    roman("CD") === 400,
    roman("D") === 500,
    roman("CM") === 900,
    roman("M") === 1000,
  ];
  if (romanized.some((t) => t === false)) {
    errors.push("Check that your function converts roman numerals to arabic");
  }
  const deromanized = [
    roman(1) === "I",
    roman(2) === "II",
    roman(4) === "IV",
    roman(5) === "V",
    roman(9) === "IX",
    roman(10) === "X",
    roman(40) === "XL",
    roman(50) === "L",
    roman(90) === "XC",
    roman(100) === "C",
    roman(400) === "CD",
    roman(500) === "D",
    roman(900) === "CM",
    roman(1000) === "M",
  ];
  if (deromanized.some((t) => t === false)) {
    errors.push("Check that your function converts arabic numerals to roman");
  }
  try {
    roman("LK");
    roman("@.#x");
    errors.push("Must throw error for unknown symbols");
  } catch (e) {
    // console.log("error", e);
  }
  try {
    roman(5000);
    roman(-3);
    errors.push("Must throw error for values outside the range of 1-3999");
  } catch (e) {
    // console.log("error", e);
  }
  try {
    // @ts-ignore
    roman({});
    errors.push("Must throw TYPE_ERROR for args not strings or numbers");
  } catch (e) {
    // console.log("error", e);
  }
}

console.log(errors);
