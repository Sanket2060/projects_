let color = [];
let firstColor = document.querySelector('#grey');
color[0] = firstColor;
for (let i = 0; color[i] != null; i++) {
  color[i + 1] = color[i].nextElementSibling;
}
console.log(color);
color.forEach((element) => {
  console.log(element);
  let elemid = element.id;
  element.addEventListener('click', () => {
    document.body.style.backgroundColor = `${elemid}`;
  });
});

// function setBackgroundColor() {
// document.body.style.BackgroundColor = `${color}`;
// }
