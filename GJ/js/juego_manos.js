
//Nivel de lavados de Manos


var fondo;
var derecha;
var izquierda;
var button1;
var button2;
var imagen0;
var imagen1;
var imagen2;
var imagen3;
var imagen4;
var imagen5;
var imagen6;
var group;
var con=0;
var text=0;
var timer=0;
var emitter;
var n=0;
var cn="";
//Creo estructura de dato que me permitira guardar las posiciones ya llenadas
//Primero las creo vacias
var posiciones = [];
var ran=0;
var anterior=0;
var cont=0;
var existe=false;
var aa=[];
var juego_manos = {
  preload: function()
  {
    console.log('clase nueva');
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  	game.scale.pageAlignHorizontally = true;
  	game.scale.pageAlignVertically = true;
  	game.scale.setScreenSize(true);
  	game.load.image('fondo','img/fondo.jpg');

  	game.load.image('imagen0','img/dientes/1.png');
  	game.load.image('imagen1','img/dientes/2.png');
  	game.load.image('imagen2','img/dientes/3.png');
  	game.load.image('imagen3','img/dientes/4.png');
  	game.load.image('imagen4','img/dientes/5.png');
  	game.load.image('imagen5','img/dientes/6.png');
  	game.load.image('imagen6','img/dientes/7.png');
  	game.load.image('imagen7','img/dientes/8.png');

  	//cargar la imagen
  	group=game.add.group();
  	group.enableBody = true;
  },

  create: function()
  {
    fondo=game.add.sprite(0,0,'fondo');
  	fondo.width = screen.width;
  	fondo.height =  screen.height;
    //console.log("random "+Math.floor(Math.random()*3));
    //  console.log("random "+Math.floor(Math.random() * 7));
    aa=this.getRandomArray(0, 7);
    for (var i = 0; i < aa.length; i++) {

      this.fillImages(aa[i]);

      //console.log(aa[i]);
    }
  //  alert(this.getRandomArray(0, 7));
  },
  getRandomArray: function(min,max){
     A= [];
    while(max>= min) A.push(max--)
    A.sort(function(){return .5- Math.random()});
    return A;
  },

    fillImages: function(i)
  {
      //alert(i);
      cn="imagen"+i;
      console.log("tamaño" +cn.trim().length);
      console.log("imagen"+i);
      console.log(cn);
      switch (i) {
        case 0:
        console.log('entro0');
          imagen0= game.add.image(game.world.centerX - 600, game.world.centerY - 300, cn);
          imagen0.inputEnabled = true;
          imagen0.input.enableDrag();
          imagen0.width = 200;
          imagen0.height = 280;
          //game.add.tween(temp_imagen0).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
          break;
        case 1:
        console.log('entro1');
          imagen1 = game.add.image(game.world.centerX - 300, game.world.centerY - 300, cn);
          imagen1.inputEnabled = true;
          imagen1.input.enableDrag();
          imagen1.width = 200;
          imagen1.height = 280;
          break;
        case 2:
        console.log('entro2');
          imagen2= game.add.image(game.world.centerX, game.world.centerY - 300, cn);
          imagen2.inputEnabled = true;
          imagen2.input.enableDrag();
          imagen2.width = 200;
          imagen2.height = 280;
          break;
        case 3:
        console.log('entro3');
          imagen3= game.add.image(game.world.centerX + 300, game.world.centerY - 300, cn);
          imagen3.inputEnabled = true;
          imagen3.input.enableDrag();
          imagen3.width = 200;
          imagen3.height = 280;
          break;
        case 4:
        console.log('entro4');
          imagen4= game.add.image(game.world.centerX - 600, game.world.centerY,  cn);
          imagen4.inputEnabled = true;
          imagen4.input.enableDrag();
          imagen4.width = 200;
          imagen4.height = 280;
          break;
        case 5:
        console.log('entro5');
          imagen5= game.add.image(game.world.centerX - 300, game.world.centerY,  cn);
          imagen5.inputEnabled = true;
          imagen5.input.enableDrag();
          imagen5.width = 200;
          imagen5.height = 280;
          break;
        case 6:
        console.log('entro6');
          imagen6= game.add.image(game.world.centerX, game.world.centerY,  cn);
          imagen6.inputEnabled = true;
          imagen6.input.enableDrag();
          imagen6.width = 200;
          imagen6.height = 280;
          break;
        case 7:
        console.log('entro7');
          imagen7= game.add.image(game.world.centerX + 300, game.world.centerY,  cn);
          imagen7.inputEnabled = true;
          imagen7.input.enableDrag();
          imagen7.width = 200;
          imagen7.height = 280;
          break;
        default:

    }
  },

  /*checkOverlap: function(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

  },

  function onDragStart(sprite, pointer) {

    result = "Dragging " + sprite.key;

  },*/



  update: function()
  {

  }

};
