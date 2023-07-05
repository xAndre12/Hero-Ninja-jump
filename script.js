let character = document.querySelector(".characterRun");
let terrain = document.querySelector(".terrain");
let terrain2 = document.querySelector(".terrain2");
let zombie = document.querySelector(".Zombie");

let hasJump = false;
terrain.style.left = 0;
terrain2.style.left = "1920px";
character.style.bottom = "170px";
zombie.style.left = "1940px";

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

const zombieRun = [
  "/img/zombie/walk/Walk1.png",
  "/img/zombie/walk/Walk2.png",
  "/img/zombie/walk/Walk3.png",
  "/img/zombie/walk/Walk4.png",
  "/img/zombie/walk/Walk5.png",
  "/img/zombie/walk/Walk6.png",
  "/img/zombie/walk/Walk7.png",
  "/img/zombie/walk/Walk8.png",
  "/img/zombie/walk/Walk9.png",
  "/img/zombie/walk/Walk10.png",
];

setInterval(() => {
  if (!hasJump) {
    for (let index = 0; index < run.length; index++) {
      setTimeout(() => {
        character.src = run[index];
      }, 30 * index);
    }
  }else{
    for (let index = 0; index < jump.length; index++) {
      setTimeout(() => {
        character.src = jump[index];
      }, 10 * index);
    }
  }
  for (let index = 0; index < zombieRun.length; index++) {
    setTimeout(() => {
      zombie.src = zombieRun[index];
    }, 30 * index);
  }
}, 300);

setInterval(() => {
  if(parseInt(zombie.style.left) < -5){

    zombie.style.left = "1940px"; 
  }

  for (let index = 0; index < 1940; index++) {
    setTimeout(() =>{
      zombie.style.left = parseInt(zombie.style.left)- 1 + "px";
    },40 * index);
  }
}, 300);

const groundMove = () => {
  for (let index = 0; index < window.innerWidth * 2; index++) {
    setTimeout(()=>{
      terrain.style.left = parseInt(terrain.style.left) - 1 + "px";
      if(parseInt(terrain.style.left) === -1920){
        terrain.style.left = "1920px";
        groundMove()
      }
    }, 4 * index)
}}

  for (let index = 0; index < window.innerWidth; index++) {
 
    setTimeout(()=>{
      terrain.style.left = parseInt(terrain.style.left) - 1 + "px";
      if(parseInt(terrain.style.left) === -1920){
        terrain.style.left = "1920px";
        groundMove()
      }
    }, 4 * index)
  }

const groundMove2 = () => {
  for (let index = 0; index < window.innerWidth * 2; index++) {
    setTimeout(()=>{
      terrain2.style.left = parseInt(terrain2.style.left) - 1 + "px";
      if(parseInt(terrain2.style.left) === -1920){
        terrain2.style.left = "1920px";
        groundMove2()
      }
    }, 4 * index)
}}

  for (let index = 0; index < window.innerWidth * 2 ; index++) {
 
    setTimeout(()=>{
      terrain2.style.left = parseInt(terrain2.style.left) - 1 + "px";
      if(parseInt(terrain2.style.left) === -1920){
        terrain2.style.left = "1920px";
        groundMove2()
      }
    }, 4 * index)
  }




window.addEventListener("keypress", (event) => {
  if (event.key === " " &&  parseInt(character.style.bottom) === 170) {
    hasJump = true;
     
    setTimeout(() => {
        hasJump = false;
    }, 250);

    for (let index = 0; index < 300; index++) {
      setTimeout(() => {
        character.style.bottom =  parseInt(character.style.bottom) + 1 + "px";
      }, 1 * index);
    }

    setTimeout(() => {
      for (let index = 0; index < 300; index++) {
        setTimeout(() => {
          character.style.bottom =  parseInt(character.style.bottom) - 1 + "px";
        }, 1 * index);
      }
    }, 240);
  }
});

tema: nor in spatele pamantului (sa fie mare)