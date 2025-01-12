function displayPoem(event) {
  event.preventDefault();

  function generatePoem(response) {
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 100,
    });
  }

  let instructionElement = document.querySelector("#instruction");
  let key = "c83b0ec93of1f1cda798a46704ft55fb";
  let prompt = `Generate a beautiful poem about ${instructionElement.value}`;
  let context = `You are an expert poet who only writes poems in 3 lines, include ${instructionElement.value} in the poem and separate each line with a <br />.`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  axios.get(apiUrl).then(generatePoem);
}

let searchSubmission = document.querySelector("#poemGenerator");
searchSubmission.addEventListener("submit", displayPoem);
