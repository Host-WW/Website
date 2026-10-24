const menuFilters = document.querySelectorAll(".category-tab");
const menuCards = document.querySelectorAll(".menu-card");
const menuGrid = document.querySelector(".menu-grid");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

menuFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.dataset.filter;
    menuFilters.forEach((button) => {
      const isActive = button === filter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    menuCards.forEach((card) => {
      card.hidden = category !== "all" && card.dataset.category !== category;
    });
    menuGrid.classList.toggle("has-filter", category !== "all");
  });
});

document.querySelectorAll("[data-order]").forEach((button) => {
  button.addEventListener("click", () => {
    const message = `Hi Wheatless Wonders! I'd like to order: ${button.dataset.order}`;
    window.open(`https://wa.me/923334503603?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("is-open", !isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");
  });
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
