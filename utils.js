export function drawData(context, ...items) {
  context.font = '11px Helvetica';
  context.fillStyle = 'white';
  let posY = 10;
  for (let item of items) {
    context.fillText(`${Object.keys(item)}: ${Object.values(item)} `, 3, posY);
    posY += 15;
  }
}

// Node-ból ide akarom kitenni az egér adatok kinyerését
export class Mouse {

};