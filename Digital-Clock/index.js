function time() {
  const hrs = document.querySelector(".hours");
  const mint = document.querySelector(".minutes");
  const sec = document.querySelector(".seconds");
  const per = document.querySelector(".periods");
  let h = new Date().getHours();
  let min = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = h >= 12 ? "PM" : "AM";

  if (h >= 12) {
    h = h - 12;
  }
  if (min >= 60) {
    min = min - 60;
  }
  h = h < 10 ? "0" + h : h;
  min = min < 10 ? "0" + min : min;
  s = s < 10 ? "0" + s : s;

  hrs.innerHTML = h;
  mint.innerHTML = min;
  sec.innerHTML = s;
  per.innerHTML = ampm;
}
time();
setInterval(time, 1000);
