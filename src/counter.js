export const counter = (decreasingTime) => {
  const countingContainer = document.createElement("div");
  countingContainer.innerText = decreasingTime;

  const intervalId = setInterval(() => {
    decreasingTime--;
    if (decreasingTime === 0) {
      clearInterval(intervalId), alert("time is up!");
    }
  }, 1000);
  return countingContainer;
};
