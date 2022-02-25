import Node from './node.js';
import {drawData} from './utils.js';
import Mouse from "./mouse.js";

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
window.addEventListener('load', function(){
  const loading = document.getElementById('loading');
  loading.style.display = 'none';
  
  canvas.width = 500;
  canvas.height = 500;
  
  const mouse = new Mouse();
  mouse.getMouseData(canvas);
  
  const node = new Node(canvas.width, canvas.height);
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    node.update(mouse);
    node.draw(ctx);
    
    drawData(ctx, 
      {"this.distance": node.distance},
      {"this.baseX": node.baseX},
      {"this.baseY": node.baseY},
      {"isDown": node.isDown},
      {"this.x": node.x},
      {"this.y": node.y},
      // {"this.calX": node.calX}, 
      // {"this.calY": node.calY}, 
      {"this.radiusCircle": node.radiusCircle},
      {"mX": mouse.x},
      {"mY": mouse.y},
      {"this.alpha": node.alpha},
      // {"mDistance": mouse.distance}

    );
      requestAnimationFrame(animate);
  }
  animate();
});


