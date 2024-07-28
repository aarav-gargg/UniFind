
const cardsContainer = document.querySelector(".container2");

cardsContainer.addEventListener("click", (e) => {
  const target = e.target.closest(".card1");

  if (!target) return;

  cardsContainer.querySelectorAll(".card1").forEach((card) => {
    card.classList.remove("active");
  });

  target.classList.add("active");
});
