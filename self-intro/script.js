console.log("JS 연결 성공!");

if (document.getElementById("greeting")) {
  setInterval(() => {
    let now = new Date();
    document.getElementById("time").innerText = now.toLocaleTimeString();
  }, 1000);
}


function updateGreeting() {
  let hour = new Date().getHours();
  let text = "";

  if (hour < 12) {
    text = "안녕하세요!☀️";
  } else if (hour < 18) {
    text = "안녕하세요!";
  } else {
    text = "하루의 마무리도 화이팅!🌙";
  }

  document.getElementById("greeting").innerText = text;
}

updateGreeting();


let num = 0;

function like() {
  num++;
  document.getElementById("count").innerText = num;
}

let isChanged = false;

document.querySelector(".box").onclick = function () {
    document.body.style.backgroundColor = isChanged ? "" : "lightblue";
    isChanged = !isChanged;
};