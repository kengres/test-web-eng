/*
  Use this comment to write down a list of things you'd check in the student code:
  1. check that html is correct
  2. check that css is connected
  3. check rules for div.content exists in css
  4. check that height is present and is 100vh
*/

const errors = [];

// Write your code here
// 1.
const body = document.getElementsByTagName('body')[0]
if (!/<div class=('|")content('|")>\s*<\/div>/.test(body.innerHTML)) {
  errors.push("The div with class .content is not present in the index.html file")
}

const sheets = document.styleSheets
let currentSheet;
let contentRules;

for (const i of sheets) {
  if (i.href.endsWith('style.css')) {
    currentSheet = i;
    break;
  }
}

// 2.
if (!currentSheet) {
  errors.push("It looks like the stylesheet is not connected!")
} else {

  // 3.
  for (const rule in currentSheet.cssRules) {
    if (Object.hasOwnProperty.call(currentSheet.cssRules, rule)) {
      const selectorText = currentSheet.cssRules[rule].selectorText;
      if (["div.content", ".content"].indexOf(selectorText) >= 0) {
        contentRules = currentSheet.cssRules[rule];
        break;
      }
    }
  }
  if (!contentRules) {
    errors.push("Rule div.content is absent in the stylesheet");
  } else {
    // 4.
    if (contentRules.style["height"] !== "100vh") {
      errors.push("Incorrect value for height on the div with class .content");
    }
  }
}


console.log(errors);