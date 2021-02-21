const d = document;

d.addEventListener("DOMContentLoaded", () => {
  handleHamburguerButton();
});

const handleHamburguerButton = () => {
  const $button = d.querySelector(".hamburguer");
  const $menu = d.querySelector(".menu");

  d.addEventListener("click", (e) => {
    if (e.target === $button) {
      $menu.classList.toggle("menu--show");
    }
  });
};
