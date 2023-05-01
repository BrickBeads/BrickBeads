let angle = 0;
let w = 25;
let ma;
let MaxD;
function setup() {
createCanvas(900, 900, WEBGL);
ma = atan(1 / sqrt(2));
MaxD = dist(0,50,220,220)
}
function mousePressed() {
// save("Bordeaux.png")
noLoop()
}
function doubleClicked(){
loop();
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
rotateY(ma);
frameRate(30)
// smooth()
let al = 2;
let offset = 10;
for (let z = 0; z < height; z += w) {
for (let x = 0; x < width; x += w) {
push();
let d = dist(x,z,width/al,height/2);
let offset = map(d,0,MaxD,-2,2)
let a = angle + offset + 1;
let h = map(sin(a), -1, 1, 250, 500);
let hch = map(sin(a), -1, 1, 250, 500);
let l = random(255)
let q = random(255)
let k = random(255)
let m = 255; let n = 255; let j = 255;
fill(248,247,206);
translate(x - width / 2, 0, z - height / 5);
box(w - 2, h, w - 2);
pop()
push()
translate(x - width /PI - 5,7,4+z - height /PI*2 - 2);
fill(78,81,128)
box(w/3, h+12, w/PI);
stroke(2,2,2);
strokeWeight(2)
pop();
push()
  let em = Math.floor(Math.random() * 5);
translate(x - width + PI * 5 + 3 , 5,2 + z - height / PI*2);
fill(25,144,31)
box(w-8, h-1.5, w-8);
stroke(2,2,2);
strokeWeight(2)
pop();
  push()
  let eem = Math.floor(Math.random() * 5);
translate(x - width * 2 / 3 , 5,2 + z - height / PI*2);
fill(235,14,31)
box(w+10, h-5, w/2.5);
stroke(2,2,2);
strokeWeight(2)
pop();
}
offset += 0.15;
}
angle += 0.1;
}