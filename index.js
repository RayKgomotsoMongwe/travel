document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("see-more-btn");
  const hiddenCards = document.querySelectorAll(".cards .hidden");
  let expanded = false;

  btn.addEventListener("click", () => {
    if (!expanded) {
      // Reveal one by one
      hiddenCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("show");
          card.classList.remove("hidden");
        }, index * 150); // 150ms delay between cards
      });
      btn.textContent = "See Less";
      expanded = true;
    } else {
      // Hide one by one (reverse order for nicer effect)
      Array.from(hiddenCards).reverse().forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("hidden");
          card.classList.remove("show");
        }, index * 150);
      });
      btn.textContent = "See More";
      expanded = false;
    }
  });
});

