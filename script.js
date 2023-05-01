// Mexico V6 [2023]
// BrickBeads | Victor Masotti
// NC

// START

// 1. Global Vars
let angle = 0;
let ma;
let MaxD;
let offset = 10;

// 2. F Setup
function setup () {
  canvas = createCanvas(windowWidth,windowHeight,WEBGL);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  background(250,250,230);
  const serena = [2,3];
  var chord  = random(serena);
  const lick = [4,5];
  var mayo = random(lick);
  const castle = [6,7];
  var lego = random(castle);
  const silvia = [8,9];
  var police = random(silvia);
  const showdown = [chord,mayo,lego,police];
  var ametal = random(showdown);
  ma = atan(1/sqrt(ametal));

  frameRate(1);
  
  ortho(-130,130,-130,130,PI,865);
  
  MaxD = dist(0,0,230,230);
}

// 4. F Draw
function draw() {
  
  const aztecGod = [1,2,3,4,5];
    var london = random(aztecGod);
  
  // DIV 0.1 
  const cSB = [248,249,216];
  const cTG = [137,149,62];
  const cCR = [243,16,100];
  const cOY = [233,174,40];
  const cGA = [15,184,188];
  const cMG = [1,99,66];
  const cCRCR = [255,87,53];
  const cCT = [1,128,113];
  const cYB = [6,63,83];
  const cVO = [254,140,1];
  const cCRCRCR = [152,39,45];
  const cPP = [148,60,100];
  const cTB = [1,112,216];
  const cCRCRCRCR = [162,41,28];
  const cEB = [142,176,203];
  const cCY = [253,199,5];
  const cCRCRfive = [207,15,39];
  const cCG = [21,98,11];
  const cCB = [102,134,151];
  const cCGCG = [190,218,45];
  const coko = [cSB,cTG,cCR,cOY,cGA,cMG,cCRCR,cCT,cYB,cVO,cCRCRCR,cPP,cTB,cCRCRCRCR,cEB,cTG,cCR,cOY,cGA,cMG,cCRCR,cCT,cYB,cVO,cCRCRCR,cPP,cTB,cCRCRCRCR,cEB,cCY,cCRCRfive,cCG,cCY,cCRCRfive,cCG,cCB,cCGCG];
  var huesb = random(coko);
  console.log(huesb);
  
  // DIV 0.2
  const dSB = [248,249,216];
  const dTG = [137,149,62];
  const dCR = [243,16,100];
  const dOY = [233,174,40];
  const dGA = [15,184,188];
  const dMG = [1,99,66];
  const dCRCR = [255,87,53];
  const dCT = [1,128,113];
  const dYB = [6,63,83];
  const dVO = [254,140,1];
  const dCRCRCR = [152,39,45];
  const dPP = [148,60,100];
  const dTB = [1,112,216];
  const dCRCRCRCR = [162,41,28];
  const dEB = [142,176,203];
  const dCY = [253,199,5];
  const dCRCRfive = [207,15,39];
  const dCG = [21,98,11];
  const dCB = [102,134,151];
  const dCGCG = [190,218,45];
  const dance = [dSB,dTG,dCR,dOY,dGA,dMG,dCRCR,dCT,dYB,dVO,dCRCRCR,dPP,dTB,dCRCRCRCR,dEB,dTG,dCR,dOY,dGA,dMG,dCRCR,dCT,dYB,dVO,dCRCRCR,dPP,dTB,dCRCRCRCR,dEB,dCY,dCY,dCRCRfive,dCRCRfive,dCG,dCG,dCB,dCB,dCGCG,dCGCG];
  var huesc = random(dance);
  console.log(huesc);
  
  // DIV 0.3
  const ddSB = [248,249,216];
  const ddTG = [137,149,62];
  const ddCR = [243,16,100];
  const ddOY = [233,174,40];
  const ddGA = [15,184,188];
  const ddMG = [1,99,66];
  const ddCRCR = [255,87,53];
  const ddCT = [1,128,113];
  const ddYB = [6,63,83];
  const ddVO = [254,140,1];
  const ddCRCRCR = [152,39,45];
  const ddPP = [148,60,100];
  const ddTB = [1,112,216];
  const ddCRCRCRCR = [162,41,28];
  const ddEB = [142,176,203];
  const ddCY = [253,199,5];
  const ddCRCRfive = [207,15,39];
  const ddCG = [21,98,11];
  const ddCB = [102,134,151];
  const ddCGCG = [190,218,45];
  const kelp = [ddSB,ddTG,ddCR,ddOY,ddGA,ddMG,ddCRCR,ddCT,ddYB,ddVO,ddCRCRCR,ddPP,ddTB,ddCRCRCRCR,ddEB,ddTG,ddCR,ddOY,ddGA,ddMG,ddCRCR,ddCT,ddYB,ddVO,ddCRCRCR,ddPP,ddTB,ddCRCRCRCR,ddEB,ddCY,ddCY,ddCRCRfive,ddCRCRfive,ddCG,ddCG,ddCB,ddCB,ddCGCG,ddCGCG];
  var huesd = random(kelp);
  console.log(huesd);
  
  // DIV 0
  let mosca = 0;
  const wbmexunoa = [3.2,4.2,5.2];
  var wbmexunot = random(wbmexunoa);
  const wbmextwoa = [6.2,7.2,8.2];
  var wbmextwo = random(wbmextwoa);
  const wbmextrea = [9.2,10.2,11.3];
  var wbmextre = random(wbmextrea);
  const wbmexquta = [12.2,13.2,14.2];
  var wbmexqut = random(wbmexquta);
  const wbmexcina = [15.2,16.2,17.2];
  var wbmexcin = random(wbmexcina);
  const wbmexsixa = [18.2,19.2,19.85];
  var wbmexsix = random(wbmexcina);
  const wbmex = [wbmexunot,wbmextwo,wbmextre,wbmexqut,wbmexcin,wbmexsix,mosca];
  var wmexb = random(wbmex);
  // 2
  let nando = 0;
  const wcmexunob = [3.1,4.1,5.1];
  var wcmexuno = random(wcmexunob);
  const wcmextwob = [6.1,7.1,8.1];
  var wcmextwo = random(wcmextwob);
  const wcmextreb = [9.1,10.1,11.1];
  var wcmextre = random(wcmextreb);
  const wcmexqutb = [12.1,13.1,14.1];
  var wcmexqut =  random(wcmexqutb);
  const wcmexcinb = [15.1,16.1,17.1];
  var wcmexcin = random(wcmexcinb);
  const wcmexsixb = [18.1,19.1,20.1];
  var wcmexsix = random(wcmexsixb);
  const lotion = [wcmexuno,wcmextwo,wcmextre,wcmexqut,wcmexcin,wcmexsix,nando];
  var wmexc = random(lotion);
  // 3
  let cookieCat = 0;
  const wdmexunob = [3,4,5];
  var wdmexuno = random(wdmexunob);
  const wdmextwob = [6,7,8];
  var wdmextwo = random(wdmextwob);
  const wdmextreb = [9,10,11];
  var wdmextre = random(wdmextreb);
  const wdmexqutb = [12,13,14];
  var wdmexqut =  random(wdmexqutb);
  const wdmexcinb = [15,16,17];
  var wdmexcin = random(wdmexcinb);
  const wdmexsixb = [18,19,20];
  var wdmexsix = random(wdmexsixb);
  const wdmex = [wdmexuno,wdmextwo,wdmextre,wdmexqut,wdmexcin,wdmexsix,cookieCat];
  var wmexd = random(wdmex);
  
  const gloria = [2.1,2.2,2.3,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
  var al = random(gloria);
    const oneD = [15,20,25,35,45];
    var w = random(oneD);
    w = w;
    console.log(w);
  
  const crust = [1.5,2.5,3.45,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,44.5,45,57,90,180,270,350];
  var amex = random(crust);
  rotateX(-QUARTER_PI);
  rotateY(ma+amex);
  for (let z = 0; z < height; z += w) {
  for (let x = 0; x < width; x += w) {
  let d = dist(x,z,width/al,height/al);
  let offset = map(d,0,MaxD,-4,4);
  let a = angle + offset + 1;
  let h = map(sin(a),-2.45,2.45,251,502);
  w = w;
 
    const beachRan = [0,5,6,15,50,55,200,500,1000];
    var rimini = random(beachRan);
    const beach = [415,420,430,440];
    var abr = random(beach);
    const ac = [450,460,470];
    var acr = random(ac);
    const ad = [480,487,495];
    var adr = random(ad);
    const ae = [501,508,515];
    var aer = random(ae);
    const af = [520,530,541];
    var afr = random(af);
    const az = [550,561,570];
    var azr = random(az);
    const moore = [abr,acr,adr,aer,afr,azr,rimini,abr,acr,adr,aer,afr,azr];
    var q = random(moore);
    q = q;
    const andre = [0.3,0.6,7,8,4.5,10,20,25,100];
    var sial = random(andre);
    const Cheesey = [1.2,1.3,1.4,1.5];
    var bbr = random(Cheesey);
    const bc = [1.6,1.7,1.8];
    var bcr = random(bc);
    const bd = [1.9,2,2.1];
    var bdr = random(bd);
    const be = [2.2,2.3,2.4];
    var ber = random(be);
    const bf = [2.5,2.6];
    var bfr = random(bf);
    const bz = [2.6,2.7,2.8,2.9];
    var bzr = random(bz);
    const chicken = [bbr,bcr,bdr,ber,bfr,bzr,bbr,bcr,bdr,ber,bfr,bzr,sial];
    var g = random(chicken);
    g = g;
    const animal = [2.6,3.15,3.5];
    var wheel = random(animal);
    const feast = [4.2,4.6,5.1];
    var sauce = random(feast);
    const baller = [5.4,6.05,6.55];
    var blur = random(baller);
    const claim = [7.05,7.51,8.1];
    var supper = random(claim);
    const dinner = [8.1,8.6,9.03];
    var bread = random(dinner);
    const butter = [9.4,10.1,10.56];
    var bliss = random(butter);
    const george = [11.1,11.6,11.95];
    var cloot = random(george);
    const ice = [wheel,sauce,blur,supper,bread,bliss,cloot];
    var mexicovb = random(ice); mexicovb = mexicovb;
 
    const aplpmp = [0,2,5.3,8,52,60,202,502,1000];
    var frutta = random(aplpmp);
    const lever = [410,423,433];
    var cbrc = random(lever);
    const ccce = [443,453,463];
    var ccrc = random(ccce);
    const cdc = [473,483,493];
    var cdrc = random(cdc);
    const cae = [503,513,513];
    var cerc = random(cae);
    const ccf = [523,533,543];
    var cfrc = random(ccf);
    const czyy = [552,562,573];
    var czrc = random(czyy);
    const fish = [cbrc,ccrc,cdrc,cerc,cfrc,czrc,frutta,cbrc,ccrc,cdrc,cerc,cfrc,czrc];
    var qp = random(fish);
    qp = qp;
    const kwade = [0.25,0.5,5.5,6.5,7.6,10,20,25,100];
    var longart = random(kwade);
    const apple = [1.22,1.32,1.42,1.52];
    var toy = random(apple);
    const torch = [1.62,1.72,1.82];
    var bee = random(torch);
    const air = [1.92,2.02,2.12];
    var night = random(air);
    const light = [2.23,2.32,2.42];
    var beer = random(light);
    const beeff = [2.52,2.62];
    var banana = random(beeff);
    const late = [2.62,2.72,2.82,2.92];
    var clock = random(late);
    const grill = [toy,bee,night,beer,banana,clock,toy,bee,night,beer,banana,clock,longart];
    var gt = random(grill);
    gt = gt;
    const wild = [2.55,3.1,3.51];
    var oil = random(wild);
    const aiwwb = [4,4.51,5];
    var dog = random(aiwwb);
    const ball = [5.51,6,6.51];
    var flame = random(ball);
    const shapes = [7,7.51,8];
    var blade = random(shapes);
    const shark = [8,8.51,9];
    var cutt = random(shark);
    const pot = [9.51,10,10.51];
    var treey = random(pot);
    const baby = [11,11.52,12];
    var need = random(baby);
    const flesh = [oil,dog,flame,blade,cutt,treey,need];
    var mexicovc = random(flesh); mexicovc = mexicovc;
    
    const kapoor = [0,0.7,7,9,15,53,200,65,500,999];
    var cragg = random(kapoor);
    const salad = [411,423,432];
    var laser = random(salad);
    const palace = [444,454,462];
    var lie = random(palace);
    const moc = [474,483,492];
    var cuisine = random(moc);
    const fork = [505,513,518];
    var rotten = random(fork);
    const bean = [523,533,543];
    var golden = random(bean);
    const here = [552,562,573];
    var lapis = random(here);
    const koons = [laser,lie,cuisine,rotten,golden,lapis,laser,lie,cuisine,rotten,golden,lapis,cragg];
    var steel = random(koons);
    steel = steel;
    const montezumaII = [0.3,0.63,5.2,6,7,10,20,25,100];
    var canada = random(montezumaII);
    const taste = [1,2,1.32,1.42,1.52];
    var far = random(taste);
    const tlatoani = [1.62,1.72,1.82];
    var toss = random(tlatoani);
    const grow = [1.92,2.02,2.12];
    var breed = random(grow);
    const hadid = [2.23,2.32,2.42];
    var snail = random(hadid);
    const totally = [2.52,2.62];
    var inter = random(totally);
    const merci = [2.62,2.72,2.83,2.94];
    var fhfhy = random(merci);
    const camp = [far,toss,breed,snail,inter,fhfhy,far,toss,breed,snail,inter,fhfhy,canada];
    var gtl = random(camp);
    gtl = gtl;
    const snake = [2.55,3.1,3.51];
    var owl = random(snake);
    const rat = [4,4.51,5];
    var plug = random(rat);
    const fruity = [5.51,6,6.51];
    var lion = random(fruity);
    const masotti = [7,7.51,8];
    var youtube = random(masotti);
    const tank = [8,8.51,9];
    var temple = random(tank);
    const vangogh = [9.51,10,10.51,9.51,10,10.51];
    var hammer = random(vangogh);
    const calder = [11,11.51,12,11.1,11.61,12.1,11,11.51,12,11,11.6,12,-36];
    var holland = random(calder);
    const twombly = [owl,plug,lion,youtube,temple,hammer,holland];
    var mexicovd = random(twombly); mexicovd = mexicovd;
   
    push();
    fill(248,249,216);
    translate(x-width/2,1.1,z-height/2);
    box(w-2.2,h,w-2.2);
    pop();
  
    let mappy = map(sin(a),-g,g,q/2,q);
    mappy = mappy;
    push();
    fill(huesb); 
    mappy = mappy;
    translate(x-width/wmexb,2,z-height/wmexb);
    box(w-mexicovb,mappy,w-mexicovb);
    pop();
     
    let mappp = map(sin(a),-gt,gt,qp/2,qp); 
    mappp = mappp;
    push();
    fill(huesc);
    mappp = mappp;
    translate(x-width/wmexc,3,z-height/wmexc);
    box(w-mexicovc,mappp,w-mexicovc);
    pop();
    
    let depeche = map(sin(a),-gtl,gtl,steel/2,steel);
    depeche = depeche;
    push();
    fill(huesd);
    depeche = depeche;
    translate(x-width/wmexd,4,z-height/wmexd);
    box(w-mexicovd,depeche,w-mexicovd);
    pop();
    }
    offset += 0.15;
  }
  angle += 0.15;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight,WEBGL);
}

// END

// NC
// BrickBeads | Victor Masotti
// Mexico V6 [2023]