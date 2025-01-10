/* mouse */
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.getElementById("cursor");

  document.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
  });

});