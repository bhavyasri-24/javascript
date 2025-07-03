// ===================== DOM elements ===========================

const options = document.querySelector("#options");
const optionsList = document.querySelector("#optionsList");

const howToPlayClose = document.querySelector("#howToPlayClose");
const howToPlayPage = document.querySelector("#howToPlayPage");
const scoreCard = document.querySelector("#scoreCard");

const greeting = document.querySelector("#greeting");
const score = document.querySelector("#score");
const scoreCardClose = document.querySelector("#scoreCardClose");
const playAgain = document.querySelector("#playAgain");
const scoreModal = document.querySelector("#scoreModal");

const input = document.querySelector("input[type='text']");
const go = document.querySelector("#go");
const previousGuess = document.querySelector("#previousGuess");
const chancesLeft = document.querySelector("#chancesLeft");
const hint = document.querySelector("#hint");
const secretNum = document.querySelector("#secretNum");
const modal = document.querySelector("#modal");

const chancesCard = document.querySelector("#chancesCard");
const chancesCardClose = document.querySelector("#chancesCardClose");
const chanceDecrease = document.querySelector("#chanceDecrease");
const chanceIncrease = document.querySelector("#chanceIncrease");
const chanceNum = document.querySelector("#chanceNum");
const chancesDone = document.querySelector("#chancesDone");
const chanceModal = document.querySelector("#chanceModal");

const toggleAudio = document.querySelector("#toggleAudio");
const bgAudio = document.querySelector("#bgAudio");

const welcomeCard = document.querySelector("#welcomeCard");
const welcomeModal = document.querySelector("#welcomeModal");
const startGameBtn = document.querySelector("#startGameBtn");
const back = document.querySelector("#back");

const updateChancesBtn = document.querySelector("#updateChancesBtn");
const quitGame = document.querySelector("#quitGame");
const howToPlayBtn = document.querySelector("#howToPlayBtn");

// =================== Game Variables ========================
let maxGuesses = 10;
let guessCount = 0;
let val = Math.round(Math.random() * 100);
let guessList = [];
let isPlaying = false;
let gameStarted = false;
const penaltyPerWrongGuess = () => Math.round(100 / maxGuesses);

chancesLeft.innerText = maxGuesses;

console.log(val);

// =================== Game Functions =========================

function resetGame() {
  guessList.length = 0;
  guessCount = 0;
  val = Math.round(Math.random() * 100);
  console.log(val);
  input.value = "";
  chancesLeft.innerText = `${maxGuesses}`;
  previousGuess.innerText = "";
  hint.classList.add("hidden");
  scoreCard.classList.add("hidden");
  optionsList.classList.add("hidden");
}

function showScoreCard(scoreCount) {
  if (scoreCount >= 90) {
    greeting.innerText = "Legendary!";
  } else if (scoreCount >= 70) {
    greeting.innerText = "Awesome!!";
  } else if (scoreCount >= 50) {
    greeting.innerText = "Great Job!";
  } else if (scoreCount >= 30) {
    greeting.innerText = "Good Try!";
  } else if (scoreCount >= 10) {
    greeting.innerText = "Keep Practicing!";
  } else {
    greeting.innerText = "Better Luck Next Time!";
  }

  scoreCard.classList.remove("hidden");
}


function updateGuesses() {
  if (input.value.trim() === "") return;
  const num = parseInt(input.value.trim());

  if (isNaN(num)) return;

  if (num < 0 || num > 100) {
    hint.innerText = "Number out of bounds.";
    hint.classList.remove("hidden");
    hint.classList.replace("text-3xl", "text-xl");
    return;
  }

  if (guessList.includes(num)) {
    hint.innerText = "You already guessed this!";
    hint.classList.remove("hidden");
    hint.classList.replace("text-xl", "text-3xl");
    return;
  }

  guessList.push(num);
  guessCount++;
  chancesLeft.innerText = `${maxGuesses - guessCount}`;
  previousGuess.innerText = guessList.join(", ");

  if (num == val) {
    const scoreCount =
      (maxGuesses - (guessCount - 1)) * penaltyPerWrongGuess();
    score.innerText = `${scoreCount}%`;
    secretNum.innerText = val;
    showScoreCard(scoreCount);
  } else{
    displayHint(num);
  }

  if (guessCount === maxGuesses) {
    score.innerText = `0`;
    greeting.innerText = "Better Luck Next Time!";
    secretNum.innerText = val;
    scoreCard.classList.remove("hidden");
  }
}

