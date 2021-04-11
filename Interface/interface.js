const sketchLetter = "TRY";


let pg
let font
let rgba = ['rgba(255, 0, 0, 0.9)', 'rgba(0, 255, 0, 0.9)', 'rgba(0, 0, 255, 0.9)']
let textSize = 450
let posOffset = 20
let sizeOffset = 100
let tiles = 100
let tileSize
let loopDuration = 2 * 60

function preload() {
  font = loadFont('PERTILI.TTF')
}

function setup() {
  createCanvas(550, 950)

  pg = createGraphics(width, height)
  pg.textFont(font)
  pg.textAlign(CENTER, CENTER)
  pg.blendMode(SCREEN)
  pg.translate(width / 1.9, height / 1.7)
  pg.textSize(200)
  pg.fill(rgba[0])
  pg.text('EXPERIMENT', -4, -4)
  pg.fill(rgba[1])
  pg.text('EXPERIMENT', 0, 0)
  pg.fill(rgba[2])
  pg.text('EXPERIMENT', 4, 4)

  tileSize = width / tiles

  // Throttle frame rate for performance
  frameRate(30)

   // createLoop({
   // duration:10,
   // gif:true});
}



function draw() {
  
  background('rgba(0, 0, 0, 2)')

  let currentFrame = frameCount % loopDuration
  let t = currentFrame / loopDuration
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







function mousePressed() {
	saveCanvas("sketch-"+sketchLetter,"jpg")
}
