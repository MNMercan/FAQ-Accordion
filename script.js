const items = document.querySelectorAll(".item-header");
const icons = document.querySelectorAll(".icon-toggle > img");
const iconPlus = "http://127.0.0.1:5500/assets/images/icon-plus.svg";
const iconMinus = "http://127.0.0.1:5500//assets/images/icon-minus.svg";
const toggleOpen = (event) => {
  const { currentTarget } = event;
  console.log(currentTarget.children);
  currentTarget.parentElement.classList.toggle("open");
  setTimeout(() => {
    currentTarget.children[1].src =
      currentTarget.children[1].src === iconPlus ? iconMinus : iconPlus;
    currentTarget.children[1].style.rotate = "90deg";

    console.log(currentTarget.children[1].style);
  }, 150);
};

const bindClickEvent = (target) => {
  console.log(target);
  target.addEventListener("click", toggleOpen);
};

items.forEach(bindClickEvent);
