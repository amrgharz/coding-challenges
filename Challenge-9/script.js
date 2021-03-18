const maxTemps = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} degrees in day ${[i] + 1}...`;
  }
  console.log("..." + str);
};
maxTemps([7, 5, 9]);
