// My Solution
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

// const camalCase = function () {
//   let inputValue = document.querySelector("textarea").value;
//   console.log(inputValue);
//   let theIndexOf_ = inputValue.indexOf("_");

//   console.log(theIndexOf_);
//   let letterToBeChanged = inputValue.charAt(theIndexOf_ + 1);
//   console.log(letterToBeChanged);
//   // Change the specific Charr to uppercase
//   let newValue = letterToBeChanged.toUpperCase();
//   console.log(newValue);

//   let newString = inputValue
//     .replace(letterToBeChanged, newValue)
//     .replace("_", "");
//   console.log(newString);
// };
// document.querySelector("button").addEventListener("click", camalCase);

//Jhonas Solution

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
