import { roundRect } from '../helpers';

const calculateY = (y, height) => (y === 0 ? height : y -10);
const calculateX = (x, variant) => (x - variant);
const calculateWidth = (w, variant) => (w + variant);

export default function Tubes({
  context,
  x,
  y,
  width,
  height,
  color,
}) {

  context.fillStyle = color;
  context.fillRect(x, y, width, height);

  context.fillRect(calculateX(x, 6), calculateY(y, height),  calculateWidth(width, 13), 10);
  roundRect(context, calculateX(x, 6), calculateY(y, height), calculateWidth(width, 13), 10, 5, {
    tl: 50,
    br: 50
  }, true)

  context.strokeRect(x, y, width, height);
}