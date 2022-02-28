import Node from './node.js';

/** @type {HTMLCanvasElement} */
const canvas1 = document.getElementById('canvas1');
const ctx = canvas1.getContext('2d');
export { canvas1 };
export { ctx };

// const canvasData = document.getElementById('canvasData');
// const ctxData = canvasData.getContext('2d');
// export { canvasData };
// export { ctxData };

let frameCount = 0;

window.addEventListener('load', function(){
  const loading = document.getElementById('loading');
  loading.style.display = 'none';

  let mouseX;
  let mouseY;
  let mouseDown;

  canvas1.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  document.addEventListener("mousedown", (e) => {
    mouseDown = true;
  });
  document.addEventListener("mouseup", (e) => {
    mouseDown = false;
  });

  
  canvas1.width = 500;
  canvas1.height = 500;
  // canvasData.width = 150;
  // canvasData.height = 150;

  let nodesArray = new Array();
  nodesArray = getNodeArray(canvas1.width, canvas1.height, 10);
  
  function animate() {
    ctx.clearRect(0, 0, canvas1.width, canvas1.height);
    // ctxData.clearRect(0 , 0, 150, 150);

    for (let n of nodesArray) {
      n.update(mouseX, mouseY, mouseDown);
      n.draw(ctx);
    }
    requestAnimationFrame(animate);
    frameCount++;
  }

  function getNodeArray(canvasWidth, canvasHeight, divideBy) {
    let nodes = new Array;
    
    for (let i = 1; i <= canvasHeight - 1; i++) {
      let node = new Node();
      if (i % (canvasHeight / divideBy) == 0) {
        node.x = i;
        node.baseX = i;
        // console.log("i: " + i);
        for (let j = 200; j <= canvasWidth - 200; j++) {
          if (j % (canvasWidth / divideBy) == 0) {
            node.y = j;
            node.baseY = j;
            // console.log("j: " + j);
            nodes.push(node);
            node = new Node();
            node.x = i;
            node.baseX = i;
          }
        }
      } 
    }
    // console.log(nodes);
    return nodes;
  }
  if (frameCount % 20 == 0) {
    animate();
  }
});


// setInterval and setTimeout a visszatérő animációhoz
// canvas best practices: https://stackoverflow.com/questions/8205828/html5-canvas-performance-and-optimization-tips-tricks-and-coding-best-practices