const version = "0.0.1z";

list =
[
"Création du systeme.",
"Ajout du systeme de fenêtre.",
"Ajout du systeme d'identifiant de fenêtre.",
"Création du logo de chargement du site."
]


function menu(menuName) {
  const menuBar = document.querySelector(".section2");
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
  menuBar.innerHTML += `
  <nav>
    <a onclick="menu('about')">A propos</a>
    <a onclick="menu('use')">Utilisation</a>
    <a onclick="menu('changelog')">Changements</a>
  </nav>
  `
}
menu('changelog');

const verP = document.querySelector(".ver");
verP.innerHTML = "Version " + version;

const dlBtn = document.querySelector(".dl-btn");
dlBtn.href = `os-dl/OpenOS-${version}.zip`;
