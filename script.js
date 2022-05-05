'use strict'

// Provided Test Data:
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  // Creating a Player Array for Each Team listed   
  const [players1, players2] = game.players;
  console.log(players1, players2);

  // Using the Rest Perameters to Make the First Player in Each Player Array the Goal Keeper(gk) and Designating the Rest to Being Field Players
  const [gk1, ...fieldPlayers1] = players1;
  const [gk2, ...fieldPlayers2] = players2;
  console.log(gk1, fieldPlayers1, gk2, fieldPlayers2);

  // Using the Spread Operator to Combine Both Arrays to Form a New Variable titled, "allPlayers" 
  const allPlayers = [...players1, ...players2];
  console.log(allPlayers);

  // Using the Spread Operator to Add the Three Additonal Players to a New Variable titled, "players1Final"  
  const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
  console.log(players1Final);

  // Using Dot Notation to Access the "team1, x, and team2" properties and Assign them to New Variable's  
  const {odds: {team1, x: draw, team2}} = game;
//   Line 63 is the same as Line 65
//   const [team1, draw, team2] = [game.odds.team1, game.odds.x, game.odds.team2];
  console.log(team1, draw, team2);

  // Writing a Function with "...players", set as the Parameter, and Invoking the Function Three Times with Different Types of Arguments
  function printGoals (...players) {
      console.log(players);
      console.log(`${players.length} goals were scored.`);
  };

  printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
  printGoals("Davies", "Muller");
  printGoals(...game.scored);

  // Using the && Assignment Operator to Log the True Statement
  team1 < team2 && console.log("Team 1 is more likely to win.");
  team1 > team2 && console.log("Team 2 is more likely to win.");
