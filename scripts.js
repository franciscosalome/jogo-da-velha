var lastmove = ''
var moving = ''
var actualSquareId = ''
var score = {playerX:0, playerO:0}
//Definição dos movimentos:
  var cols = document.querySelectorAll('#piece-box #piece-x, #piece-o');
  [].forEach.call(cols, function(col) {
    col.addEventListener('dragend', handleDragEnd, false);
    col.addEventListener('dragstart', handleDragStart,false);
  });

  function handleDragStart(e){
    moving = this.innerHTML
    this.style.cursor = 'grabbing'
  }

  function handleDragEnd(e){
    var placeSquare = document.getElementById(actualSquareId).innerHTML
      if(!placeSquare && lastmove !=moving){
        document.getElementById(actualSquareId).innerHTML = moving
        lastmove = moving
        actualSquareId = ''
        document.getElementById('piece-x').style.opacity ='1'
        document.getElementById('piece-o').style.opacity ='1'
        this.style.opacity = '0.3'
        verifyIndividually(moving)
      }
  }

  function handleDragLeave(e){
      this.style.backgroundColor  = 'antiquewhite'
      this.style.cursor = 'grabbing'
  }
  function handleDragEnter(e){
      actualSquareId = this.id
      if(!this.innerHTML && lastmove !=moving){
        //caso seja permitido colar
        this.style.backgroundColor  = 'greenyellow'
        
    }else{
        this.style.backgroundColor  = 'tomato'
    }
  }
  var square = document.querySelectorAll('#container .square');
  [].forEach.call(square, function(square){
    square.addEventListener('dragenter',handleDragEnter,false)
    square.addEventListener('dragleave',handleDragLeave,false)
  })

//Definição do vencedor:

function verifyIndividually(player){
    var sq = document.getElementsByClassName('square')
    
    var try1 = (sq[0].innerHTML==sq[1].innerHTML&&sq[1].innerHTML==sq[2].innerHTML)&&(!!sq[0].innerHTML && !!sq[1].innerHTML&&!!sq[2].innerHTML)
    var try2 = (sq[3].innerHTML==sq[4].innerHTML&&sq[4].innerHTML==sq[5].innerHTML)&&(!!sq[3].innerHTML && !!sq[4].innerHTML&&!!sq[5].innerHTML)
    var try3 = (sq[6].innerHTML==sq[7].innerHTML&&sq[7].innerHTML==sq[8].innerHTML)&&(!!sq[6].innerHTML && !!sq[7].innerHTML&&!!sq[8].innerHTML)
    var try4 = (sq[0].innerHTML==sq[3].innerHTML&&sq[3].innerHTML==sq[6].innerHTML)&&(!!sq[0].innerHTML && !!sq[3].innerHTML&&!!sq[6].innerHTML)
    var try5 = (sq[1].innerHTML==sq[4].innerHTML&&sq[4].innerHTML==sq[7].innerHTML)&&(!!sq[1].innerHTML && !!sq[4].innerHTML&&!!sq[7].innerHTML)
    var try6 = (sq[2].innerHTML==sq[5].innerHTML&&sq[5].innerHTML==sq[8].innerHTML)&&(!!sq[2].innerHTML && !!sq[5].innerHTML&&!!sq[8].innerHTML)
    var try7 = (sq[0].innerHTML==sq[4].innerHTML&&sq[4].innerHTML==sq[8].innerHTML)&&(!!sq[0].innerHTML && !!sq[4].innerHTML&&!!sq[8].innerHTML)
    var try8 = (sq[2].innerHTML==sq[4].innerHTML&&sq[4].innerHTML==sq[6].innerHTML)&&(!!sq[2].innerHTML && !!sq[4].innerHTML&&!!sq[6].innerHTML)
    if(try1 || try2 || try3 || try4 || try5 || try6 || try7 || try8){
        alert(`${player} venceu esta rodada!!`)
        if(player=='X'){
            score.playerX ++
            document.getElementById('score-x').innerHTML = score.playerX
            
        }else if(player=='O'){
            score.playerO ++
            document.getElementById('score-o').innerHTML = score.playerO
        }
        
        setTimeout(() => {
            for(var i = 0; i<sq.length;i++){
                sq[i].innerHTML = ''
            }
        }, 1000);
    }
}


