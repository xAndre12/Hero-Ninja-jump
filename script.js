let character = document.querySelector(".characterRun");

let hasJump = false;
const run = [
  "/img/ninja/run/Run__000.png",
  "/img/ninja/run/Run__001.png",
  "/img/ninja/run/Run__002.png",
  "/img/ninja/run/Run__003.png",
  "/img/ninja/run/Run__004.png",
  "/img/ninja/run/Run__005.png",
  "/img/ninja/run/Run__006.png",
  "/img/ninja/run/Run__007.png",
  "/img/ninja/run/Run__008.png",
  "/img/ninja/run/Run__009.png",
];

const jump = [
  "/img/ninja/jump/Jump__000.png",
  "/img/ninja/jump/Jump__001.png",
  "/img/ninja/jump/Jump__002.png",
  "/img/ninja/jump/Jump__003.png",
  "/img/ninja/jump/Jump__004.png",
  "/img/ninja/jump/Jump__005.png",
  "/img/ninja/jump/Jump__006.png",
  "/img/ninja/jump/Jump__007.png",
  "/img/ninja/jump/Jump__008.png",
  "/img/ninja/jump/Jump__009.png",
];

setInterval(() => {
  if (!hasJump) {
    for (let index = 0; index < run.length; index++) {
      setTimeout(() => {
        character.src = run[index];
      }, 30 * index);
    }
  }
}, 300);

window.addEventListener("keypress", (event) => {
  if (event.key === " ") {
    hasJump = true;
    setTimeout(()=>{
        for (let index = 0; index < jump.length; index++) {
            setTimeout(() => {
              character.src = jump[index];
            }, 20 * index);
          }
    }, 250)
    setTimeout(() => {
        hasJump = false;
    }, 700);
  }
});
