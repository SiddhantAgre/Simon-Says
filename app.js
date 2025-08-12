let userSeq = [];
let gameSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let colors = ["red", "blue", "green", "orange"];

document.addEventListener("keypress", () => {
  if (started === false) {
    started = true;
    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;

  let randomIdx = Math.floor(Math.random() * 4);
  let randColor = colors[randomIdx];
  let randBtn = document.querySelector(`#${randColor}`);

  gameSeq.push(randBtn.id);

  gameFlash(randBtn);
}

function gameFlash(btn) {
  btn.classList.add("gameFlash");
  setTimeout(() => {
    btn.classList.remove("gameFlash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 250);
}

let allBtns = document.querySelectorAll(".btn");

for (let btn of allBtns) {
  btn.addEventListener("click", function () {
    userFlash(btn);
    userSeq.push(btn.id);
    checkRes();
  });
}

function checkRes() {
  let idx = userSeq.length - 1;
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(() => {
        levelUp();
      }, 750);
    }
  } else {
    h2.innerHTML = `Game over! your score is <b>${level}</b> </br> press any key to start the game.`;
    document.querySelector("body").style.backgroundColor = "red";
    restartGame();
  }
}

function restartGame() {
  userSeq = [];
  gameSeq = [];
  level = 0;
  started = false;
}
