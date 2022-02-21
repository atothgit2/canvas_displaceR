import Node from './node.js';
import {drawData} from './utils.js';

/** @type {HTMLCanvasElement} */
window.addEventListener('load', function(){
  const loading = document.getElementById('loading');
  loading.style.display = 'none';
  
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let gameFrame = 0;

  const mouse = {
    x: undefined,
    y: undefined
  }
  canvas.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  const node = new Node(canvas.width, canvas.height);
    
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    node.update(mouse.x, mouse.y);
    node.draw(ctx);
    
    drawData(ctx, 
      {"node.distance": node.distance},
      {"node.x": node.x},
      {"node.y": node.y}, 
      {"mouse.x": mouse.x}, 
      {"mouse.y": mouse.y},
      {"node.baseX": node.baseX},
      {"node.baseY": node.baseY}
    );
      requestAnimationFrame(animate);
  }
  gameFrame++;
  animate();
});

// node.distance = Math.sqrt(Math.abs(node.x - mouse.x) + Math.abs(node.y - mouse.y))



