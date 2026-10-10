const pages = [...document.querySelectorAll(".page")];
const dots = [...document.querySelectorAll(".progress-dot")];
const fallingLayer = document.getElementById("fallingLayer");
const rainButton = document.getElementById("rainButton");
const rainStatus = document.getElementById("rainStatus");

function showPage(pageId) {
  pages.forEach((page) => page.classList.toggle("active", page.id === pageId));
  const pageNumber = Number(pageId.replace("page", "")) - 1;
  dots.forEach((dot, index) => dot.classList.toggle("active", index <= pageNumber));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("openLetter").addEventListener("click", () => showPage("page2"));

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => showPage(button.dataset.next));
});

document.getElementById("restart").addEventListener("click", () => showPage("page1"));

const flowers = ["🌸", "🌺", "💗", "💕", "🌷", "💖", "✿", "❀", "💮"];

function makeRain(amount = 42) {
  for (let i = 0; i < amount; i++) {
    const item = document.createElement("span");
    item.className = "fall-item";
    item.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    item.style.setProperty("--x", `${Math.random() * 100}%`);
    item.style.setProperty("--size", `${16 + Math.random() * 19}px`);
    item.style.setProperty("--duration", `${4.8 + Math.random() * 4.8}s`);
    item.style.setProperty("--delay", `${Math.random() * 2.3}s`);
    item.style.setProperty("--drift", `${Math.round(Math.random() * 150 - 75)}px`);
    item.style.setProperty("--spin", `${Math.round(Math.random() * 520 - 260)}deg`);
    item.style.setProperty("--opacity", `${0.62 + Math.random() * 0.36}`);
    fallingLayer.appendChild(item);
    item.addEventListener("animationend", () => item.remove(), { once: true });
  }
}

rainButton.addEventListener("click", () => {
  makeRain(90);
  rainStatus.textContent = "یه بارون صورتی، فقط برای تو 🌸";
  window.setTimeout(() => { rainStatus.textContent = ""; }, 3200);
});

document.getElementById("finalRain").addEventListener("click", () => makeRain(70));

// بارش آرام و ملایم گل‌های صورتی در پس‌زمینه
makeRain(18);
window.setInterval(() => makeRain(5), 2300);
