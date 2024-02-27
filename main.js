let checkbox = document.querySelector("#checkbox");
let container = document.querySelector("#container");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    container.classList.add("active");
    document.body.classList.add("active");
  } else {
    container.classList.remove("active");
    document.body.classList.remove("active");
  }
})