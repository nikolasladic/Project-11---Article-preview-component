"use strict";

const shareButton = document.querySelector(".share-button");
const shareButtonActive = document.querySelector(".share-icon-container");
const shareContainer = document.querySelector(".share-container");

shareButton.addEventListener("click", () => {
  shareContainer.classList.toggle("display-none");
});

shareButtonActive.addEventListener("click", () => {
  shareContainer.classList.toggle("display-none");
});
