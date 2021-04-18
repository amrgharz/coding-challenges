// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages �)
// 4. Run the function for both test datasets
// Test data:
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (arr) {
  const humanYears = arr.map(function (dogAge) {
    if (dogAge <= 2) {
      dogAge = dogAge * 2;
    } else {
      dogAge = 16 + dogAge * 4;
    }
    return dogAge;
  });
  console.log(humanYears);
};

calcAverageHumanAge(data1);

//calcAvarageHumanAge
const calcAvarageHumanAge1 = arr =>
  arr
    .map(age => (age < 18 ? (age = age * 2) : (age = 16 + age * 4)))
    .filter(age => age > 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
console.log(calcAvarageHumanAge1(data1));
console.log(calcAvarageHumanAge1(data2));

const calcAverageArrow = function (arr) {
  const humanAge = arr.map(age =>
    age <= 2 ? (age = age * 2) : (age = 16 + age * 4)
  );
  const bigAgeDogs = humanAge.filter(function (dogAge) {
    return dogAge > 18;
  });
  console.log(bigAgeDogs);
  const avarageHumanAge =
    bigAgeDogs.reduce(function (acc, curr) {
      return acc + curr;
    }, 0) / bigAgeDogs.length;
  console.log(avarageHumanAge);
};
calcAverageArrow(data1);
