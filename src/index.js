function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "Hold fast to dreams",
    autoStart: true,
    delay: 100,
  });
}

let searchSubmission = document.querySelector("#poemGenerator");
searchSubmission.addEventListener("submit", generatePoem);
