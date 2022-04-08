**# Task 2 (JS)**

**### Student task**

Write the `roman` function that will take a number written with either Roman or Arabic numerals as an argument. It will:

- Define which numerals were used
- Transform Arabic numerals into Roman (and vice versa)
- Return the result of this transformation

The function must be able to report the following errors:

- `TYPE_ERROR` — if the argument is neither a number nor a string
- `RANGE_ERROR` — if the number is outside the range of 1-3999
- `UNKNOWN_SYMBOLS` — if the argument contains symbols that can't be processed, like punctuation, irrelevant Latin characters or `NaN`.

![image](https://pictures.s3.yandex.net:443/resources/01_num_1628241863.png)

**### Repository structure**

The `pre` folder contains the initial task code. The `post` folder contains the correct solution. Your code must be placed in the `__test__/index.js` file.

### Your task

1. Write a list of things to check in the student code.
2. Write the tests according to this list.

All your work should be placed in the `__test__/index.js` file. Your code should add student errors to the `errors` array. The errors should be formatted as arbitrary strings (for example: "The `alert` function wasn’t been called"). If the code in the `index.js` file is correct, the array after the tests must remain empty. If the code is incorrect, there should be errors in the array. 

**### FAQ**

- The tests must work in Node v10.21.0