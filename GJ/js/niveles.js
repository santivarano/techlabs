var fondo;
var button;
var footer;
var manos;
var dientes;
var levels;
var star;

var niveles = {
  preload: function()
  {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.setScreenSize(true);
    //Aqui se cargan los recursos que van a ser usados en el juego
  	game.load.image('fondo', 'img/background.jpg');
  	//game.load.image('texto_bienvenido', 'img/bienvenido1.png');
  	//game.load.spritesheet('botones_inicio', 'img/botones_inicio.png', 550, 350, 3);
  	game.load.image('dientes', 'img/dientesN.png');
  	game.load.image('manos', 'img/manosN.png');
  	//game.load.image('levels', 'img/levels.png');
  	//game.load.image('star', 'img/starButton.png');
  	//game.load.image('nino', 'img/img_nino.png');
  },
  create: function()
  {
    fondo = game.add.image(0,0,'fondo');
    fondo.width = screen.width;
    fondo.height =  screen.height;
    var style = { font: "30px Arial", fill: "#003AFE", align: "center" };
      manos = game.add.image(game.world.centerX-600,300, 'manos');
      game.add.text(game.world.centerX-600, 300, 'Lavarse las manos', style);
      manos.width = 330;
      manos.height = 330;

      dientes = game.add.image( 500,  300, 'dientes');
      game.add.text(500, 300, 'Lavarse los dientes', style);
      dientes.width = 330;
      dientes.height = 330;
    
      dientes.inputEnabled = true;
      manos.inputEnabled = true;

      dientes.events.onInputDown.add(this.Dientes, this);
      manos.events.onInputDown.add(this.Manos, this);
  },
    Dientes: function()
  {
    game.state.add('nivelManos', nivel_lavar_manos);
    game.state.start('nivelManos');
  },
    Manos: function()
  {
    console.log('dientes');
    game.state.add('dientes', nivel_lavar_dientes);
    game.state.start('dientes');
  },
}