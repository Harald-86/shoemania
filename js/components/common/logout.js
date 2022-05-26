const logOutBtn = document.querySelector("#logout-btn");

export function logout() {
  logOutBtn.addEventListener("click", doLogOut);
}

function doLogOut() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  confirm("are you sure you want to log out?");
  location.href = "../../index.html";
}
