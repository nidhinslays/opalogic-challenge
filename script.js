const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const sendData = document.getElementById("send");
const timerEl = document.querySelector(".timer");
const preTimeDifference = document.querySelector(".timeDiffernece");
let val = 0;
let a = [];
const b = [];
let time = 0;
const updateTimer = function () {
  if (val === 1) return;
  const minutes = String(Math.floor(time / 60)).padStart(2, 0);
  const seconds = String(time % 60).padStart(2, 0);
  timerEl.innerHTML = `${minutes}:${seconds}`;
  time++;
};

startButton.addEventListener("click", function (e) {
  e.preventDefault();
  val = 0;
  if (setInterval(updateTimer, 1000)) clearInterval(updateTimer);
  setInterval(updateTimer, 1000);
});

document.addEventListener("keydown", function (e) {
  e.preventDefault();
  if (e.code === "Space") {
    a.push(time * 1000);
    if (a[a.length - 3]) {
      preTimeDifference.innerHTML = `${a[a.length - 2] - a[a.length - 3]}`;
    }

    console.log(a);
  }
});

stopButton.addEventListener("click", function (e) {
  val = 1;
  e.preventDefault();
  clearInterval(updateTimer);

  timerEl.innerHTML = `00:00`;
  time = 0;

  b.push(a);
  a = [];

  console.log(b);
});

sendData.addEventListener("click", function (e) {
  e.preventDefault();
  fetch("/api", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "content-type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ arr: b }),
  }).then((data) => {
    console.log(data);
  });
});
