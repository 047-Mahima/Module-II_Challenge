// Select the textarea and button elements
const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

// Add an event listener to the button for conversion
button.addEventListener("click", () => {
  // Get the input value and split it into lines
  const inputText = textarea.value;
  const lines = inputText.split("\n");

  // Loop through each line and perform the conversion
  lines.forEach((line) => {
    // Split the line into words using underscore as the separator
    const words = line.trim().split("_");

    // Create the camelCase version of the variable name
    const camelCaseName = words
      .map((word, index) =>
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");

    // Log the camelCase variable name to the console
    console.log(camelCaseName);
  });
});
