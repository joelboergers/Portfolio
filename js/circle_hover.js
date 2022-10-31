
document.addEventListener("mousemove", (e) => {
  const circle = document.getElementById("circle");
  const mouse_x = e.clientX;
  const mouse_y = e.clientY;
  circle.style.transform = `translate(${mouse_x }px, ${mouse_y }px)`;
});