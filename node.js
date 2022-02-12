export default class Node {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.radius = 4;
    this.lineWidth = 2;
    this.stroke = '#3b3b3b';
  }
  
  draw() {
    ctx.strokeStyle = this.stroke;
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
  update() {
  }
}