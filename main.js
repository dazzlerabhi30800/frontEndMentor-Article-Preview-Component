const bioWrapper = document.querySelector(".bio--wrapper");
const shareBtn = document.querySelector(".share--icon");
let click = false;

shareBtn.addEventListener("click", () => {
  if (!click) {
    bioWrapper.classList.add("active");
    click = true;
  } else {
    bioWrapper.classList.remove("active");
    click = false;
  }
});
