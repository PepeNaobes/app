const userInput = document.getElementById("userInput");
const button = document.getElementById("button");
const lists = document.getElementById("lists");

function submitForms(event) {
  event.preventDefault();
  const paragraph = document.createElement("p");
  paragraph.textContent = userInput.value;
  paragraph.classList.add("added");

  lists.appendChild(paragraph);
  userInput.value = "";

  console.log("Newly created paragraph", paragraph);
}

// Event listeners
button.addEventListener("click", submitForms);
