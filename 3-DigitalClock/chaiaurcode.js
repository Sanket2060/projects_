let clock = document.querySelector('#clock');
setInterval(() => {
  const d = new Date();
  clock.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}, 1000);
