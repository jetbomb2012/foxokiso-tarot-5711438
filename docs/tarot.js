document.addEventListener("DOMContentLoaded", function () {
  const cards = ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor"];
  const drawButton = document.createElement("button");
  drawButton.textContent = "抽一張牌";
  drawButton.style.padding = "12px 20px";
  drawButton.style.fontSize = "1.2em";
  drawButton.style.marginTop = "20px";
  document.body.appendChild(drawButton);

  drawButton.onclick = function () {
    const result = cards[Math.floor(Math.random() * cards.length)];
    const display = document.createElement("h2");
    display.textContent = `你抽到的是：${result}`;
    display.style.color = "#ff6a00";
    document.body.appendChild(display);
  };
});
