class Hangman {
  constructor(words) {
    this.words = words;
    this.letters = [];
    this.indices = [];
    this.secretWord = null;
    this.errorsLeft = 10;
  }

  pickWord() {
    this.secretWord = this.words[Math.floor(Math.random()*this.words.length)];
    return this.secretWord; 
  }

  checkIfLetter(keyCode) {
    if (keyCode) {
    if((keyCode.indexOf('Digit') !== -1) || (keyCode.indexOf('Key') == -1)){
      return false;
    }else{
      return true;
    }
  }}

  checkClickedLetters(letter) {
    if((!this.secretWord.includes(letter.key))){
      this.letters.push(letter.key);
    }
    return this.letters;
  }

  addCorrectLetter(letter) {
    for(var i=0; i<this.secretWord.length;i++){
      if((this.secretWord[i] === letter) && (!this.indices.includes(i))){
        this.indices.push(i);
      }
    }
    if(!this.secretWord.includes(letter)){
      return 'not include'; 
    } else {
      return this.indices;
    }
  }

  addWrongLetter(letter) {
    if(!this.secretWord.includes(letter)){
      this.errorsLeft = this.errorsLeft - 1
      this.checkGameOver()
    }
    return this.errorsLeft;
  }

  checkGameOver() {
    if (this.errorsLeft > 0){
      return false;
    } else{
      return true;
    }
  }

  checkWinner() {
    if(this.indices.length == this.secretWord.length){
      return true;
    } else {
      return false;
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  hangmanCanvas = new HangmanCanvas('test');
  for(let i=0;i<=10;i++){
    hangmanCanvas.DrawPart(i)
  }
  startGameButton.addEventListener('click', event => {
    if(startGameButton.innerHTML == "Play again"){
      startGameButton.innerHTML = 'START';
    }
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    
  });
}
document.addEventListener('keydown', event => {
  if(hangman.checkIfLetter(event.code)){
    this.letters = hangman.checkClickedLetters(event);
    this.indices = hangman.addCorrectLetter(event.key);
    this.errorsLeft = hangman.addWrongLetter(event.key)
    if(this.indices == 'not include'){
      hangmanCanvas.writeWrongLetter(this.letters, this.errorsLeft)
      if(hangman.checkGameOver()==true){
        if(hangmanCanvas.gameOver() == 'play again'){
          startGameButton.innerHTML = "Play again"
        }
      }
    } else{
      hangmanCanvas.writeCorrectLetter(this.indices);
      if(hangman.checkWinner(this.indices) == true){
        if(hangmanCanvas.winner() == 'play again'){
          startGameButton.innerHTML = "Play again"
          startGameButton.class = 'play'
        }
      }
    }
    }
  }
);
