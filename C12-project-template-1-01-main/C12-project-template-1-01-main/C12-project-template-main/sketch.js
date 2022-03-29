var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var boy_running
function preload(){
  //loadImage (carregarImagem) da pista)
  var path = loadImage("path.png")
  //loadAnimation (carregarAnimação) de corrida para o menino
 var boy_running = loadAnimation("Jake1.png,Jake2.png,jake3.png,jake4.png,jake5.png")
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
  var path = createSprite(200,200,350,100)
//adicione uma imagem para a pista
var path = loadImage("path.png")
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.velocityX = -2
console.log(path.x)
path.scale=1.2;

//crie um sprite de menino
var boy = createSprite(200,200,50,50)
//adicione uma animação de corrida para ele
var boy_running = loadAnimation("Jake1.png,Jake2.png,jake3.png,jake4.png,jake5.png")
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary. visible = false

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary. visible = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  
  edges= createEdgeSprites();

  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(rightBoundary,leftBoundary)
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
