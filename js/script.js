const display = document.querySelector(".data");
let second = document.querySelector("#sec");
let minutes = document.querySelector("#min");
let hours = document.querySelector("#hour");
let stopp = true;

// function t stop
let fnStop = () => {
  stopp = true;
};

// function to start Stopwatch
const fnstart = () => {
  stopp = false;
  setInterval(() => {
    !stopp ? second.innerHTML++ : null;
    if (second.innerHTML > 59) {
      minutes.innerHTML++;
      second.innerHTML = 00;
    }
    if (minutes.innerHTML > 59) {
      hours.innerHTML++;
      minutes.innerHTML = 00;
    }
  }, 1000);
};

// function to save Stopwatch
let fnsave = () => {
  display.innerHTML += `<h2> ${hours.innerHTML} Hr/ ${minutes.innerHTML} Min/  ${second.innerHTML} Sec </h2>`;
};
// function to reset Stopwatch
let fnreset = () => {
  second.innerHTML = "00";
  minutes.innerHTML = "00";
  hours.innerHTML = "00";
};
// function erase data
let fnformat = () => {
  display.innerHTML = "";
};

