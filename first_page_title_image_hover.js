const menuItem = document.querySelector(".first_page");

function followImageCursor(event, menuItem) {
  const contentBox = menuItem.getBoundingClientRect();
  const dx = event.pageX - contentBox.x;
  const dy = event.pageY - contentBox.y;
  document.querySelector(".first_page_video").style.transform = `translate(${dx}px, ${dy}px)`;
}

menuItem.addEventListener("mousemove", (event) => {
  setInterval(followImageCursor(event, menuItem), 1000);
});
