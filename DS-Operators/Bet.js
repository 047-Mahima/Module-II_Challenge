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

// 1. Create one player array for each team we're using
//the spread operator ([...]) to create copies of the player arrays for each team from the game object.

const players1 = [...game.players[0]];
const players2 = [...game.players[1]];

// 2. Create 'gk' and 'fieldPlayers' for Bayern Munich (team 1)
//uses destructuring to extract the first element of the players1 array (goalkeeper)
// into the gk variable, and the rest of the elements (field players) into the fieldPlayers array.
const [gk, ...fieldPlayers] = players1;

// 3. Create 'allPlayers' containing all players of both teams
//we concatenate the player arrays of both teams into a single allPlayers array using the spread operator.
const allPlayers = [...players1, ...players2];

// 4. Create 'players1Final' with substitutes for Bayern Munich (team 1)
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// 5. Create variables for odds
const { team1, x: draw, team2: team2Odds } = game.odds;

// 6. Write a function 'printGoals'
function printGoals(...playerNames) {
  console.log(`Goals scored by:`);
  playerNames.forEach((player) => {
    const goalsScored = game.scored.filter(
      //The filter method is used to create
      //a new array containing only elements that
      // match the current player's name. Then, it calculates the length of this filtered array,
      //which represents the number of goals scored by that player.
      (scorer) => scorer === player
    ).length;
    console.log(`${player}: ${goalsScored} goals`);
  });
  const totalGoals = playerNames.reduce(
    (total, player) =>
      total + game.scored.filter((scorer) => scorer === player).length,
    0
  );
  console.log(`Total goals: ${totalGoals}`);
}

// 7. Determine the team more likely to win without if/else or ternary operator
const likelyWinner =
  team1 < team2Odds ? game.team1 : team2Odds < team1 ? game.team2 : "draw";

console.log(`The team more likely to win is: ${likelyWinner}`);

// Test 'printGoals' function
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);
