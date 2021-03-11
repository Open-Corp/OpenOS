const os =
{
	"user":
	{
		"app": "test"
	},
	"system":
	{
		"window":
		{
			"create":
				(winContent, width = 300, height = 300, posX, posY, winId, features) => {
					if (os.system.config.currentId.indexOf(winId) !== -1) {
						console.error("Une fenêtre avec le même ID existe déjà.");
						os.system.window.create(`
          <div style="background-color: #ff6868;
                      width: 100%;
                      height: 100%;">
          <span style="font-size:100px;
                      position: absolute;
                      left: 50%;
                      top: 50%;
                      transform: translate(-150%, -50%);
                      color: #fff;">&#9888;</span>
          <h2 style="color: #fff;
                     position: absolute;
                     left: 60%;
                     top: 50%;
                     transform: translate(-50%, -50%);">Une erreur<br>est survenue.<h2>
          </div>
          `, 500, 200, "", "!resizable");
						return;
					}
					if (!winContent) {
						console.error("Veillez spécifier un contenu.");
						os.system.window.create(`
          <div style="background-color: #ff6868;
                      width: 100%;
                      height: 100%;">
          <span style="font-size:100px;
                      position: absolute;
                      left: 50%;
                      top: 50%;
                      transform: translate(-150%, -50%);
                      color: #fff;">&#9888;</span>
          <h2 style="color: #fff;
                     position: absolute;
                     left: 60%;
                     top: 50%;
                     transform: translate(-50%, -50%);">Une erreur<br>est survenue.<h2>
          </div>
          `, 500, 200, "", "!resizable");
						return;
					}
					if (typeof (winContent) !== "string") {
						console.error("Veuillez spécifier le contenu entre guillemets");
						os.system.window.create(`
          <div style="background-color: #ff6868;
                      width: 100%;
                      height: 100%;">
          <span style="font-size:100px;
                      position: absolute;
                      left: 50%;
                      top: 50%;
                      transform: translate(-150%, -50%);
                      color: #fff;">&#9888;</span>
          <h2 style="color: #fff;
                     position: absolute;
                     left: 60%;
                     top: 50%;
                     transform: translate(-50%, -50%);">Une erreur<br>est survenue.<h2>
          </div>
          `, 500, 200, "", "!resizable");
						return;
					}
					if (width < os.system.config.windowMinSize || width > window.innerWidth) {
						console.error("Veuiller donner une valeur de largeur plus grande que 149 et plus petite que " + window.innerWidth + ".");
						os.system.window.create(`
          <div style="background-color: #ff6868;
                      width: 100%;
                      height: 100%;">
          <span style="font-size:100px;
                      position: absolute;
                      left: 50%;
                      top: 50%;
                      transform: translate(-150%, -50%);
                      color: #fff;">&#9888;</span>
          <h2 style="color: #fff;
                     position: absolute;
                     left: 60%;
                     top: 50%;
                     transform: translate(-50%, -50%);">Une erreur<br>est survenue.<h2>
          </div>
          `, 500, 200, "", "!resizable");
						return;
					}
					if (height < os.system.config.windowMinSize || height > window.innerHeight) {
						console.error("Veuiller donner une valeur de hauteur plus grande que 149 et plus petite que " + window.innerHeight + ".");
						os.system.window.create(`
          <div style="background-color: #ff6868;
                      width: 100%;
                      height: 100%;">
          <span style="font-size:100px;
                      position: absolute;
                      left: 50%;
                      top: 50%;
                      transform: translate(-150%, -50%);
                      color: #fff;">&#9888;</span>
          <h2 style="color: #fff;
                     position: absolute;
                     left: 60%;
                     top: 50%;
                     transform: translate(-50%, -50%);">Une erreur<br>est survenue.<h2>
          </div>
          `, 500, 200, "", "!resizable");
						return;
					}
					if (!winId) {
						winId = "id" + os.system.config.idMaker;
					}
					if (winId.search(/^[a-z]+([0-9]|[a-z])*/i) === -1) {
						console.error("Veuillez spécifier un ID composé de lettres et de lettres seulement (et commencant par une lettre).");
						os.system.window.create(`
          <div style="background-color: #ff6868;
                      width: 100%;
                      height: 100%;">
          <span style="font-size:100px;
                      position: absolute;
                      left: 50%;
                      top: 50%;
                      transform: translate(-150%, -50%);
                      color: #fff;">&#9888;</span>
          <h2 style="color: #fff;
                     position: absolute;
                     left: 60%;
                     top: 50%;
                     transform: translate(-50%, -50%);">Une erreur<br>est survenue.<h2>
          </div>
          `, 500, 200, "", "!resizable");
						return;
					}
					if (typeof (winId) !== "string") {
						console.error("Veillez spécifier l'ID entre guillemets.");
						os.system.window.create(`
          <div style="background-color: #ff6868;
                      width: 100%;
                      height: 100%;">
          <span style="font-size:100px;
                      position: absolute;
                      left: 50%;
                      top: 50%;
                      transform: translate(-150%, -50%);
                      color: #fff;">&#9888;</span>
          <h2 style="color: #fff;
                     position: absolute;
                     left: 60%;
                     top: 50%;
                     transform: translate(-50%, -50%);">Une erreur<br>est survenue.<h2>
          </div>
          `, 500, 200, "", "!resizable");
						return;
					}

					os.system.config.currentId.push(winId);
					os.system.config.currentWin = winId;
					os.system.config.idMaker++;

					var creatingWin = document.createElement("div");

					creatingWin.style.width = width + "px";
					creatingWin.style.height = height + "px";

					creatingWin.innerHTML = "<iframe frameborder='0' style='width: 100%; height: 100%;' src='data:text/html, " + winContent + `'>`;

					creatingWin.classList.add("window");
					creatingWin.id = winId;

					document.body.append(creatingWin);

					let createdWin = document.querySelector(`.window#${winId}`);

					var creatingSideBar = document.createElement("div");

					creatingSideBar.classList.add("sideBar");
					creatingSideBar.id = winId;
					creatingSideBar.onmousedown = function () { os.system.select(this); };

					createdWin.appendChild(creatingSideBar);

					let createdSideBar = document.querySelector(`.sideBar#${winId}`);

					var creatingCloseBtn = document.createElement("div");

					creatingCloseBtn.classList.add("closeBtn");
					creatingCloseBtn.id = winId;

					creatingCloseBtn.innerHTML = "&#10005";

					creatingCloseBtn.addEventListener("click", () => {
						os.system.window.close(winId);
					});

					createdSideBar.appendChild(creatingCloseBtn);

					if (!features || features.search(/!resizable/) === -1) {
						var creatingResizer = document.createElement("div");

						creatingResizer.classList.add("resizer");
						creatingResizer.id = winId;

						createdWin.appendChild(creatingResizer);
					}

					os.system.dragBar(document.querySelector(`.sideBar#${winId}`), document.querySelector(`.window#${winId}`));

					return console.log("Executé avec succès.");
				},
			"close":
				(winId) => {
					if (typeof (winId) !== "string") {
						return console.error("Veillez spécifier l'ID entre guillemets.");
					}
					let closingWin = document.querySelector(`.window#${winId}`);
					if (os.system.config.currentId.indexOf(winId) !== -1) {
						closingWin.remove();
						const index = os.system.config.currentId.indexOf(winId);

						if (index > -1) {
							os.system.config.currentId.splice(index, 1);
						}
						console.log("Executé avec succès.");
					}
					else {
						console.error("Cette ID n'existe pas.");
						return;
					}
				},
			"list":
				() => {
					console.log(os.system.config.currentId);
				}
		},
		"dragBar":
			(elem, elem2) => {
				elem.addEventListener("mousedown", mousedown);

				function mousedown(e) {
					let prevX = e.clientX;
					let prevY = e.clientY;

					window.addEventListener("mousemove", mousemove);
					window.addEventListener("mouseup", mouseup);


					function mousemove(e) {
						let newX = prevX - e.clientX;
						let newY = prevY - e.clientY;

						const rect = elem.getBoundingClientRect();

						elem2.style.left = rect.left - newX + "px";
						elem2.style.top = rect.top - newY + "px";

						prevX = e.clientX;
						prevY = e.clientY;
					}

					function mouseup() {
						window.removeEventListener("mouseup", mouseup);
						window.removeEventListener("mousemove", mousemove);
					}
				}

				const resizers = document.querySelectorAll(".resizer");
				let cResizer;

				for (let resizer of resizers) {
					resizer.addEventListener("mousedown", mousedown);

					function mousedown(e) {
						cResizer = e.target;

						prevX = e.clientX;
						prevY = e.clientY;

						window.addEventListener("mousemove", mousemove);
						window.addEventListener("mouseup", mouseup);

						function mousemove(e) {
							const rect = elem2.getBoundingClientRect();

							elem2.style.width = rect.width - (prevX - e.clientX) + "px";
							elem2.style.height = rect.height - (prevY - e.clientY) + "px";

							prevX = e.clientX;
							prevY = e.clientY;
						}
						function mouseup() {
							window.removeEventListener("mousemove", mousemove);
							window.removeEventListener("mouseup", mouseup);
						}
					}
				}
			},
		"select":
			(elem) => {
				if (os.system.config.selected !== null) {
					os.system.config.selected.classList.remove("current");
					try {
						document.querySelector(`.window#${os.system.config.selected.id}`).style.zIndex = null;
					} catch { };
				}
				os.system.config.selected = elem;
				os.system.config.selected.classList.add("current");
				document.querySelector(`.window#${os.system.config.selected.id}`).style.zIndex = "1";
				document.title = "Open OS - " + os.system.config.currentWin;
			},
		"cursorMove":
		  () => {
		    const cursor = document.querySelector("#cursor");
		    window.addEventListener("mousemove", (e) => {
		      cursor.style.top = e.clientY + "px";
		      cursor.style.left = e.clientX + "px";
		    });
		  },
		"config":
		{
			"currentWin": null,
			"selected": null,
			"currentId": [],
			"windowMinSize": 200,
			"idMaker": 0
		},
		"bootloader":
			() => {
				if (!localStorage.getItem("AlreadyConnected")) {
					localStorage.setItem("AlreadyConnected", true);
					os.system.window.create(`
        <div class="win" style="
              background-color: #333;
              width: 100%;
              height: 100%;
              color: #fff;
              text-align: center;">
          <h1>Bienvenue !</h1>
          <hr style="
              width: 30%;
              display: inline-block;">
          <p>Il parait que c'est la première fois que vous utiliser ce système.<br><br>Je vous présente ?</p>
          <br><br>
          <button style="width: 80px;
                         height: 30px;
                         color: #333;
                         font-weight: 900;">Oui</button>
          <button style="width: 80px;
                         height: 30px;
                         color: #333;
                         font-weight: 900;">Non</button>
        <div>
      `, 400, 300, "welcome", "!resizable")
				};
				if (!localStorage.getItem("userStorage")) {
					localStorage.setItem("userStorage", os.user);
					console.log(localStorage.getItem("userStorage"));
				}

				var creatingDock = document.createElement("div");

				creatingDock.classList.add("dock");

				document.body.append(creatingDock);

				var creatingStyle = document.createElement("style");

				creatingStyle.innerHTML = `
/* Windows config */

.window, .sideBar, .closeBtn{
  position:         absolute;
  top:              0;
  left:             0;
}

.window {
  background:       rgba(210, 228, 224, 0.5);

  display:          block;
  height:           50%;
  width:            50%;
  border-radius:    25px;
  padding-left:     50px;

  word-wrap:        break-word;
  overflow:         hidden;

  min-height:       200px;
  min-width:        200px;
}

.sideBar {
  background:       rgb(210, 228, 224);

  display:          block;
  height:           100%;
  width:            50px;
  border-radius:    25px 0 0 25px;
}

.resizer {
  position:         absolute;
  width:            20px;
  height:           20px;
  background-color: none;
  right:            0;
  bottom:           0;
  border-radius:    25px;
  transition:       all .2s ease-in;
}.resizer:hover {
  width:            25px;
  height:           25px;
  background-color: rgb(210, 228, 225);
}

.closeBtn {
  width:            50px;
  height:           50px;
  background-color: #ff6868;
  color:            #fff;
  border-radius:    50% 0 50% 50%;
  text-align:       center;
  line-height:      50px;
}

/* Desktop config */

*, ::before, ::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Poppins", Sans-Serif;
}

html {
  max-height:       100vh;
  max-width:        100vw;
  background:       url("../src/img/background/background.png") no-repeat center center fixed;
  background-size:  cover;
  cursor: none;
}

.dock {
  position:         fixed;
  right:            15px;
  top:              50%;
  transform:        translateY(-50%);
  background:       rgba(210, 228, 224, 0.5);
  border-radius:    50px;
  height:           75%;
  width:            50px;
}

#loadingLogo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
  heght: auto;
}

#loadingLogo #big {
  animation: load-big 2s ease 0s infinite normal none;
  transform-origin: bottom right;
}

#loadingLogo #small {
  animation: load-small 2s ease 0s infinite normal none;
  transform-origin: top left;
}

@keyframes load-big {
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(.5);
  }
}
@keyframes load-small {
  50% {
    transform: scale(1) translate(-50%, -50%);
  }
  100% {
    transform: scale(2) translate(-50%, -50%);
  }
}
#loader {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: #333;
}
.loader-out {
  opacity: 0;
  transition: opacity 0.4s ease-out;
}
#cursor {
  position: absolute;
  pointer-events: none;
  z-index: 3;
  left: -25px;
}
iframe:hover {
  cursor: "../src/img/cursor/cursor.png"
}

/* Other */

@font-face {
  font-family: "Poppins";
  src: url("../src/fonts/Poppins-Regular.ttf") format("ttf");
}
button {
  border: none;
  border-radius: 100px;
}`;

				document.body.append(creatingStyle);

				var creatingLoader = document.createElement("div");

				creatingLoader.id = "loader";

				creatingLoader.innerHTML = `
<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" id="loadingLogo">
<circle cx="200" cy="200" r="200" fill="#C4C4C4" fill-opacity="0.2" id="big"/>
<circle cx="300" cy="300" r="100" fill="#C4C4C4" fill-opacity="0.2" id="small"/>
</svg>
`

				document.body.append(creatingLoader);

				const loader = document.querySelector("#loader")
				window.addEventListener("load", () => {
				  loader.classList.add("loader-out");
				  setTimeout(() => loader.remove(), 400);
				});

				var creatingCursor = document.createElement("div");

				creatingCursor.id = "cursor";

				creatingCursor.innerHTML = `
<svg width="25" height="25" viewBox="0 0 100 100" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M50 0H0V50C0 77.6142 22.3858 100 50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0Z" fill="#333333"/>
</svg>
`

				document.body.append(creatingCursor);

				os.system.cursorMove();
			}
	}
};