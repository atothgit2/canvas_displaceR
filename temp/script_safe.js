window.addEventListener('resize', function () { 
  window.location.reload(); 
});

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WITDTH = canvas.width = 500; 
const CANVAS_HEIGHT = canvas.height = 500;
const padding = 20;

let nodeArray = [];

class Node {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.radius = 3;
  }
  update(cx, cy) {
    this.x = cx;
    this.y = cy;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
};

for (let i = padding; i < canvas.width; i++) {
  for (let j = padding; j < canvas.height; j++) {
    let coordinate = {};
    if (i % padding === 0 && j % padding === 0) {
      coordinate.node = new Node();
      coordinate.x = i;
      coordinate.y = j;
      nodeArray.push(coordinate);
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WITDTH, CANVAS_HEIGHT);
  nodeArray.forEach(node => {
  node.node.update(node.x, node.y);
  node.node.draw();
  })
  requestAnimationFrame(animate);
}
animate();

// const canvas2 = document.createElement("canvas");
// document.body.appendChild(canvas2);
// canvas2.setAttribute("id", "canvas2");
// document.getElementById('canvas2').style.border = "4px solid black";
// document.getElementById("canvas2").style.width = "34px";
// document.getElementById("canvas2").style.height = "34px";
// document.getElementById("canvas2").style.top = "50%";
// document.getElementById("canvas2").style.left = "50%";
// document.getElementById("canvas2").style.transform = "translate(-50%, -50%)";