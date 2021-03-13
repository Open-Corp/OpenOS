const version = "0.0.1z";

list =
[
"Création du systeme.",
"Ajout du systeme de fenêtre.",
"Ajout du systeme d'identifiant de fenêtre.",
"Création du logo de chargement du site."
]


function menu(menuName) {
  const menuBar = document.querySelector("#section2");
  if (menuName === "changelog") {
    let news;
    for (let i = 0; i !== list.length; i++) {
      if (news === undefined) news = "<li>" + list[i] + "</li>\n";
      else news += "<li>" + list[i] + "</li>\n";
    }

    menuBar.innerHTML = `
    <h1>Journal des modifications.</h1>
    <hr>
    <ul>
      ` +
      news
      + `
    </ul>
    `
  }
  if (menuName === "about") {
    menuBar.innerHTML = `
    <h1>A propos d'Open OS...</h1>
    <hr>
    <p>Open OS est un systeme d'exploitation (en cours de creation) disponible sur le web ! Il vous suffit d'un navigateur pour le faire fonctionner.</p>
    `
  }
  if (menuName === "use") {
    menuBar.innerHTML = `
    <h1>Comment l'utiliser ?</h1>
    <hr>
    <p>Pour utiliser Open OS, c'est un petit peu plus complexe que de simplement cliquer sur une icone !</p>
    <h2>1.</h2>
    <p>Télécharger le fichier zip.<br>(<= C'est juste ici !)</p>
    <h2>2.</h2>
    <p>Allez retrouver le fichier Téléchargé sur votre ordinateur et décompressez le.</p>
    <h2>3.</h2>
    <p>Ouvrer le dossier "OpenOS" et cliquer sur "index.html"</p>
    `
  }
  if (menuName === "contact") {
    menuBar.innerHTML = `
    <h1>Nous contacter.</h1>
    <hr>
    <p>Vous pouvez nous contacter :</p>
    <br>
    <a href="https://discord.gg/TaSbZGf9CB" style="color: #5C5C5C;">Par Discord</a>
    <a href="mailto:contact.openos@gmail.com" style="color: #5C5C5C;">Ou par Mail</a>
    `
  }
  if (menuName === "download") {
    menuBar.innerHTML = `
    <h1>Télécharger OPEN OS.</h1>
    <hr>
    <p>Voulez vous télécharger :</p>
    <br>
    <a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/Open-Corp/open-os/blob/OS/OpenOS.html" download style="color: #5C5C5C;">Le launcher</a>
    <a href="https://raw.githubusercontent.com/Open-Corp/open-os/OS/OpenOS.html" download style="color: #5C5C5C;">Ou la librairie</a>
    `
  }
  menuBar.innerHTML += `
  <nav>
    <a href="#section2" onclick="menu('about')">A propos</a>
    <a href="#section2" onclick="menu('use')">Utilisation</a>
    <a href="#section2" onclick="menu('changelog')">Changements</a>
    <a href="#section2" onclick="menu('contact')">Contact</a>
  </nav>
  `
}
menu('changelog');

const verP = document.querySelector(".ver");
verP.innerHTML = "Version " + version;
