**# Task 3 (JS)**

**### Student task**

In this task we’ll be creating a server, which should return an HTML page. We’ve prepared the markup and styles for you, and we’ve saved them in the `markup` variable.

You’ll need to:

1. Create a server.
2. Save it in the `server` variable.
3. Run it on port `3000`.

Log an arbitrary string to the console upon each user request, for example `"Hello world!"`

**### Repository structure**

The `pre` folder contains the initial task code. The `post` folder contains the correct solution. Your code must be placed in the `__test__/index.js` file.

### Your task

1. Write a list of things to check in the student code.
2. Write the tests according to this list.

All your work should be placed in the `__test__/index.js` file. Your code should add student errors to the `errors` array. The errors should be formatted as arbitrary strings (for example: "The `alert` function hasn’t been called"). If the code in the `app.js` file is correct, the array after the tests must remain empty. If the code is incorrect, there should be errors in the array. In order to test JS code, we’ve connected the `__test__/package.json` file. Run `npm init` to get access to two libraries — `esprima` and `esquery`. 

**### FAQ**

- The tests must work in Node v10.21.0