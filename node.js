export default class Node {
  constructor(canvasWitdth, canvasHeight) {
    this.baseX = canvasWitdth * 0.5;
    this.baseY = canvasHeight * 0.5;
    this.x = this.baseX;
    this.y = this.baseY;
    this.radius = 5;
    this.lineWidth = 3;
    this.stroke = '#23276b';
    this.distance = undefined;
  }

  update(mX, mY) {
    window.addEventListener('mousedown', (e) => {
      this.x = mX;
      this.y = mY;
    });
    window.addEventListener('mouseup', (e) => {
      this.x = this.baseX;
      this.y = this.baseY;
      
      // this.distance = Math.sqrt(Math.abs(this.x - mouse.x) + Math.abs(this.y - mouse.y));
    });
  }

  draw(ctx) {
    ctx.strokeStyle = this.stroke;
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }

}