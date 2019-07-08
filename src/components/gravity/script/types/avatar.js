export default function Avatar({
  context,
  x,
  y,
  width,
  height,
  color,
}) { 
  context.fillStyle = color;
  context.fillRect(x, y, width, height);
}