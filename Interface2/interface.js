const sketchLetter = "TRY";

var textfield;
var output;

let pg
let font
let rgba = ['rgba(255, 05, 100, .7)', 'rgba(100, 95, 70, 0.9)', 'rgba(0, 200, 255, 1)']
let textSize = 475
let posOffset = 10
let sizeOffset = 60
let tiles = 100
let tileSize
let loopDuration = 2 * 60
let textsource = $("#posterText").val()
let textspecifications = $("#sizeText").val()
let t=0.1

function preload() {
  font = loadFont('PERTILI.TTF')
}

function setup() {
  createCanvas(2400, 3600)
  
  //textfield = $("#posterTex)
  //textfield.changed(newText);
  $("#posterText").keyup(newTyping);

$(document).on('input', '#amplitude', function() {
  t = $(this).val() /500
  newTyping();
});



  $("#sizeText").keyup(newText);

$(document).on('input', '#slider', function() {
 val = $(this).val() /10
  newText();
});


  //output = select(textsource);


  pg = createGraphics(width, height)
  pg.textFont(font)
  //pg.textAlign(CENTER, CENTER)
  pg.blendMode(SCREEN)
  //pg.translate(width / 1.9, height / 1.7)
  pg.textSize(textspecifications)
  pg.textLeading(textspecifications)
  pg.fill(rgba[0])
  pg.text(textsource, 0, 0, width, height)
  pg.fill(rgba[1])
  pg.text(textsource, 0, 0, width, height)
  pg.fill(rgba[2])
  pg.text(textsource, 3, 4, width, height)

  tileSize = height / tiles

  // Throttle frame rate for performance
  frameRate(30)

newTyping()
newText()
}


function newText() {
  textspecifications = $("#sizeText").val()
  
  pg = createGraphics(width, height)
  pg.textFont(font)
  //pg.textAlign(CENTER, CENTER)
  pg.blendMode(SCREEN)
  //pg.translate(width / 1.9, height / 1.7)
  pg.textSize(textspecifications)
  pg.textLeading(textspecifications)
  pg.fill(rgba[0])
  pg.text(textsource, 0, 0, width, height)
  pg.fill(rgba[1])
  pg.text(textsource, 0, 0, width, height)
  pg.fill(rgba[2])
  pg.text(textsource, 4, 4, width, height)

  tileSize = height / tiles

  
  background('rgba(0, 0, 0, 2)')

  //let currentFrame = frameCount % loopDuration
  let currentFrame = 5
  //let t = currentFrame / loopDuration
  //let t = 0.1
  let u = map(t, 0, 1, 0, PI)


  for (let y = 0; y < tiles; y++) {
    for (let x = 0; x < tiles; x++) {
      
      const waveX = sin(currentFrame * 0.05 * ( x * y ) * 0.01) * 100
      const waveY = atan(currentFrame * 0.02 * ( x * y ) * 0.05) * 100
      
      const sx = x * tileSize + waveX * sin(u)
      const sy = y * tileSize + waveY * sin(u)
      const sw = tileSize
      const sh = tileSize 

      const dx = x * tileSize 
      const dy = y * tileSize
      const dw = tileSize
      const dh = tileSize
      
      image(pg, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}





function newTyping() {
  textsource = $("#posterText").val()
  
  pg = createGraphics(width, height)
  pg.textFont(font)
  //pg.textAlign(CENTER, CENTER)
  pg.blendMode(SCREEN)
  //pg.translate(width / 1.9, height / 1.7)
  pg.textSize(475)
  pg.textLeading(475)
  pg.fill(rgba[0])
  pg.text(textsource, 0, 0, width, height)
  pg.fill(rgba[1])
  pg.text(textsource, 0, 0, width, height)
  pg.fill(rgba[2])
  pg.text(textsource, 4, 4, width, height)

  tileSize = height / tiles

  
  background('rgba(0, 0, 0, 2)')

  //let currentFrame = frameCount % loopDuration
  let currentFrame = 5
  //let t = currentFrame / loopDuration
  //let t = 0.1
  let u = map(t, 0, 1, 0, PI)


  for (let y = 0; y < tiles; y++) {
  	for (let x = 0; x < tiles; x++) {
      
      const waveX = sin(currentFrame * 0.05 * ( x * y ) * 0.01) * 100
      const waveY = atan(currentFrame * 0.02 * ( x * y ) * 0.05) * 100
      
      const sx = x * tileSize + waveX * sin(u)
      const sy = y * tileSize + waveY * sin(u)
      const sw = tileSize
      const sh = tileSize 

      const dx = x * tileSize 
      const dy = y * tileSize
      const dw = tileSize
      const dh = tileSize
      
      image(pg, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}



$("#save").click(function(){
  saveCanvas("poster","jpg")
})


//function mousePressed() {
//	
//}
