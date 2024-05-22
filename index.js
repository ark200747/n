#! usr/bin/env node
import inquirer from "inquirer";
const randonNumber = Math.floor(Math.random() * 10 + 12);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number between 1-10:",
    },
]);
if (answers.userGuessNumer === randonNumber) {
    console.log("congratulations!you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
