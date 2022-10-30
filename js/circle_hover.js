
document.addEventListener("mousemove", (e) => {
  const circle = document.getElementById("circle");
  // const halfCircleSize = circle.offsetHeight / 2;
  const mouse_x = e.clientX;
  const mouse_y = e.clientY;
  circle.style.transform = `translate(${mouse_x }px, ${mouse_y }px)`;
  // circle.style.left = `${mouse_x - halfCircleSize}px`;
  // circle.style.top = `${mouse_y - halfCircleSize}px`;
});