function displayHint(num) {
  if (Math.abs(num - val) <= 5) {
    hint.innerText = "Super Close!";
  } else if (Math.abs(num - val) <= 15) {
    hint.innerText = "Close!";
  } else if (num > val + 15 && num <= val + 30) {
    hint.innerText = "High!";
  } else if (num < val - 15 && num >= val - 30) {
    hint.innerText = "Low!";
  } else if (num > val + 30) {
    hint.innerText = "Too High!";
  } else if (num < val - 30) {
    hint.innerText = "Too Low!";
  }

  hint.classList.remove("hidden");
}

function startAudio() {
  if (!isPlaying) {
    bgAudio.volume = 0.4;
    bgAudio.loop = true;
    bgAudio
      .play()
      .then(() => {
        isPlaying = true;
      })
      .catch((err) => {
        console.warn(err);
      });
  }
}

// ====================== Event Listeners =======================


window.addEventListener("beforeunload", () => {
  localStorage.setItem("bgMusicPlaying", isPlaying ? "true" : "false");
});

// close modals on outside click

document.addEventListener("click", (e) => {
  if (!gameStarted) return;
  if (
    !optionsList.contains(e.target) &&
    !optionsList.classList.contains("hidden") &&
    e.target !== options
  ) {
    optionsList.classList.add("hidden");
  }

  if (
    e.target === howToPlayPage ||
    e.target === howToPlayClose ||
    (howToPlayClose.contains(e.target) && !modal.contains(e.target))
  ) {
    howToPlayPage.classList.add("hidden");
    optionsList.classList.add("hidden");
  }

  if (
    e.target === chancesCard ||
    e.target === chancesCardClose ||
    (chancesCardClose.contains(e.target) && !chanceModal.contains(e.target))
  ) {
    chancesCard.classList.add("hidden");
    optionsList.classList.add("hidden");
  }

  if (
    e.target === scoreCard ||
    e.target === scoreCardClose || e.target === back ||
    (scoreCardClose.contains(e.target) && !scoreModal.contains(e.target))
  ) {
    scoreCard.classList.add("hidden");
  }
});

// Audio toggle button

toggleAudio.addEventListener("click", () => {
  if (isPlaying) {
    bgAudio.pause();
    toggleAudio.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    isPlaying = false;
  } else {
    bgAudio.volume = 0.5;
    bgAudio.loop = true;
    bgAudio
      .play()
      .then(() => {
        toggleAudio.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        isPlaying = true;
      })
      .catch((err) => {
        console.warn("Autoplay blocked:", err);
      });
  }
});

// welcome screen

startGameBtn.addEventListener("click", () => {
  welcomeCard.classList.add("hidden");
  localStorage.setItem("welcomeShow", "true");
  gameStarted = true;
  startAudio();
  isPlaying = true;
}, { once: true });

// options list

options.addEventListener("click", () => {
  optionsList.classList.toggle("hidden");
});

// how to play modal

howToPlayBtn.addEventListener("click", () => {
  howToPlayPage.classList.remove("hidden");
  optionsList.classList.add("hidden");
});

// reset game optios

quitGame.addEventListener("click", resetGame);
playAgain.addEventListener("click", resetGame);

// game interface logic 

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    updateGuesses();
    input.value = "";
  }
});

go.addEventListener("click", () => {
  updateGuesses();
  input.value = "";
});

// chances logic

updateChancesBtn.addEventListener("click", () => {
  chancesCard.classList.remove("hidden");
  optionsList.classList.add("hidden");
  chanceNum.value = maxGuesses;
});

chanceDecrease.addEventListener("click", () => {
  let val = parseInt(chanceNum.value);
  if (val > 1) {
    val--;
    chanceNum.value = val;
  }
});

chanceIncrease.addEventListener("click", () => {
  let val = parseInt(chanceNum.value);
  val++;
  chanceNum.value = val;
});

chancesDone.addEventListener("click", () => {
  const val = parseInt(chanceNum.value);
  if (isNaN(val) || val <= 0) {
    alert("Please enter a valid number greater than 0");
    return;
  }
  maxGuesses = val;
  resetGame();
  chancesCard.classList.add("hidden");
});