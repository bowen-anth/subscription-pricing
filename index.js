const itemOne = document.querySelector(".one");
const itemTwo = document.querySelector(".two");
const checkmarkOne = document.querySelector(".checkmark.one");
const checkmarkTwo = document.querySelector(".checkmark.two");

itemOne.addEventListener("click", () => {
  itemOne.classList.add("selected");
  itemTwo.classList.remove("selected");
  checkmarkOne.classList.add("selected");
  checkmarkTwo.classList.remove("selected");
});

itemTwo.addEventListener("click", () => {
  itemTwo.classList.add("selected");
  itemOne.classList.remove("selected");
  checkmarkTwo.classList.add("selected");
  checkmarkOne.classList.remove("selected");
});
