let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg")
const compscorepara = document.querySelector("#comp-score");
const userscorepara = document.querySelector("#user-score")

const choices = document.querySelectorAll(".choise");
const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randidx = Math.floor(Math.random() * 2);
    return options[randidx];
}
const drawGame = () => {
    msg.innerText = `Game Draw! . Play Again`;
    msg.style.backgroundColor ="black"
};
const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compscorepara.innerText = compScore;
        msg.innerText = `you lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) => {
    console.log(`User choice = ${userChoice}`);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log(`Comp Choice = ${compChoice}`);

    if (userChoice === compChoice) {
        //draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            //scissors,paper
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            //scissors,rock
            userWin = compChoice === "Scissors" ? false : true;
        } else {
            //paper,scissors
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log(`choce was clicked,${userChoice}`);
        playgame(userChoice)
    })

});