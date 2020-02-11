var apps = ["akira", "budget", "paws", "sabertooth"];
var lappButtons = [];
var mainElem, appTitle;
var lapp = [
    "eula",
    "privacyPolicy",
    "disclaimer",
    "terms"
];

function homeScreen() {
    removeAllAppBlocks();
    hideElementById("appLAPP");
    appTitle.innerHTML = "APPS";

    apps.forEach((app) => {
        var appBlock = document.createElement("div");
        var appIcon = document.createElement("img");
        var appLabel = document.createElement("span");

        appBlock.id = app;
        appBlock.className = "appBlock";

        appIcon.src = `../images/${app}.png`;
        appIcon.alt = "APP ICON";
        appIcon.className = "appIcon"

        appLabel.innerHTML = capitalizeFirstLetter(app);
        appLabel.className = "appLabel"

        appBlock.appendChild(appIcon);
        appBlock.appendChild(appLabel);
        mainElem.appendChild(appBlock);

        appBlock.addEventListener("click", () => {
            appScreen(app);
        });
    });
}

function capitalizeFirstLetter(str) { 
    return str[0].toUpperCase() + str.slice(1); 
}

function appScreen(app) {
    removeAllAppBlocks();
    showElementById("appLAPP");
    appTitle.innerHTML = capitalizeFirstLetter(app);
}

function showDoc(type) {

}

function hideElementById(id) {
    var elem = document.getElementById(id);

    if (elem) {
        elem.style.display = "none";
    }
}

function hideElementByClass(cname) {
    var elems = document.getElementsByClassName(cname);

    for (i = 0; i < elems.length; i++) {
        var elem = elems[i];

        if (elem) elem.style.display = "none";
    }
}

function showElementById(id, dt = "block") {
    var elem = document.getElementById(id);

    if (elem) {
        elem.style.display = dt;
    }
}

function showElementByClass(cname, dt = "block") {
    var elems = document.getElementsByClassName(cname);

    for (i = 0; i < elems.length; i++) {
        var elem = elems[i];

        if (elem) elem.style.display = dt;
    }
}

function removeAllAppBlocks() {
    var paras = document.getElementsByClassName('appBlock');

    while(paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
    }​
}

window.onload = () => {
    mainElem = document.getElementById("main");
    appTitle = document.getElementById("appTitle");

    homeScreen();

    // lapp.forEach((t, btn) => {
    //     var tempBtn = document.getElementById(btn);

    //     if (tempBtn) {
    //         lappButtons.push(tempBtn);
    //         tempBtn.addEventListener("click", showDoc(t));
    //     }
    // });
}