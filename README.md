This React application is a scoreboard for beach volley games. It allows users to track points and sets for each team.
Sets go to 21 points with 2 point difference, and possible third set to 15. The scoreboard will also alert to switch sides every 7 points and in the third set every 5 points. 
                
Here's a detailed breakdown of the app's functionality:

State Management:
team1Points, team2Points: Track the points for each team.
team1Sets, team2Sets: Track the sets won by each team.
message: Display messages to the user.
setResults: Store the results of each set.
isSwitched: Determine if the score display should be switched between teams.

Point Handling:
handleAddPoint(team): Adds a point to the specified team. If the points reach the set-winning criteria (21 points with a 2-point lead, or 15 points with a 2-point lead in the final set), it resets the points and increments the set count.
handleRemovePoint(team): Removes a point from the specified team, ensuring points do not go below zero.

Set Handling:
handleAddSetPoint(team, team1Score, team2Score): Adds a set to the specified team, records the set result, and resets the points.
handleResetScores(): Resets the points for both teams.
handleResetSets(): Resets the sets and set results for both teams.

Message Handling:
showMessage(msg): Displays a message.
clearMessage(): Clears the displayed message.
Switch Handling:

handleManualSwitch(): Manually switches the score display between teams.
Side Switching Logic:
Automatically switches sides based on the total points scored (every 5 points in the final set, every 7 points otherwise).
UI Components:
TeamBox: Displays the team name, points, sets, and buttons to add or remove points.
Main component renders the scoreboard, message box, control buttons, and set results.