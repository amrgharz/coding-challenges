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
