const grid = document.querySelector("#grid");
const slider = document.querySelector("#slider");
const sliderInfo = document.querySelector("#sliderInfo");
const gridBox = document.createElement("div");
const resetButton = document.querySelector("#reset");
const unicornMode = document.querySelector("#unicorn");

let gridArray = [];
let temp = "";

slider.addEventListener("input", () => {
  showSliderValue();
  createGrid(slider.value);
});

resetButton.addEventListener("click", () => {
  resetGrid(slider.value);
});

function showSliderValue() {
  sliderInfo.innerText = `Grid size: ${slider.value} x ${slider.value}`;
}

function createGrid(value) {
  gridArray = [];
  gridSize(value);
  value = value * value;
  for (i = 0; i < value; i++) {
    gridArray.push(`<div class="gridBox" id="box${i}"></div>`);
  }
  grid.innerHTML = gridArray.join("");
  setBoxStyle(value);
}

function gridSize(value) {
  temp = "";
  for (i = 0; i < value; i++) {
    temp = temp + "auto ";
  }
  grid.style.gridTemplateColumns = temp;
  grid.style.gridTemplateRows = temp;
}

function setBoxStyle(value) {
  let counter = document.querySelectorAll(".gridBox").length;
  for (i = 0; i < value; i++) {
    let j = document.querySelector(`#box${i}`);
    //set size of each box
    j.style.minWidth = `${500 / counter}px`;
    j.style.minHeight = `${500 / counter}px`;
    j.onmouseover = (e) => {
      if (!unicornMode.checked) {
        e.target.style.backgroundColor = "white";
      } else {
        e.target.style.backgroundColor = `#${Math.floor(
          Math.random() * 16777215
        ).toString(16)}`;
      }
      j.onclick = (e) => {
        if (!unicornMode.checked) {
          e.target.style.backgroundColor = "white";
        } else {
          e.target.style.backgroundColor = `#${Math.floor(
            Math.random() * 16777215
          ).toString(16)}`;
        }
      };
    };
  }
}

function resetGrid(value) {
  value = value * value;
  for (i = 0; i < value; i++) {
    let j = document.querySelector(`#box${i}`);
    j.style.backgroundColor = "";
  }
}
