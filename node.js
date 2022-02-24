import Mouse from "./mouse.js";

export default class Node {
  constructor(canvasWitdth, canvasHeight) {
    this.baseX = canvasWitdth * 0.5;
    this.baseY = canvasHeight * 0.5;
    this.x = this.baseX;
    this.y = this.baseY;
    this.radius = 5;
    this.lineWidth = 3;
    this.stroke = '#23276b';
    this.distance = undefined; // in pixles
    this.isDown = false;
  }

  update(mouse) {
    this.distance = Math.hypot(this.x, this.y);
    this.isMouseDown();
  }

  draw(ctx) {
    ctx.strokeStyle = this.stroke;
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }

  isMouseDown() {
    document.addEventListener("mousedown", (e) => {
      // console.log("true");
      return this.isDown = true;
    });
    document.addEventListener("mouseup", (e) => {
      // console.log("false");
      return this.isDown = false;
    });
    
  }
}