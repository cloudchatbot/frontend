const background = document.querySelector("body");
const logo = document.querySelectorAll(".logo");
const text = document.querySelectorAll("body p,span");
const resetIcon = document.querySelector("#resetIcon");
const modeButton = document.querySelector(".modeButton");
const inputContainer = document.querySelector(".input-container");
const input = document.querySelector("#input");

function activeLightMode() {
    changeImgs();
    // BACKGROUND
    background.classList.toggle('lightModeBG');

    // TEXT
    text.forEach(paragraph => {
        paragraph.classList.toggle('lightModeText');
    })

    // INPUT CONTAINER
    inputContainer.classList.toggle("lightModeInput");

    // INPUT TEXT
    input.classList.toggle("lightModeTextInput");

    
}

function changeImgs () {
    // TUCANO LOGO
    logo.forEach(imgLogo => {
        if (imgLogo.src.includes("tucanoLight.svg")) {
            imgLogo.setAttribute('src','./assets/img/tucanoDark.svg')
        } else {
            imgLogo.setAttribute('src','./assets/img/tucanoLight.svg')
        }
    });

    // BOTÃO DE RESET
    if (resetIcon.src.includes("resetLight.svg")) {
        resetIcon.setAttribute('src',"./assets/icons/resetDark.svg");
    } else {
        resetIcon.setAttribute('src',"./assets/icons/resetLight.svg");
    }

    // BOTÃO DE ALTERAR LIGHT/DARK MODE
    if (modeButton.src.includes("sun.svg")) {
        modeButton.setAttribute('src',"./assets/icons/moon.svg");
    } else {
        modeButton.setAttribute('src',"./assets/icons/sun.svg")
    }
}