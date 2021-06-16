let cols = 500;
let rows = 500;
let current  = Array(cols).fill(0).map(() => Array(rows).fill(0));
let previous = Array(cols).fill(0).map(() => Array(rows).fill(0));
let damping = 0.99;

function setup() {
  pixelDensity(1);
  createCanvas(cols, rows);
  
}


function mouseDragged() {
  previous[mouseX][mouseY] = 2500;
}

function draw() {
  background(212, 241, 249);
  
  loadPixels();
  for(let i = 1; i < cols - 1; i++){
    for(let j = 1; j < rows - 1; j++){
      current[i][j] = (previous[i-1][j] +  previous[i+1][j] + previous[i][j-1] + previous[i][j+1]) /2 - current[i][j];
      
      current[i][j] = current[i][j] * damping;
       let index = (i + j * cols) * 4;
      pixels[index + 0] = current[i][j];
      pixels[index + 1] = current[i][j];
      pixels[index + 2] = current[i][j];
    }
  }
  updatePixels();
  
  
  let temp = previous;
  previous = current;
  current = temp;
}