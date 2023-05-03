const updateColors = () => {
  const red = document.querySelector(".red");
  const green = document.querySelector(".green");
  const blue = document.querySelector(".blue");
  const text = document.querySelector("#rgb");
  const bgColor = `rgb(${red.value},${green.value},${blue.value})`;
  document.body.style.background = bgColor;
  text.innerHTML = `rgb(${red.value},${green.value},${blue.value})`;
};

const copyContent = async () => {
  const text = document.querySelector("#rgb");
  try {
    await navigator.clipboard.writeText(text.innerText);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

document.querySelectorAll(".rangeSliders input").forEach((input) => {
  input.addEventListener("input", () => {
    updateColors();
  });
});

document.querySelector(".btn").addEventListener("click", () => {
  copyContent();
});
