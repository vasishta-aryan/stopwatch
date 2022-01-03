const timer = document.querySelector("#stopwatch");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
let alarm = false;
var alarmtime;
let time = 0,
  interval;
function showtime() {
  time += 1;
  timer.innerHTML = HHMMSS(time);
  if (alarm == true && time == alarmtime) {
    stopTime();
    alarm == false;
    alert("THE TIME IS UP");
  }
}
function startTime() {
  interval = setInterval(showtime, 1000);
  hideBtn([startbtn]);
  showBtn([stopbtn, resetbtn]);
}

function showBtn(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = "inline-block"));
}
function hideBtn(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = "none"));
}
function stopTime() {
  if (interval) {
    clearInterval(interval);
    interval = null;
    stopbtn.innerHTML = "Resume";
  } else {
    interval = setInterval(showtime, 1000);
    stopbtn.innerHTML = "Stop";
  }
}
function resetTime() {
  clearInterval(interval);
  interval = null;
  stopbtn.innerHTML = "Stop";
  time = 0;
  timer.innerHTML = HHMMSS(time);
  hideBtn([stopbtn, resetbtn]);
  showBtn([startbtn]);
}
function HHMMSS(time) {
  let hh = Math.floor(time / 3600);
  let mm = Math.floor((time - hh * 3600) / 60);
  let ss = time - hh * 3600 - mm * 60;
  if (hh < 10) hh = "0" + hh;
  if (mm < 10) mm = "0" + mm;
  if (ss < 10) ss = "0" + ss;
  return hh + ":" + mm + ":" + ss;
}
function setalarm() {
  sss = document.querySelector("#alarmss").value;
  mmm = document.querySelector("#alarmmm").value;
  hhh = document.querySelector("#alarmhh").value;
  sss = parseInt(sss);
  hhh = parseInt(hhh);
  mmm = parseInt(mmm);
  alarmtime = sss + mmm * 60 + hhh * 3600;
  if (hhh < 10) hhh = "0" + hhh;
  if (mmm < 10) mmm = "0" + mmm;
  if (sss < 10) sss = "0" + sss;
  alarm = true;
  alert("The alarm is set for " + hhh + ":" + mmm + ":" + sss);
}
