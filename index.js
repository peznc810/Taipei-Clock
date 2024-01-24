const hours = document.querySelector(".hours"),
      minutes = document.querySelector(".minutes"),
      seconds = document.querySelector(".seconds"),
      bg = document.querySelector(".bg");

// 先判斷當下的背景，避免剛進網頁的背景白屏
updateTime();
setInterval(updateTime, 1000);

function updateTime() {
  const time = new Date();
  hours.style.transform = `rotate(${time.getHours() * 30 - 180}deg)`;
  minutes.style.transform = `rotate(${time.getMinutes() * 6 - 180}deg)`;
  seconds.style.transform = `rotate(${time.getSeconds() * 6 - 180}deg)`;

  if (time.getHours() >= 15 || time.getHours() < 6) {
    bg.classList.remove("morning");
    bg.classList.add("night");
  } else {
    bg.classList.remove("night");
    bg.classList.add("morning");
  }
};