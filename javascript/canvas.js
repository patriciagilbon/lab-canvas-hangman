class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.canvas = document.getElementById("hangman");
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.beginPath();
    this.context.fillStyle = "rgba(255,255,255)";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);    
    this.context.restore();
    this.drawLines()
  }

  drawLines() {
    let extension = 0;
    for(let i=0; i<this.secretWord.length; i++){
      this.context.beginPath();
      this.context.strokeStyle = '#444';
      this.context.lineWidth = 2; 
      this.context.moveTo(30 + extension, 330);
      this.context.lineTo(50 + extension, 330);
      this.context.stroke();
      extension = extension + 50;
    }
    this.context.closePath();
  }

  writeCorrectLetter(indices) {
    let extension = 0;
    this.context.font = "20px Comic Sans MS";
    this.context.fillStyle = "black";
    this.context.textAlign = "center";
    for(let j=0; j<this.secretWord.length; j++){
      for(let i=0; i<indices.length; i++){
        if(indices[i] == j)
        this.context.fillText(this.secretWord[j], 40 + extension, 310);
      }
      extension = extension + 50;
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    let extension = 0;
    this.context.font = "20px Comic Sans MS";
    this.context.fillStyle = "rgba(255,99,71)";
    this.context.textAlign = "center";
    for(let j=0; j<letter.length; j++){
      this.context.fillText(letter[j], 50 + extension, 550);
      extension = extension + 50;
    }
    this.context.fillStyle = "rgba(255,255,255)"; 
    this.context.fillRect(25, 475, 230, 30);   
    this.context.fillStyle = "rgba(255,99,71)"; 
    this.context.fillText(errorsLeft + ' errors left', 100, 500);
    this.DrawPart(errorsLeft);
  }
  
  DrawPart(errorsLeft){
    switch(errorsLeft) {
      case 9:
        this.context.strokeStyle = '#444';
         this.context.lineWidth = 5; 
         this.context.beginPath();
         this.context.moveTo(175, 225);
         this.context.lineTo(5, 225);
         this.context.moveTo(40, 225);
         this.context.lineTo(25, 5);
         this.context.lineTo(100, 5);
         this.context.lineTo(100, 25);
         this.context.stroke();
        break;
      case 8:
        this.context.lineWidth = 5;
        this.context.strokeStyle = '#444';
        this.context.beginPath();
        this.context.arc(100, 50, 25, 0, Math.PI*2, true);
        this.context.closePath();
        this.context.stroke();
        break;
      case 7:
        this.context.lineWidth = 5; 
        this.context.strokeStyle = '#444';
        this.context.beginPath();
        this.context.moveTo(100, 75);
        this.context.lineTo(100, 140);
        this.context.stroke();
      break;
        case 6:
          this.context.lineWidth = 5; 
          this.context.strokeStyle = '#444';
          this.context.beginPath();
          this.context.moveTo(100, 85);
          this.context.lineTo(60, 100);
          this.context.stroke();
           break;
         case 5:
          this.context.lineWidth = 5; 
          this.context.strokeStyle = '#444';
          this.context.beginPath();
          this.context.moveTo(100, 85);
          this.context.lineTo(140, 100);
          this.context.stroke();
           break;
         case 4:
          this.context.lineWidth = 5; 
          this.context.strokeStyle = '#444';
          this.context.beginPath();
          this.context.moveTo(100, 140);
          this.context.lineTo(80, 190);
          this.context.stroke();
           break;
         case 3:
          this.context.lineWidth = 5; 
          this.context.strokeStyle = '#444';
          this.context.beginPath();
          this.context.moveTo(82, 190);
          this.context.lineTo(70, 185);
          this.context.stroke();
         break;
         case 2:
          this.context.lineWidth = 5; 
          this.context.strokeStyle = '#444';
          this.context.beginPath();
          this.context.moveTo(100, 140);
          this.context.lineTo(125, 190);
          this.context.stroke();
         break;
         case 1:
          this.context.lineWidth = 5; 
          this.context.strokeStyle = '#444';
          this.context.beginPath();
          this.context.moveTo(122, 190);
          this.context.lineTo(135, 185);
          this.context.stroke();
         break;
    }
  }

  gameOver() {
    this.context.beginPath();
    this.context.fillStyle = "rgba(255,255,255)";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);    
    this.context.restore();
    this.context.fillStyle = "black"; 
    this.context.font = "20px Comic Sans MS";
    this.context.fillStyle = "rgb(221, 71, 71)";
    this.context.fillText('Game Over! The word was: ' + this.secretWord, 250, 350);
    return 'play again'
  }

  winner() {
    this.context.beginPath();
    this.context.fillStyle = "rgba(255,255,255)";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);    
    this.context.restore();
    this.context.fillStyle = "black"; 
    this.context.font = "20px Comic Sans MS";
    this.context.fillStyle = "rgb(144, 238, 144)";
    this.context.fillText('You win! The word was: ' + this.secretWord, 250, 350);
    return 'play again'
  }
}
