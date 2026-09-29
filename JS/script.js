const video = document.querySelector("video");
const proximo = document.querySelector("#proximo");
const anterior = document.querySelector("#anterior");

proximo.addEventListener("click", () => {
  carrossel.scrollBy({
    left: 216,
    behavior: "smooth"
  });
});

anterior.addEventListener("click", () => {
  carrossel.scrollBy({
    left: -216,
    behavior: "smooth"
  });
});
