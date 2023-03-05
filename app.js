const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let actives = 0;
let currentActive = 1;
next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  currentActive < 1 && (currentActive = 1);
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
    actives = document.querySelectorAll(".active");
  });

  progress.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;

  if (currentActive == 1) {
    prev.disabled = true;
  } else if (currentActive >= circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
