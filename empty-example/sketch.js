// var song;
// var img;
var effect=[];
//+
var x;
var cres, r, g, b,rSlider;
var pres=0;

// var pumpkin =[];
// var veggie=[];

function preload(){
	// song = loadSound('assets/bgm.mov');
	// effect[0]=loadSound('assets/bite.wav');
    effect[0]=loadSound('songs/awholenewworld.mp3');
    effect[1]=loadSound('songs/beourguest.mp3');
    effect[2]=loadSound('songs/circleoflife.mp3');
     effect[3]=loadSound('songs/doyouwanttobuildasnowman.mp3');

	// img = loadImage("assets/illustration.jpg")
  // veggie[0] =loadImage('assets/fan1.gif');
  // veggie[1]=loadImage('assets/bean.png');
  //   veggie[2]=loadImage('assets/asp.png');
  //     veggie[3]=loadImage('assets/avo.png');

}

function setup(){
  // createCanvas(1210,603);
createCanvas(windowWidth, windowHeight);
 textSize(20);
   rSlider = createSlider(0, 255, 0);
  rSlider.position(480, 540);

}
function keyTyped(){
  console.log(key);
  if(key=="a"){
  effect[0].loop();
  $("#gif").css({"background": "url('images/a.gif') no-repeat center center fixed", "background-size": "cover"}); 
    console.log("playing a");


  } 
  if(key !=='a'){
    effect[0].stop();
    console.log("stop a");
  }
  if(key =="b"){
    effect[1].loop;
    $("#gif").css({"background": "url('images/b.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing B");
  }
  if(key !=='b'){
    effect[1].stop();
  }

  if(key === 'c') {
        effect[2].loop();
        $("#gif").css({"background": "url('images/c.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing C");
    }
  
    if( key !== 'c') {
        effect[2].stop();
        console.log("stop C");
    }
    
    if(key === 'd') {
        effect[3].loop();
        $("#gif").css({"background": "url('images/d.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing D");
    }
    
    if( key !== 'd') {
        effect[3].stop();
        console.log("stop d");
    }
  
}

function draw(){
  cres = rSlider.value();
  text("x="+x, 10, 30);
  text(cres, rSlider.x * 2 + rSlider.width, 35);

  noStroke();
  fill(50);
  ellipse(x/4, x/4, 20, 20);
}

// function mousePressed(){
// 	var r =floor(random(0,veggie.length));
//   var p =new Pumpkin(mouseX, mouseY,veggie[r]);
//   pumpkin.push(p);
// if(pumpkin.push(p)){

// var e =floor(random(0,effect.length));
// effect[e].play();
// }
// else{
// 	effect[e].stop();
// }


// }

// function draw(){
// background(img);
//   for(var i=pumpkin.length -1; i>=0; i--){
    
//     pumpkin[i].update();
//     pumpkin[i].display();

//   }

// }