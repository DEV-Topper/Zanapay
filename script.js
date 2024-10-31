const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const fileInput = document.getElementById("resume");
const fileName = document.getElementById("file-name");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

fileInput.addEventListener("change", (e) => {
  if (e.target.files.length > 0) {
    fileName.textContent = e.target.files[0].name;
  } else {
    fileName.textContent = "Upload Resume";
  }
});
