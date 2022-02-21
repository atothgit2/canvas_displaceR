export function drawData(context, ...items) {
  // new array = items;
  context.font = '12px Helvetica';
  let posY = 15;
  for (let item of items) {
    context.fillText(`${Object.keys(item)}: ${Object.values(item)} `, 14, posY);
    posY += 15;
    // console.log(posY);
  }
}

