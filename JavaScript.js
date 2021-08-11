
let playerOneTotal = 0;
let playerTwoTotal = 0;
let current = 0;
let random = 0;
let pointer = 0;

const rollDice = document.querySelector('.rollDice');
const firstSpot = document.querySelector('.first-face');
const secondSpot = document.querySelector('.second-face');
const thirdSpot = document.querySelector('.third-face');
const fourthSpot = document.querySelector('.fourth-face');
const fifthSpot = document.querySelector('.fifth-face');
const sixthSpot = document.querySelector('.sixth-face');
const announcement = document.querySelector('.announcement');
const overlay = document.querySelector('.overlay');
const Hold = document.querySelector('.hold');
const newGame = document.querySelector('.newGame');
const closeModal = document.querySelector('.closeModal');

function randomMaker () {
    random = Math.trunc(Math.random()*6+1);
    return random;
};

function adder (face1,face2,face3,face4,face5) {
    face1.classList.add('hidden');
    face2.classList.add('hidden');
    face3.classList.add('hidden');
    face4.classList.add('hidden');
    face5.classList.add('hidden');
};

function roll () {
    randomMaker();
    if (random == 1) {
        firstSpot.classList.remove('hidden');
        adder (secondSpot, thirdSpot, fourthSpot, fifthSpot, sixthSpot);
    } else if (random == 2) {
        secondSpot.classList.remove('hidden');
        adder (firstSpot, thirdSpot, fourthSpot, fifthSpot, sixthSpot);
    } else if (random == 3) {
        thirdSpot.classList.remove('hidden');
        adder (firstSpot, secondSpot, fourthSpot, fifthSpot, sixthSpot);
    } else if (random == 4) {
        adder (firstSpot, secondSpot, thirdSpot, fifthSpot, sixthSpot);
        fourthSpot.classList.remove('hidden');
    } else if (random == 5) {
        fifthSpot.classList.remove('hidden');
        adder (firstSpot, secondSpot, thirdSpot, fourthSpot, sixthSpot);
    } else if (random == 6) {
        sixthSpot.classList.remove('hidden');
        adder (firstSpot, secondSpot, thirdSpot, fourthSpot, fifthSpot);
    } 
};

function game () {
    if (pointer) {
        current += random;
        console.log('current game: ' + current);
        document.querySelector('.playerTwoCurrent').textContent = current;
        document.querySelector('.firstContainer').style.opacity = 0.5;
        document.querySelector('.secondContainer').style.opacity = 0.8;
    } else {
        current += random;
        console.log('current game: ' + current);
        document.querySelector('.playerOneCurrent').textContent = current; 
        document.querySelector('.firstContainer').style.opacity = 0.8;
        document.querySelector('.secondContainer').style.opacity = 0.5;
    }
};

function playerChanger () {
   if (random == 1) {
       pointer = !pointer
       current = 0;
       random = 0;
       console.log('current playerChanger: ' + current);
       document.querySelector('.playerOneCurrent').textContent = current;
       document.querySelector('.playerTwoCurrent').textContent = current;
   } 
};


function hold () {
    if (pointer) {
        playerTwoTotal += current;
        console.log('current hold: ' + current);
        console.log('playerTwoTotal hold: ' + playerTwoTotal);
        document.querySelector('.playerTwoCurrent').textContent = 0;
        document.querySelector('.playerTwoTotal').textContent = playerTwoTotal;
        document.querySelector('.firstContainer').style.opacity = 0.8;
        document.querySelector('.secondContainer').style.opacity = 0.5;
    }
    else {
        playerOneTotal += current;
        console.log('current hold: ' + current);
        console.log('playerOneTotal hold: ' + playerOneTotal);
        document.querySelector('.playerOneCurrent').textContent = 0;
        document.querySelector('.playerOneTotal').textContent = playerOneTotal;
        document.querySelector('.firstContainer').style.opacity = 0.5;
        document.querySelector('.secondContainer').style.opacity = 0.8;
    }
};

function holdChanger () {
    pointer = !pointer;
    random = 0;
    current = 0;
    console.log(current);
};

function announce () {
    if (playerOneTotal >= 100){
        announcement.classList.remove('hidden');
        overlay.classList.remove('hidden');
        document.querySelector('.winner').textContent = "player 1";
    }   else if (playerTwoTotal >= 100){
        announcement.classList.remove('hidden');
        overlay.classList.remove('hidden');
        document.querySelector('.winner').textContent = "player 2";
    }
};

function NewGame () {
    playerOneTotal = 0;
    playerTwoTotal = 0;
    current = 0;
    random = 0;
    pointer = 0;
    document.querySelector('.playerOneCurrent').textContent = 0;
    document.querySelector('.playerOneTotal').textContent = 0;
    document.querySelector('.playerTwoCurrent').textContent = 0;
    document.querySelector('.playerTwoTotal').textContent = 0;
    document.querySelector('.firstContainer').style.opacity = 0.8;
    document.querySelector('.secondContainer').style.opacity = 0.5;
};


rollDice.addEventListener('click', roll);
rollDice.addEventListener('click', playerChanger);
rollDice.addEventListener('click', game);
Hold.addEventListener('click', hold);
Hold.addEventListener('click', holdChanger);
Hold.addEventListener('click', announce);
newGame.addEventListener('click', NewGame);
overlay.addEventListener('click', function() {
    announcement.classList.add('hidden');
    overlay.classList.add('hidden');
    NewGame ();
});
closeModal.addEventListener('click', function() {
    announcement.classList.add('hidden');
    overlay.classList.add('hidden');
    NewGame ();
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !announcement.classList.contains('hidden')) {
        announcement.classList.add('hidden');
        overlay.classList.add('hidden');
    } 
    NewGame ();
});

