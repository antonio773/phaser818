var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    input:{
    activePointers:3,
    },
    physics:{
        default: 'arcade',
        arcade:{
            gravity:{y:100},
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
}
}

var game=new Phaser.Game(config);
var width=window.innerWidth;
var height=window.innerHeight;
var player;
var player_left;
var player_right;
var andar;
var andarL;

function preload(){
this.load.image("player", "Img/player.png");
this.load.image("ground", "Img/ground.png");
this.load.image("coin", "Img/coin.png");
this.load.image("larva","Img/larva.png");
this.load.image("btn", "Img/btn1.png");
this.load.image("girar_btn", "Img/girar_btn.png");
}

function create(){
this.input.addPointer(10)
var ground=this.physics.add.staticGroup();
ground.create(0,300, "ground").setOrigin(0,0).setScale(4,1).refreshBody();
ground.create(128, 300, "ground").setOrigin(0,0).setScale(4,1).refreshBody();
ground.create(256,300, "ground").setOrigin(0,0).setScale(4,1).refreshBody();
ground.create(384, 300, "ground").setOrigin(0,0).setScale(4,1).refreshBody();
ground.create(512, 300,"ground").setOrigin(0,0).setScale(4,1).refreshBody();

player=this.physics.add.image(width/2-32,0,"player").setOrigin(0,0);
player.setScale(1, 2);
player.setGravityY(300);
player.setBounce(1,0.1);
this.physics.add.collider(player, ground);

//botões em baixo
andar=false;
btn_right=this.add.image(0,0,"btn").setOrigin(0,0).setScale(1.5);
btn_right.x=width/2-225;
btn_right.y=height/2+75;
btn_right.setInteractive();
btn_right.on("pointerdown", function btn_right_click(){
andar=true;
}, this);
btn_right.on("pointerup", function btn_right_up(){
andar=false;
}, this);
/*this.time.addEvent({delay: 100, loop: true, callback: timeIf, callbackScope:this});
function timeIf(){
if(andar==true){
player.setVelocityX(60);
}else{
player.setVelocityX(0);
}*/

andarL=false;
btn_left=this.add.image(0,0,"btn").setOrigin(0,0).setScale(1.5);
btn_left.x=width/2-353;
btn_left.y=height/2+75;
btn_left.flipX=true;
btn_left.setInteractive();
btn_left.on("pointerdown", function btn_left_click(){
andarL=true;
}, this);
btn_left.on("pointerup", function btn_left_up(){
andarL=false;
}, this);
/*this.time.addEvent({delay: 100, loop: true, callback: timeIfL, callbackScope:this});
function timeIfL(){
if(andarL==true){
player.setVelocityX(-60);
}else{
player.setVelocityX(0);
}
}*/
}

function update(){
if(andar==true){
player.setVelocityX(60);
}else{
player.setVelocityX(0);
}

if(andarL==true){
player.setVelocityX(-60);
}else{
player.setVelocityX(0);
}
}