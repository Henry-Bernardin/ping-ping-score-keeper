const updateScoreOne = document.querySelector("#playerOneScore");
const updateScoreTwo = document.querySelector("#playerTwoScore");
const addOneToPlayerOneScore = document.querySelector("#playerOneButton");
const addOneToPlayerTwoScore = document.querySelector("#playerTwoButton");
const resetScore = document.querySelector("#resetButton");
let value1 = Number(updateScoreOne.textContent) || 0;
let value2 = Number(updateScoreTwo.textContent) || 0;

addOneToPlayerOneScore.addEventListener("click", function () {
  value1 += 1;
  updateScoreOne.textContent = value1;
});

addOneToPlayerTwoScore.addEventListener("click", function () {
  value2 += 1;
  updateScoreTwo.textContent = value2;
});

resetScore.addEventListener("click", function () {
  value1 = 0;
  value2 = 0;
  updateScoreOne.textContent = value1;
  updateScoreTwo.textContent = value2;
});
