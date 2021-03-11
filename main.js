function menu(menuName) {
  const menuBar = document.querySelector(".section2");
  if (menuName === "changelog") {
    menuBar.innerHTML = `
    <h1>Journal des modifications.</h1>
    <hr>
    <ul>

    </ul>
    `
  }
  if (menuName === "about") {
    menuBar.innerHTML = `
    <h1>About.</h1>
    `
  }
  if (menuName === "use") {
    menuBar.innerHTML = `
    <h1>Use.</h1>
    `
  }
  menuBar.innerHTML += `
  <nav>
    <a onclick="menu('about')">A propos</a>
    <a onclick="menu('use')">Utilisation</a>
    <a onclick="menu('changelog')">Changements</a>
  </nav>
  `
}
menu('changelog');