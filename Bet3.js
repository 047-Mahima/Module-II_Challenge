const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);

// 1. Create an array 'events' of unique game events
const events = [...new Set(gameEvents.values())];

// 2. Remove the unfair yellow card event from minute 64
gameEvents.delete(64);

// 3. Calculate and log the average time between events
const totalTime = [...gameEvents.keys()].pop(); // Get the last minute (end of the game)
const averageTimeBetweenEvents = totalTime / gameEvents.size;
console.log(
  `An event happened, on average, every ${averageTimeBetweenEvents.toFixed(
    0
  )} minutes`
);

// 4. Loop over 'gameEvents' and log each element with first/second half info
gameEvents.forEach((event, minute) => {
  const half = minute <= 45 ? "FIRST HALF" : "SECOND HALF";
  console.log(`[${half}] ${minute}: ${event}`);
});

// Here's an explanation of each task:

// 1. We create an array called events that contains unique game events by
//converting the values of the gameEvents map into an array and using Set to remove duplicates.

// 2.  We remove the unfair yellow card event from minute 64 by using
//the delete method on the gameEvents map.

// 3. We calculate the average time between events by finding the last minute
//in the gameEvents map (the end of the game) and dividing it by the number of events.
//We then log this information to the console.

// 4. We loop over the gameEvents map using forEach and log each
//element to the console, marking whether it's in the first half or
//second half of the game based on the minute (<= 45 or > 45).
