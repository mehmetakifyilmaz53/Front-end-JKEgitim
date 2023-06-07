var date = document.getElementById("date"),
  day = document.getElementById("day"),
  month = document.getElementById("month"),
  year = document.getElementById("year"),
  days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
  ],
  months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
  ],
  box = document.getElementById("box"),
  theme = document.getElementById("theme");

theme.addEventListener("click", () => {
  changeTheme();
});

function update() {
  let now = new Date();
  date.innerText = now.getDate();
  day.innerText = days[now.getDay()];
  month.innerText = months[now.getMonth()];
  year.innerText = now.getFullYear();
}

function changeTheme() {
  let check = document.getElementById("check");
  if (check.checked) {
    document.body.style.background = "grey";
    theme.style.color = "#e0e0e0";
    box.style.color = "#e0e0e0";
    box.style.boxShadow =
      "9px 9px 18px #5f5f5f, -9px -9px 18px #999";
    check.checked = false;
    theme.style.transform = "rotateZ(180deg)";
  } else {
    document.body.style.background = "#e0e0e0";
    theme.style.color = "grey";
    box.style.color = "grey";
    box.style.boxShadow =
      "9px 9px 18px #bebebe, -9px -9px 18px #fff";
    check.checked = true;
    theme.style.transform = "rotateZ(-180deg)";
  }
}

document.getElementById("box").onmouseenter = () => {
  setInterval(update, 1000);
  setTimeout(() => {
    document.getElementById("two").style.height = "216px";
    box.style.color = "grey";
  }, 1000);
};

document.getElementById("box").onmouseleave = () => {
  setInterval(update, 100);
  setTimeout(() => {
    document.getElementById("two").style.height = "0px";
    box.style.color = "grey";
  }, 1000);
  month
};



var counter = 1;
setInterval(function()  {
  document.getElementById('radio'+ counter).checked = true;
  counter++; 

  if(counter>4){
    counter=1
  }

}, 3000);

