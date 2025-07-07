function updateTotal() {
  const selectedBox = document
    .querySelector(".bogo-radio:checked")
    .closest(".bogo-box");
  const price = selectedBox.dataset.price;
  document.getElementById("bogo-total").textContent = `$${parseFloat(
    price
  ).toFixed(2)} USD`;
}

document.querySelectorAll(".bogo-header").forEach((header) => {
  header.addEventListener("click", function (e) {
    if (e.target.classList.contains("most-popular-badge")) return;
    const box = this.closest(".bogo-box");
    if (box.classList.contains("open")) return;
    document
      .querySelectorAll(".bogo-box")
      .forEach((b) => b.classList.remove("open"));
    box.classList.add("open");
    box.querySelector(".bogo-radio").checked = true;
    updateTotal();
  });
});

document.querySelectorAll(".bogo-radio").forEach((radio) => {
  radio.addEventListener("change", function () {
    if (this.checked) {
      document
        .querySelectorAll(".bogo-box")
        .forEach((b) => b.classList.remove("open"));
      this.closest(".bogo-box").classList.add("open");
      updateTotal();
    }
  });
});

updateTotal();
