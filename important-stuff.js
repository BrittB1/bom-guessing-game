const characters = [{
    name: "knuckles",
    hints: [
        "First appearence was in 1994",
        "Favorite food is grapes",
        "Treasure hunts on occasion",
        "Has red locs"
    ]
},
{
    name: "tails",
    hints: [
        "Can fly and carry teamates",
        "Has a fear of lightning",
        "Is a genuis inventor",
        "Real name is Miles Prower"
    ]
},
{
    name: "sonic",
    hints: [
        "Born on Christmas Island",
        "Was originally designed as a rabbit",
        "Had a cameo in a racing game before his official debut",
        "Eyes switched to green design around the early 2000's"
    ]
}
    ,
{
    name: "amy",
    hints: [
        "Debuted in the game 'Sonic CD'",
        "Used to wear an orange skirt in original design",
        "Freed Sonic from Prison Island",
        "Main weapon is the Piko Piko Hammer"
    ]
}
];

const statusEl = document.getElementById("status");
const hintListEl = document.getElementById("hint-list");
const guessingbutton = document.getElementById("guessing-button");

function pickRandomCharacter() {
    const i = Math.floor(Math.random() * characters.length);
    return characters[i];
}

let secretCharacter = pickRandomCharacter();
let visableHints = 0;
let gameOver = false;


function showHint() {
    const li = document.createElement("li")
    li.textContent = secretCharacter.hints[visableHints];
    hintListEl.appendChild(li);
    visableHints++;
}

function updateStatus() {
    statusEl.textContent = `You have ${secretCharacter.hints.length - visableHints} guesses left`;
}
guessingbutton.addEventListener("click", handleGuess);

function handleGuess() {
    if (gameOver) return;

    const raw = prompt("Who am I?");
    if (raw == null) return;

    const guess = raw.trim().toLowerCase();

    if (guess === secretCharacter.name) {
        alert("You guessed it")
        gameOver = true;
        return;
    }

    if (visableHints >= secretCharacter.hints.length) {
        alert(`Sorry! Out of guesses.. the answer was ${secretCharacter.name}.`);
        gameOver = true;
        return;
    }

    alert("Nah, that is not the answer. Here's another hint");
    showHint();
    updateStatus();
}
showHint();
updateStatus();