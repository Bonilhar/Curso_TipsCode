/*Ideia:
Este código tem como premissa a inclusão de mais jogadores, 
sendo assim, seria preciso incluir no HTML mais divs de jogadores*/
let randomNumber = 0
let randomImageSource = ""
let players = [0,0,0,0] /*Para mais jogadres inclua no HTML e array*/
let maiorNumero = [0,0] /*Núm do player , Valor*/
let houveEmpate = 0

for(let i = 0; i < players.length; i++){
  randomNumber = Math.floor(Math.random() * 6) + 1
  players[i] = randomNumber
  randomImageSource = './images/dice' + randomNumber + '.png'
  document.querySelectorAll('img')[i].setAttribute('src', randomImageSource)
  /*Atribui o número do player e o maior valor randomizado*/
  if (randomNumber > maiorNumero[1]) {
    /*posição do jogador no array*/
    maiorNumero[0] = i
    /*Maior Valor tirado pelo jogador*/
    maiorNumero[1] = randomNumber
  }
}
/* players.length = Total de jogadores*/
/* numPlayer = posição do jogador no array*/
for(let numPlayer = 0; numPlayer < players.length; numPlayer++){
  if (numPlayer != maiorNumero[0]){
   if(players[numPlayer] == maiorNumero[1]){
    houveEmpate = 1
   }
  }
}
/*Se houve algum empate no maior valor ninguém ganhou, se não
mostra o verdadeiro ganhador*/
if (houveEmpate == 1) {
  document.querySelector("h3").innerHTML = "Deu empate"
} else{
  document.querySelector("h3").innerHTML = "🏆 O Jogador " +(maiorNumero[0] + 1 ) + " ganhou!"
}