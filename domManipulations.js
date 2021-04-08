let paragraphSelected = document.querySelector(".paragraphToSelect");

function changeParagraphText() {
  paragraphSelected.textContent = "This is the new content for the paragaraph";
}

function dynamicallyChangeParagraphText(newValue) {
  paragraphSelected.textContent = newValue;
}
