const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

const h1Text = h1.textContent;
const h1Split = h1Text.split("");
h1.textContent = "";

const h2Text = h2.textContent;
const h2Split = h2Text.split("");
h2.textContent = "";

for (let i = 0; i < h1Split.length; i++) {
  h1.innerHTML += "<span>" + h1Split[i] + "</span>";
}

for (let i = 0; i < h2Split.length; i++) {
  h2.innerHTML += "<span>" + h2Split[i] + "</span>";
}

let char = 0;
let char2 = h2Split.length - 1;

let timer = setInterval(onTick, 80);
let timer2 = setInterval(onTick2, 80);

function onTick() {
  const span = h1.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;

  if (char === h1Split.length) {
    complete();
    return;
  }
}

function onTick2() {
  const span = h2.querySelectorAll("span")[char2];
  span.classList.add("fadeIn");
  char2--;

  if (char2 === -1) {
    complete2();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

function complete2() {
  clearInterval(timer2);
  timer2 = null;
}
