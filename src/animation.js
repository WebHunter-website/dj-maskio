// AOS.init();

let firstHeading = document.getElementById("first-heading");

function isVisible(element) {
  let elementBox = element.getBoundingClientRect();

  if (elementBox.top <= window.innerHeight * 0.8) {
    return true;
  } else {
    return false;
  }
}

function scanDocument() {
  scanOffert();
  scanCards();
}

function scanOffert(){
  const sectionList = document.querySelectorAll(".hidden");
  sectionList.forEach((section, i) => {
    if (isVisible(section)) {
      console.log(i, ":", section.getBoundingClientRect().top);
      section.classList.remove("hidden");
    }
  });
}

function scanCards(){
  const cards = document.querySelectorAll(".zoom");
  cards.forEach((card, i) => {
    if (isVisible(card)) {
      card.classList.add("visible")
    }
  })
}

document.body.addEventListener("scroll", scanDocument);
