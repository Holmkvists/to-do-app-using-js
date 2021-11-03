let hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", hamburgerToggle);

function hamburgerToggle() {
  let myLinks = document.getElementById("myLinks");

  if (myLinks.style.display === "block") {
    myLinks.style.display = "none";
  } else {
    myLinks.style.display = "block";
  }
}
