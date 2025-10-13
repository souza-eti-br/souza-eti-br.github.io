const messages = {
    pt: {
        "authentication.failed": "Falha na autenticação!",
        "developed.by": "Desenvolvido por:",
        "games": "Jogos",
        "home": "Início",
        "investments": "Investimentos",
        "page.not.found": "Página não encontrada!",
        "password": "Senha",
        "secrets": "Segredos",
        "server.offline": "Servidor desligado!",
        "username": "Usuário",
        "welcome": "Bem-vindo!",
        "welcome.text": "Está página é para uso pessoal. Abaixo você pode acessar meu LinkedIn."
    }, es: {
        "authentication.failed": "¡La autenticación falló!",
        "developed.by": "Desarrollado por:",
        "games": "Juegos",
        "home": "Inicio",
        "investments": "Inversiones",
        "page.not.found": "¡Página no encontrada!",
        "password": "Contraseña",
        "secrets": "Secretos",
        "server.offline": "¡Servidor apagado!",
        "username": "Usuario",
        "welcome": "¡Bienvenidos!",
        "welcome.text": "Esta página es para uso personal. A continuación puedes acceder a mi LinkedIn."
    }, en: {
        "authentication.failed": "Authentication failed!",
        "developed.by": "Developed by:",
        "games": "Games",
        "home": "Home",
        "investments": "Investments",
        "page.not.found": "Page not found!",
        "password": "Password",
        "secrets": "Secrets",
        "server.offline": "Server Offline!",
        "username": "Username",
        "welcome": "Welcome!",
        "welcome.text": "This page is for personal use. Below you can access my LinkedIn."
    }
};

function reloadMessages() {
    let language = document.getElementById("language-selector").value;
    let elements = document.querySelectorAll("[i18n]");
    for (let element of elements) {
        element.innerHTML = messages[language][element.getAttribute("i18n")];
    }
    elements = document.querySelectorAll("[i18n-placeholder]");
    for (let element of elements) {
        element.placeholder = messages[language][element.getAttribute("i18n-placeholder")];
    }
}

function setLanguage(language) {
    document.getElementById("language-selector").value = language;
    if (localStorage) {
        localStorage.setItem("language", language);
    }
    reloadMessages();
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

function logout() {
    fetch("http://localhost:8080/auth", {
        method: "DELETE"
    }).then(response => {
        if (response.ok) {
           return response.json();
        } else {
           return { logged: false };
        }
    }).then(result => {
        reloadAuthorization(result.logged);
        reloadMessages();
    }).catch(error => {
        alert(messages[document.getElementById("language-selector").value]["server.offline"]);
        reloadAuthorization(false);
        reloadMessages();
    });
}

function login() {
    fetch("http://localhost:8080/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: document.getElementById("login-username").value,
            password: document.getElementById("login-password").value
        })
    }).then(response => {
        if (response.ok) {
           return response.json();
        } else {
           return { logged: false };
        }
    }).then(result => {
        if (!result.logged) {
            alert(messages[document.getElementById("language-selector").value]["authentication.failed"]);
        }
        reloadAuthorization(result.logged);
        reloadMessages();
    }).catch(error => {
        alert(messages[document.getElementById("language-selector").value]["server.offline"]);
        reloadAuthorization(false);
        reloadMessages();
    });
}

function checkAuthorization() {
    fetch("http://localhost:8080/auth", {
        method: "GET"
    }).then(response => {
        if (response.ok) {
           return response.json();
        } else {
           return { logged: false };
        }
    }).then(result => {
        reloadAuthorization(result.logged);
        reloadMessages();
    }).catch(error => {
        reloadAuthorization(false);
        reloadMessages();
    });
}

function reloadAuthorization(logged) {
    let elements = document.querySelectorAll("[authenticate]");
    for (let element of elements) {
        let authenticate = (element.getAttribute("authenticate").toLowerCase() === "true");
        if (logged === authenticate) {
            element.style.display = "";
        } else {
            element.style.display = "none";
        }
    }
}

function setPage(page) {
    fetch("pages/" + page + ".html").then(response => {
        if (response.ok) {
           return response.text();
        } else {
           return "<div style='text-align: center;'><h1 class='danger' i18n='page.not.found'>Página não encontrada!</h1></div>";
        }
    }).then(html => {
        document.getElementsByTagName('main')[0].innerHTML = html;
        checkAuthorization();
    });
}

function checkLocation() {
    var page = location.hash;
    if (page && page.startsWith("#") && page.length > 1) {
        page = page.substring(1);
    } else {
        page = "home";
    }
    setPage(page);
}

window.onload = () => {
    window.addEventListener("hashchange", checkLocation);
    checkLocation();
    checkLanguage();
    checkAuthorization();
};