// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions. 
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

let drop1, drop2, drop3, drop4,grass1, grass2, grass3, grass4, grass5, grass6;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100);
  debugger
  
  // RainDrop arguments are x, y, d, fallSpeed
  drop1 = new RainDrop();
  drop2 = new RainDrop();
  drop3 = new RainDrop();
  drop4 = new RainDrop();
  grass1 = new Grass();
  grass2 = new Grass();
  grass3 = new Grass();
  grass4 = new Grass();
  grass5 = new Grass();
  grass6 = new Grass();
}

function draw() {
  background(0, 0, 95);

  drop1.dropAndShow();
  drop2.dropAndShow();
  drop3.dropAndShow();
  drop4.dropAndShow();
  grass1.update();
  grass2.update();
  grass3.update();
  grass4.update();
  grass5.update();
  grass6.update();
}

class RainDrop {
  // The constructor will be called whenever you run `new RainDrop()`
  constructor() {
    this.x = random(width);
    this.y = 200;
    this.d = random(10, 20);
    this.fallSpeed = random(5, 15);
    
  }
  
  show() {
    noStroke();
    fill(60, 80, 80);
    //ellipse(this.x, this.y, this.d);
    push();
    noStroke();
    translate(this.x,this.y);
    beginShape();
    //strokeWeight(1);
    vertex(0,-20);
    quadraticVertex(12, 0, 0, 4);
    quadraticVertex(-12,0, 0, -20);
    endShape(CLOSE);
    pop();
    
    
  }
  
  drip() {
    this.y += this.fallSpeed;
    // If it goes off the screen...
    if (this.y > height) {
      // ...reset it...
      this.y = 0;
      // ...and move it somewhere random.
      this.x = random(width);
    }
  }
  
  dropAndShow() {
    this.drip();
    this.show();
  }
}
class Grass{
  constructor(){
    this.x = random(width);
    this.y = height;
    this.base =  20;
    this.height = 60;
  }
  update(){
    this.show();
    this.grow();
  }
  show(){
    fill(40, 80, 80);
    triangle(this.x, this.y, this.x + this.base, this.y, this.x + this.base/2,this.y - this.height+3)
    this.x += 7
    triangle(this.x, this.y, this.x + this.base, this.y, this.x + this.base/2,this.y - this.height-7)
    this.x+=16
    triangle(this.x, this.y, this.x + this.base, this.y, this.x + this.base/2,this.y - this.height-1)
    this.x -= 23
  }
  grow(){
    if(random(100)>97 && this.height < 100){
      this.height += 1
      
    }
  }
}