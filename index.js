const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");

const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

const leftMouse = document.getElementById("leftMouse");
const rightMouse = document.getElementById("rightMouse");

startBtn.addEventListener("click", () => {
  document.addEventListener("keydown", handleDown);
  document.addEventListener("keyup", handleUp);
  document.addEventListener("mousedown", mouseDown);
  document.addEventListener("mouseup", mouseUp);
});

stopBtn.addEventListener("click", () => {
  document.removeEventListener("keydown", handleDown);
  document.removeEventListener("keyup", handleUp);
  document.removeEventListener("mousedown", mouseDown);
  document.removeEventListener("mouseup", mouseUp);
  logDiv.textContent = "";
  stateDiv.textContent = " ";
});

function handleDown(e) {
  logDiv.textContent = `key ${e.key} pressed down`;
  stateDiv.textContent = `key is down`;
}

function handleUp(e) {
  logDiv.textContent = `key ${e.key} released up`;
  stateDiv.textContent = `key is up`;
}

function mouseDown(e) {
  if (e.button == 0) {
    console.log("Left mouse button is clicked");
    leftMouse.style.backgroundColor = "green";
    leftMouse.style.color = "white";
  } else {
    console.log("Right button is clicked");
    rightMouse.style.backgroundColor = "blue";
    rightMouse.style.color = "white";
  }
}
function mouseUp(e) {
  if (e.button == 0) {
    console.log("Left mouse button is released");
    leftMouse.style.backgroundColor = "white";
    leftMouse.style.color = "black";
  } else {
    console.log("Right button is released");
    rightMouse.style.backgroundColor = "white";
    rightMouse.style.color = "black";
  }
}
