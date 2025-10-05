const messages = {
    pt: {
        "developed.by": "Desenvolvido por:",
        "language": "Português",
        "welcome": "Bem-vindo!",
        "welcome.text": "Está página é para uso pessoal. Abaixo você pode acessar meu LinkedIn."
    }, es: {
        "developed.by": "Desarrollado por:",
        "language": "Español",
        "welcome": "¡Bienvenidos!",
        "welcome.text": "Esta página es para uso personal. A continuación puedes acceder a mi LinkedIn."
    }, en: {
        "developed.by": "Developed by:",
        "language": "English",
        "welcome": "Welcome!",
        "welcome.text": "This page is for personal use. Below you can access my LinkedIn."
    }
};

function setLanguage(language) {
    let elements = document.querySelectorAll("[i18n]");
    for (let element of elements) {
        element.innerHTML = messages[language][element.getAttribute("i18n")];
    }
    if (localStorage) {
        localStorage.setItem("language", language);
    }
}

function checkLanguage() {
    if (localStorage && localStorage.getItem("language")) {
        setLanguage(localStorage.getItem("language"));
    } else {
        let languages = navigator.languages;
        for (let language of languages) {
            if (language && language.length >= 2 && messages[language.substring(0, 2)]) {
                setLanguage(language.substring(0, 2));
                break;
            }
        }
    }
}

window.onload = () => {
    checkLanguage();
};