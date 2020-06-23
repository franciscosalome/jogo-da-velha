
//Variáveis de personalização
var playersNames = {playerX:'Jogador X',playerO:'Jogador O'}
var tableColor = 'antiquewhite'
var gripColor = 'grey'
var squareSize = '100px'
var pieceSize = '80px'

if(!!localStorage.getItem('playerXname')){
    document.getElementById('player-x-name').innerHTML = localStorage.getItem('playerXname')  + ':'
    document.getElementById('player-o-name').innerHTML = localStorage.getItem('playerOname') + ':'
}else{
    localStorage.setItem('playerXname','Jogador X')
    localStorage.setItem('playerOname','Jogador O')
}
var form = document.getElementById('form')
var config = document.getElementById('configs')

config.addEventListener('click',function(e){
    console.log()
    if(e.path[0].id=='preferences'){//verifica se o click foi feito justamente em cima da div preferences
        if(this.children[1].style.display == 'block'){
            this.children[1].style.display = 'none'
        }else{
            this.children[1].style.display = 'block'
        }
    }
})

form.addEventListener('submit',function(e){
    localStorage.clear
    playersNames.playerX = document.getElementById('nameX').value
    playersNames.playerO = document.getElementById('nameO').value
    localStorage.setItem('playerXname',playersNames.playerX)
    localStorage.setItem('playerOname',playersNames.playerO)
    document.getElementById('player-x-name').innerHTML = playersNames.playerX + ':'
    document.getElementById('player-o-name').innerHTML = playersNames.playerO + ':'
    document.getElementById('divform').style.display = 'none'
    e.preventDefault()
})

function handleSaveConfigs(){
    
}