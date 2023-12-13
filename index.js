let hamburger_icon = document.querySelector(".hamburger-icon");
let hamburger_items = document.querySelector(".hamburger-items");
let close_icon = document.querySelector("#close-icon");
let overlay = document.querySelector("#overlay");

hamburger_icon.addEventListener("click", () => {
  hamburger_items.style.display = "block";
  close_icon.classList.add("active");
  overlay.classList.add("active");
});

close_icon.addEventListener("click", () => {
  hamburger_items.style.display = "none";
  close_icon.classList.remove("active");
  overlay.classList.remove("active");
});

// Making sure you can click anywhere on the screen to close
window.addEventListener("click", (e) => {
  if (e.target === overlay) {
    hamburger_items.style.display = "none";
    close_icon.classList.remove("active");
    overlay.classList.remove("active");
  }
});

// Automatic slider
