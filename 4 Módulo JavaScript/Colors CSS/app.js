/*COMEÇO*/
const hexa = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 'A' , 'B' , 'C' , 'D' , 'F' ]
const btn = document.getElementById('btn')
const color = document.querySelector('.span-color')
const mainColor = document.querySelector('#main-color')

btn.addEventListener('click', function(){
  let fileName = location.href.split("/").slice(-1); //Pega o nome do arquivo HTML atual
  let colorBackground = ''  //Variável para guardar a cor de fundo
  let colorText = ''  //Variável para guardar o texto da cor de fundo
  if (fileName == "index.html") {
    //Se o arquivo padrão é 'index.html', ele irá mostrar as cores em RGB
    let red1 = Math.floor(Math.random() * 255) + 1 //Faixa de cor = (0 <= cor <=255)
    let green2 = Math.floor(Math.random() * 255) + 1 //Faixa de cor = (0 <= cor <=255) 
    let blue3 = Math.floor(Math.random() * 255) + 1 //Faixa de cor = (0 <= cor <=255) 
    let RGBa ="rgba(" + red1 + ", " + green2 + ", " + blue3 + ")"  //Estrutura = rgba(red1, green2, blue3)
    colorBackground = RGBa
    colorText = RGBa
  }else{
    //Se o arquivo padrão é 'hexa.html', ele irá mostrar as cores em hexadecimal
    let hexColor = "#"
    for(let i = 0; i < 6; i++){
      hexColor += hexa[Math.floor(Math.random() * hexa.length) + 1] 
    }
    colorBackground = hexColor
    colorText = hexColor
  }
    //Atribuição final para o fundo e o texto
    mainColor.style.backgroundColor = colorBackground
    color.textContent = colorText
})
/*FIM*/
