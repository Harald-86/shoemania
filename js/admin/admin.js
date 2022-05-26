import { baseUrl } from "../settings/api.js";
import { saveToken, saveUser } from "./storage/storage.js";
import displayMessage from "../components/common/displayMessage.js";
import createMenu from "../components/common/createMenu.js";
import { logout } from "../components/common/logout.js";

const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".message-container");
createMenu();
logout();
/// Form validation + login

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length === 0 || passwordValue.length === 0) {
    return displayMessage("warning", "Invalid username or password", ".message-container");
  }

  doLogin(usernameValue, passwordValue);
}

async function doLogin(username, password) {
  const url = baseUrl + "auth/local";
  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);

    if (json.user) {
      saveToken(json.jwt);
      saveUser(json.user);
      createMenu();
    }

    if (json.error) {
      displayMessage("warning", "Invalid username or password", ".message-container");
    }
  } catch (error) {
    console.log(error);
  }
}
