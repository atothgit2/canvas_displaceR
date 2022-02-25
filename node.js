import Mouse from "./mouse.js";

export default class Node {
  constructor(canvasWitdth, canvasHeight) {
    this.baseX = canvasWitdth * 0.5;
    this.baseY = canvasHeight * 0.5;
    this.x = this.baseX;
    this.y = this.baseY;
    this.radiusDraw = 5;
    this.lineWidth = 3;
    this.stroke = '#23276b';
    
    this.distance = undefined; // in pixles
    this.isDown = false;
    
    // this.alpha = undefined;
    // this.radiusCircle = undefined;
  }

  update(mouse) {
    this.distance = Math.hypot(this.x, this.y);
    
    this.isMouseDown();
    // this.radiusCircle = this.getRadiusCircle(this.baseX, this.baseY, mouse.x, mouse.y);
    // this.alpha = this.getAlpha(this.baseX, this.baseY, mouse.x, mouse.y)
    if (this.isDown) {
      let ratio = -0.08;
      this.x = this.baseX + 2 * (this.baseX - mouse.x) * ratio;
      this.y = this.baseY + 2 * (this.baseY - mouse.y) * ratio;
    } else {
      this.x = this.baseX;
      this.y = this.baseY;
    }
  }

  draw(ctx) {
    ctx.strokeStyle = this.stroke;
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radiusDraw, 0, 2 * Math.PI);
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

  getRadiusCircle(tX, tY, mX, mY) {
    let radius = Math.sqrt(Math.pow((tX - mX),2) + Math.pow((tY - mY),2));

    return radius;
  }
}