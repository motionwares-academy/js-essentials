let paragraphSelected = document.querySelector(".paragraphToSelect");
let headerSelected = document.querySelector("#header");

function changeParagraphText() {
  paragraphSelected.textContent = "This is the new content for the paragaraph";
}

function dynamicallyChangeParagraphText(paragaraphValue, headerValue) {
  paragraphSelected.textContent = paragaraphValue;
  headerSelected.textContent = headerValue;
}

function changeColor() {
  paragraphSelected.style.color = "red";
}
