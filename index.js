// Sticky navbar

// ====================================== //

// Navigation menu smaller devices

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

const imageWrapper = document.querySelector(".image-wrapper");
const imageItems = document.querySelectorAll(".image-wrapper > *");
const perView = 4;
let totalScroll = 0;
const delay = 4000;

// Clone the initial slides and append them to the end
for (let i = 0; i < perView; i++) {
  imageWrapper.insertAdjacentHTML("beforeend", imageItems[i].outerHTML);
}

let autoScroll = setInterval(scrolling, delay);

function scrolling() {
  const widthEl = document.querySelector(
    ".image-wrapper > :first-child"
  ).offsetWidth;

  // Increment totalScroll without resetting
  totalScroll += 0.5;

  imageWrapper.style.left = `-${totalScroll * widthEl}px`;
  imageWrapper.style.transition = "left .3s ease"; // Use the "ease" timing function

  // Check if we need to adjust the position
  if (totalScroll % perView === 0) {
    // Dynamically adjust the position to create a seamless loop
    imageWrapper.style.left = "0";
    setTimeout(() => {
      totalScroll = 0;
    }, 50);
  }
}

// /* PLANNERS SECTION */ Making the images change

let img_slider = document.querySelector("#img-slider"); // thats a div in this div there is an image
let changer_img = document.querySelector(".changer-img"); // thats a div in this div there is an image

let slides = [
  "/client/images/apenas-detalhes-planejamento-inicio-2-scaled.jpg",
  "/client/images/apenas-detalhes-planejamento-inicio-3-scaled.jpg",
];

let start = 0;

const sliderFunction = () => {
  changer_img.src = slides[start];
  start = (start + 1) % slides.length;
};

setInterval(sliderFunction, 3000);

// Dynamic reviews changing with slide

let about_text_container = document.querySelector(".about-text-container");
let arrow1 = document.querySelector("#arrow-carousel1");
let arrow2 = document.querySelector("#arrow-carousel2");
let review = document.querySelector(".review");
let names = document.querySelector(".name");

let change_text = [
  "These free planners are perfect. Every year it seems like monthly messages were made for me S2. Perfect for organization. Creators are to be congratulated. Just gratitude for making it available every year with such care. Thanks",
  "Congratulations on making your beautiful work available to us. I'm addicted to your planners, I'll be using them for the third time in a row. I love all the details! Thank you very much, Peace and light!",
];

let change_name = ["VERSACHE", "DIABLO"];

let currentTextIndex = 0;
let personNameIndex = 0;

const changeTextFunction = () => {
  about_text_container.style.transform = "translateX(-200%)";

  setTimeout(() => {
    about_text_container.style.transform = "translateX(0%)";

    review.innerText = change_text[currentTextIndex];
    currentTextIndex = (currentTextIndex + 1) % change_text.length;

    names.innerText = change_name[personNameIndex];
    personNameIndex = (personNameIndex + 1) % change_name.length;
  }, 250);
};

setInterval(changeTextFunction, 5000);

arrow1.addEventListener("click", function () {
  about_text_container.style.transform = "translateX(200%)";
  setTimeout(() => {
    about_text_container.style.transform = "translateX(0%)";
    currentTextIndex =
      (currentTextIndex - 1 + change_text.length) % change_text.length;
    review.innerText = change_text[currentTextIndex];

    personNameIndex =
      (personNameIndex - 1 + change_name.length) % change_name.length;
    names.innerText = change_name[personNameIndex];
  }, 250);
});

arrow2.addEventListener("click", function () {
  about_text_container.style.transform = "translateX(-200%)";
  setTimeout(() => {
    about_text_container.style.transform = "translateX(0%)";

    currentTextIndex = (currentTextIndex + 1) % change_text.length;
    review.innerText = change_text[currentTextIndex];

    personNameIndex = (personNameIndex + 1) % change_name.length;
    names.innerText = change_name[personNameIndex];
  }, 250);
});
