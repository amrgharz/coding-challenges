const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//.1

const [players1, players2] = game.players; // Destructuring Arrays
console.log(players1, players2);

//.2

const [gk, ...fieldPlayers] = players1; // The Rest Operator
console.log(gk, fieldPlayers);

//.3

const allPlayers = [...players1, ...players2]; // The Spread Operator
console.log(allPlayers);

//.4
const finalPlayers = [...players1, "Thiago", "Cotinho", "Dieego"]; // Spread + Add Items to an array
console.log(finalPlayers);

//.5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2); // Destructuring Opjects

//.6
const printGoals = function (...players) {
  console.log(`${players.length} goals were scoored`);
  console.log(players);
};
printGoals(...game.scored);

//.7
team1 < team2 && console.log("Team one is more likely to win");
team2 < team1 && console.log("Team two is more likely to win");

//.8 Looping through scores
for (let [index, name] of game.scored.entries()) {
  console.log(`Goal ${index + 1} is: ${name}`);
}

//.9 Looping through object
const odds = game.odds;
let sum = 0;
for (let avarageOdd of Object.entries(odds)) {
  sum = sum + avarageOdd[1];
}
let avarageOdd = sum / Object.values(odds).length;
console.log(avarageOdd);

//.10 Print out the teams odds
console.log(`Odd of victory ${game.team1} is : ${game.odds.team1}`);
console.log(`Odd of victory draw is : ${game.odds.team1}`);
console.log(`Odd of victory ${game.team2} is : ${game.odds.team2}`);

//.11 Plaeyrs who scored with the number of the goals.
let numOfGoals = game.scored;
console.log(numOfGoals);
const newObj = {
  [game.scored[0]]: "1",
};
console.log(newObj);
