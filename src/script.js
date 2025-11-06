function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "La la la this is a happy go lucky poem",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
