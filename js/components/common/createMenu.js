export default function createMenu() {
  const menuContainer = document.querySelector(".menu-container");

  if (localStorage.getItem("user") === null) {
    menuContainer.innerHTML = "";
  } else {
    menuContainer.innerHTML = `
    
    <div class="admin-menu">
    <li> <a href="admin.html" class="nav-link admin-link">Add product</a></li>
    <li> <a href="edit.html" class="nav-link admin-link">Update product</a></li>
      </div>  
    `;
  }
}

export function createMenuIndex() {
  const menuContainer = document.querySelector(".menu-container");

  if (localStorage.getItem("user") === null) {
    menuContainer.innerHTML = "";
  } else {
    menuContainer.innerHTML = `
    
    <div class="admin-menu">
    <li> <a href="/admin/admin.html" class="nav-link admin-link">Add product</a></li>
    <li> <a href="/admin/edit.html" class="nav-link admin-link">Update product</a></li>
      </div>  
    `;
  }
}
