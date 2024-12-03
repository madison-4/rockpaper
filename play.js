console.log("Hello World");
function getComputerChoice() {
   let choice = Math.random();
   choice = choice * 3;
   choice = Math.trunc(choice);
   let opts = ["rock", "paper", "scissors"];
   return (opts[choice]);
}
console.log(getComputerChoice());
// testing for choice
function getHumanChoice() {
    let opts = ["rock", "paper", "scissors"];
    let choice = prompt("Please enter rock, paper or scissors.");
    if (choice == getComputerChoice())
    {
        alert("Great choice you won");
        return (choice);
    }
    else 
    {
        alert("sorry you lost");
        return (choice);
    }
}
console.log(getHumanChoice());