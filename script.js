import Node from './node.js';

/** @type {HTMLCanvasElement} */
window.addEventListener('load', function(){
  const loading = document.getElementById('loading');
  loading.style.display = 'none';

  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const node = new Node();
});

const mouse = {
  x: undefined,
  y: undefined
}

canvas.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  // console.log(mouse.x, mouse.y);
});

function handleNodes() {
  node.distance = Math.sqrt(Math.abs(node.x - mouse.x) + Math.abs(node.y - mouse.y))
  console.log(node.distance);
  if (node.distance <= 50) {
    node.x = mouse.x / 4;
  }
  node.update();
  node.draw();
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WITDTH, CANVAS_HEIGHT);
  handleNodes();
  requestAnimationFrame(animate);
}
animate();


