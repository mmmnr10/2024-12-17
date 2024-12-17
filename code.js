// Uppgift 1.

const closeBtn = document.getElementById("closeModalBtn");
const openModalBtn = document.getElementById("openModalBtn");
const text = document.querySelector(".description");
const modalTitle = document.getElementById("modalTitle");

openModalBtn.style.display = "block";

closeBtn.addEventListener("click", () => {
  text.style.display = "none";
  text.setAttribute("aria-hidden", "false");
  text.setAttribute("aria-modal", "false");

  openModalBtn.style.display = "block";
  closeBtn.style.display = "none";
  openModalBtn.focus();
});

openModalBtn.addEventListener("click", () => {
  text.style.display = "block";
  text.setAttribute("aria-hidden", "true");
  text.setAttribute("aria-modal", "true");

  openModalBtn.style.display = "none";
  closeBtn.style.display = "block";
  closeBtn.focus();
});

// Uppgift 2.
const openDialogBtn = document.getElementById("openDialogBtn");
const dialogText = document.getElementById("accessibleDialog");
const closeDialogBtn = document.getElementById("closeDialogBtn");

openDialogBtn.addEventListener("click", () => {
  dialogText.showModal();
  closeDialogBtn.focus();
});

closeDialogBtn.addEventListener("click", () => {
  dialogText.close();
  openDialogBtn.focus();
});

closeDialogBtn.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    dialogText.close();
    openDialogBtn.focus();
  }
});

// Uppgift 3.

const menuButton = document.getElementById("menuButton");
const menuContent = document.getElementById("menuContent");
const closeMenuBtn = document.getElementById("closeMenuBtn");

menuButton.addEventListener("click", () => {
  menuContent.style.display = "block";
  menuButton.style.display = "none";
  closeMenuBtn.style.display = "block";
  closeMenuBtn.focus();
});

function closeButtonFunction() {
  menuContent.style.display = "none";
  menuButton.style.display = "block";
  closeMenuBtn.style.display = "none";
  menuButton.focus();
}

closeMenuBtn.addEventListener("click", () => {
  closeButtonFunction();
});

closeMenuBtn.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeButtonFunction();
  }
});

menuContent.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeButtonFunction();
  }
});