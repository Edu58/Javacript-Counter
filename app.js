const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.getElementById("num")
const reset = document.getElementById("reset")

let num = 0;

add.addEventListener('click', () => {
  number.innerText = num += 1;
})

minus.addEventListener("click", () => {
  number.innerText = num -= 1;
});
