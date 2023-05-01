let angle = 0;
let ma;
let MaxD;
let w = 64;
function setup() {
createCanvas(900,900,WEBGL);
ma = atan(1 / sqrt(2));
MaxD = dist(0,0,230,230)
let timerms = floor(random(12000))
setTimeout(cookie,timerms)
// noCursor();
}
function mousePressed() {
noLoop();
}
function doubleClicked(){
loop();
}
function cookie(){
noLoop();
// save("MexicoED.png")
}
function draw() {
if (keyIsPressed === true) {
save("Bordeaux.png");
} else {
void(0);
}
background(150);
ortho(-130, 130, -130, 130, 0, 850);
rotateX(-QUARTER_PI);
rotateY(ma+10);
frameRate(24);
let al = 2;
let offset = 10;
for (let z = 0; z < height; z += w) {
for (let x = 0; x < width; x += w) {
//BOX1 DEF
push();
let d = dist(x,z,width/al,height/2);
let offset = map(d,0,MaxD,-4,4);
let a = angle + offset + 1;
let h = map(sin(a), -2, 2, 250, 500);
let hch = map(sin(a), -2, 2, 250, 500);
fill(248,248,212);
translate(x - width / 2, 0, z - height / 2);
box(w -2, h, w-2);
pop();
//BOX2
push();
translate(x - width / PI + 2, 6, z - height / 1.7 - 10);
fill(255,87,52);
box(w-12, h+3, w-7);
stroke(2,2,2);
strokeWeight(2)
pop();
//BOX3
push();
translate(5+ x - width / 4 , -10, z - height / 8);
fill(137,149,62); 
box(w-9, h-2, w-9);
stroke(2,2,2);
strokeWeight(2)
pop();
}
offset += 0.15;
}
angle += 0.1;
}