function validateForm() {
  let isValid = true;

  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();
  const errorName = document.getElementById("errorName");

  if (!name) {
    errorName.hidden = false;
    nameInput.style.border = "2px solid red";
    isValid = false;
  } else if (name.toLowerCase() === "ironhack") {
    alert("You cannot be Ironhack, because I am Ironhack.");
    isValid = false;
  } else {
    errorName.hidden = true;
    nameInput.style.border = "none";
  }

  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  const errorEmail = document.getElementById("errorEmail");

  if (!email) {
    errorEmail.hidden = false;
    emailInput.style.border = "2px solid red";
    isValid = false;
  } else {
    errorEmail.hidden = true;
    emailInput.style.border = "none";
  }

  const phoneInput = document.getElementById("phone");
  const phone = phoneInput.value.trim();
  const errorPhone = document.getElementById("errorPhone");

  if (!phone) {
    errorPhone.hidden = false;
    phoneInput.style.border = "2px solid red";
    isValid = false;
  } else {
    errorPhone.hidden = true;
    phoneInput.style.border = "none";
  }

  const messageInput = document.getElementById("message");
  const message = messageInput.value.trim();
  const errorMessageUser = document.getElementById("errorMessageUser");

  if (message.length < 5) {
    errorMessageUser.hidden = false;
    messageInput.style.border = "2px solid red";
    isValid = false;
  } else {
    errorMessageUser.hidden = true;
    messageInput.style.border = "none";
  }

  return isValid;
}

function sendForm() {
  if (validateForm()) {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";

    document.getElementById("form-container").reset();

    ["name", "email", "phone", "message"].forEach((id) => {
      document.getElementById(id).style.border = "none";
    });
  }
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}
