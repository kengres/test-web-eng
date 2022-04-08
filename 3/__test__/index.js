/*
   Run npm init
    This command will provide access to two libraries:
    esprima – http://esprima.org
    esquery – https://github.com/estools/esquery
    After that, you'll need to access the app.js file with the help of fs and path and test the code in it
*/
const esprima = require("esprima");
const esquery = require("esquery");
const fs = require("fs");
const path = require("path");

/*
  Use this comment to write down the list of things you'd check in the student code:
  - Get and read the file code
  - check if the http module was required
  - check if the server was created
  - check that it is running on port 3000
  - logs something on request
*/

const errors = [];

// Write your code here

const file = fs.readFileSync(path.join(__dirname, "../pre/app.js"));
const code = file.toString("utf-8");
const program = esprima.parse(code);
// console.log(JSON.stringify(program, null, 2));

const httpReqResult = esquery(
  program,
  "VariableDeclarator[id.name=http] [callee.name=require]"
);

if (httpReqResult.length === 0) {
  errors.push("You have to require the http module");
}
const serverCreateResult = esquery(
  program,
  "CallExpression[callee.object.name=http][callee.property.name=createServer]"
);

if (serverCreateResult.length === 0) {
  errors.push("You have to create the http server");
}

const serverVarResults = esquery(program, "VariableDeclarator[id.name=server]");

if (serverVarResults.length === 0) {
  errors.push("Save the server in a `server` variable");
}
const consoleResults = esquery(
  program,

  "CallExpression[callee.object.name=http][callee.property.name=createServer] BlockStatement ExpressionStatement [callee.object.name='console'][callee.property.name='log'] Literal"
);

if (consoleResults.length === 0) {
  errors.push("You need to log something to the console on each request");
}

const listenResult = esquery(
  program,
  "CallExpression[callee.object.name='server'][callee.property.name=listen] Literal[value=3000]"
);

if (listenResult.length === 0) {
  errors.push("Make sure the server is listen to port 3000");
}

console.log(errors);
