export default function Text({
  context,
  x,
  y,
  width,
  height,
  color,
  text,
}) { 
  context.font = width + " " + height;
  context.fillStyle = color;
  context.fillText(text, x, y);
}