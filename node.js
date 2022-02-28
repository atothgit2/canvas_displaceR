import * as utils from "./utils.js";
import { ctx } from "./script.js";

export default class Node {
  constructor() {
    this.baseX = undefined;
    this.baseY = undefined;
    this.x = undefined;
    this.y = undefined;
    this.radiusDraw = 5;
    this.lineWidth = 3;
    this.stroke = '#ececec';
    
    this.isDown = false;
    this.mouseX = undefined;
    this.mouseY = undefined;
    this.mouseDistance = undefined;
  }

  update(canvas1) {

    canvas1.addEventListener('mousemove', e => {
      this.mouseDistance = Math.round(Math.sqrt(Math.pow(this.x - this.mouseX, 2) + Math.pow(this.y - this.mouseY, 2))); 
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
    this.isMouseDown();
    if (this.isDown && this.mouseDistance < 100) {
      // let ratio = -0.11;
      let ratio = -this.mouseDistance / 1000;
      this.x = Math.round(this.baseX + 2 * (this.baseX - this.mouseX) * ratio);
      this.y = Math.round(this.baseY + 2 * (this.baseY - this.mouseY) * ratio);
    } else {
      this.x = Math.round(this.baseX);
      this.y = Math.round(this.baseY);
      // console.log(this);
    }

    // utils.drawData(ctx,
    //   {"this.baseX": this.baseX},
    //   {"this.baseY": this.baseY},
    //   {"this.x": this.x},
    //   {"this.y": this.y},
    //   {"isDown": this.isDown},
    //   {"mX": this.mouseX},
    //   {"mY": this.mouseY},
    //   {"this.mouseDistance": this.mouseDistance},
    // );
  }

  draw(ctx) {
       // ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = this.stroke;
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radiusDraw, 0, 2 * Math.PI);
    ctx.stroke();
  }

  isMouseDown() {
    document.addEventListener("mousedown", (e) => {
      return this.isDown = true;
    });
    document.addEventListener("mouseup", (e) => {
      return this.isDown = false;
    });
  }

  getRadiusCircle(tX, tY, mX, mY) {
    let radius = Math.sqrt(Math.pow((tX - mX),2) + Math.pow((tY - mY),2));

    return radius;
  }

}