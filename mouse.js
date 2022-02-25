export default class Mouse {
  constructor() {
    this.x;
    this.y;
    this.alpha;
    this.distance;
  }
  getMouseData(canvas) {
    canvas.addEventListener('mousemove', e => {
      this.x = e.clientX;
      this.y = e.clientY;
      this.alpha = Math.atan(this.y/this.x); //* 180 / Math.PI;
      this.distance = Math.hypot(this.x, this.y); // a háromszög átmérője
    });
  }
}