let $ = document;
let headerTitle = $.getElementById("hTitle");
let headerElem = $.getElementById("dHeader");
let noteElem = $.getElementById("note");
let nameElem = $.getElementById("name");
let upBtn = $.getElementById("up-btn");
let headerImgData = [
  "./imgs/header.img.1.jpg",
  "./imgs/header.img.2.jpg",
  "./imgs/header.img.3.jpg",
];
let sentencesData = [
  "`SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGANA ALIQUA EGESTAS PURUS VIVERA ASSUMCAN IN NISL NISI`",
  "`IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT`",
  "`LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT`",
];
let nameData = ["NOEL FIELDING", "JANE DOE", "MAGGY SCHOT"];
let currentImgIndex = 1;
headerElem.style.backgroundImage = "url(./imgs/header.img.1.jpg)";

window.addEventListener("load", function () {
  setInterval(function () {
    headerElem.style.backgroundImage = `url(${headerImgData[currentImgIndex]})`;
    currentImgIndex = (currentImgIndex + 1) % headerImgData.length; // Cycle through images
  }, 4000);
});
window.addEventListener("load", function () {
  headerTitle.style.opacity = "1";
  headerTitle.style.transform = "translateY(0)";
});
window.addEventListener("load", function () {
  let currentNoteIndex = 0;
  let currentNameIndex = 0;

  setInterval(function () {
    nameElem.style.opacity = "1";
    noteElem.style.opacity = "1";
    noteElem.innerHTML = sentencesData[currentNoteIndex];
    nameElem.innerHTML = nameData[currentNameIndex];
    currentNameIndex++;
    currentNoteIndex++;
    if (
      currentNameIndex == nameData.length &&
      currentNoteIndex == sentencesData.length
    ) {
      currentNameIndex = 0;
      currentNoteIndex = 0;
    }
    setTimeout(() => {
      nameElem.style.opacity = "0";
      noteElem.style.opacity = "0";
    }, 3750);
  }, 4000);
});
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 800) {
    upBtn.classList.remove("opacity-0");
  } else {
    upBtn.classList.add("opacity-0");
  }
});
upBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
