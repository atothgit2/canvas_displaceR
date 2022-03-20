export default class Node {
  constructor() {
    // Node parameters
    this.radiusDraw = 3;
    this.lineWidth = 2;
    
    this.stroke = 'hsla(0, 0%, 100%, 1)';
    this.fillStyle = 'hsl(298, 100%, 45%)';
    this.speed = Math.random() * (0.9 - 0.6) + 0.6;
    
    this.baseX;
    this.baseY;
    this.base2node;

    this.x = this.baseX;
    this.y = this.baseY;
        
    this.destX = undefined;
    this.destY = undefined;
    
    // Line parameters
    this.lineStroke = 'hsl(298, 100%, 45%)';
    this.lineLineWidth = 0.5;

    // Utils
    this.isDown = false;
    this.mouseX = undefined;
    this.mouseY = undefined;
    this.mouse2node;
    
    this.frame = 0;
  }
  
  update(mouseX, mouseY, isDown) {
    this.isDown = isDown;
    this.mouseX = mouseX;
    this.mouseY = mouseY;
    this.base2node = Math.round(Math.sqrt(Math.pow(this.baseX - this.x, 2) + Math.pow(this.baseY - this.y, 2)));
    this.mouse2node = Math.round(Math.sqrt(Math.pow(this.x - this.mouseX, 2) + Math.pow(this.y - this.mouseY, 2)));
    
    this.destX = this.mouseX + ((this.baseX - this.mouseX) * this.speed);
    this.destY = this.mouseY + ((this.baseY - this.mouseY) * this.speed);
    

    if (this.isDown && this.mouse2node < 500) {
        this.x -= (this.baseX - this.destX) * 0.08;
        this.y -= (this.baseY - this.destY) * 0.08;
    }

    this.frame++;

    // utils.drawData(sc.ctx,
    //   {"this.baseX": this.baseX},
    //   {"this.baseY": this.baseY},
    //   {"this.x": this.x},
    //   {"this.y": this.y},
    //   {"isDown": this.isDown},
    //   {"mX": this.mouseX},
    //   {"mY": this.mouseY},
    //   {"------": '------'},
    //   {"this.mouseDistance": this.mouseDistance},
    //   {"this.baseDistance": this.baseDistance},
    //   {"this.currentDistance": this.currentDistance},
    //   {"------": '------'},
    //   {"this.destX": this.destX},
    //   {"this.destY": this.destY},
    //   {"this.alpha": this.alpha},
    //   {"this.alpha": this.alpha * (180/Math.PI)},
    //   );
  }

  draw(ctx) {
    // draw node
    ctx.strokeStyle = this.stroke;
    ctx.lineWidth = this.lineWidth;
    ctx.fillStyle = this.fillStyle;
    
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radiusDraw, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    
    // draw line
    ctx.strokeStyle = this.lineStroke;
    ctx.lineWidth = this.lineLineWidth;
    
    ctx.beginPath();
    ctx.moveTo(this.mouseX, this.mouseY);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
  }
}