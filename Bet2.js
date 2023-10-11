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

// 1. Loop over the game.scored array and print player names with goal numbers
game.scored.forEach((player, index) => {
  console.log(`Goal ${index + 1}: ${player}`);
});

// 2. Use a loop to calculate the average odd and log it to the console
let totalOdds = 0;
for (const key in game.odds) {
  totalOdds += game.odds[key];
}
const averageOdd = totalOdds / Object.keys(game.odds).length;
console.log(`Average odd: ${averageOdd.toFixed(2)}`);

// 3. Print the 3 odds to the console in a formatted way
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

// 4. Bonus: Create an object 'scorers' with player names and goals
const scorers = {};
game.scored.forEach((player) => {
  if (scorers[player]) {
    scorers[player] += 1; // Increment the goal count if the player already exists
  } else {
    scorers[player] = 1; // Initialize the goal count if the player doesn't exist
  }
});
console.log("Scorers:", scorers);
