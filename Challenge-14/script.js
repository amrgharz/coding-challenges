const poll = {
  question: "What is your favorit programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    typeof answer === "number" &&
      answer < this.options.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults("string");
  },
  displayResults: function (type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results: ${this.answers.join(", ")}`);
    }
  }
};
document
  .querySelector(".answer-poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
//IIFE Immediatly invoked function expressions
(function () {
  console.log("You can call me only once!!");
})();

// Closures
let f;
const g = function () {
  const a = 5;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 10;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

//F is a different function as we re-assigned its value
h();
f();
//Example 2
const porPassengers = function (n, time) {
  setTimeout(function () {
    console.log(`We are boarding all ${n} passengers`);

    console.log(`There are 3 groups, each group is ${n / 3}`);
  }, time * 1000);

  console.log(`Will start boarding in ${time} seconds`);
};

porPassengers(30, 3);

//Challenge 14, Clousers
(function () {
  const header = document.querySelector(".header");
  header.style.color = "red";
  document.body.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

function Parent() {
  let youCanSeeMe = "hello";
  return function hasAccess() {
    console.log(youCanSeeMe);
  };
}
Parent();
hasAccess();
