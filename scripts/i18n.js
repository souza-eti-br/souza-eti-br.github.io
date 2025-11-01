const I18n = {
    messages: {
        pt: {
            "bills": "Contas",
            "developed.by": "Desenvolvido por:",
            "finances": "Finanças",
            "games": "Jogos",
            "home": "Início",
            "investiments": "Investimentos",
            "language": "Português",
            "lottery": "Loteria",
            "page.not.found": "Página não encontrada!",
            "secrets": "Segredos",
            "welcome": "Bem-vindo!",
            "welcome.text": "Está página é para uso pessoal. Abaixo você pode acessar meu LinkedIn."
        }, es: {
            "bills": "Cuentas",
            "developed.by": "Desarrollado por:",
            "finances": "Finanzas",
            "games": "Juegos",
            "home": "Inicio",
            "investiments": "Inversiones",
            "language": "Español",
            "lottery": "Lotería",
            "page.not.found": "¡Página no encontrada!",
            "secrets": "Misterios",
            "welcome": "¡Bienvenidos!",
            "welcome.text": "Esta página es para uso personal. A continuación puedes acceder a mi LinkedIn."
        }, en: {
            "bills": "Bills",
            "developed.by": "Developed by:",
            "finances": "Finances",
            "games": "Games",
            "home": "Home",
            "investiments": "Investiments",
            "language": "English",
            "lottery": "Lottery",
            "page.not.found": "Page not found!",
            "secrets": "Secrets",
            "welcome": "Welcome!",
            "welcome.text": "This page is for personal use. Below you can access my LinkedIn."
        }
    },
    setLanguage(language) {
        let elements = document.querySelectorAll("[i18n]");
        for (let element of elements) {
            element.innerHTML = I18n.messages[language][element.getAttribute("i18n")];
        }
        elements = document.getElementById("main-content").contentDocument.querySelectorAll("[i18n]");
        for (let element of elements) {
            element.innerHTML = I18n.messages[language][element.getAttribute("i18n")];
        }
        if (localStorage) {
            localStorage.setItem("language", language);
        }
    },
    checkLanguage() {
        var langFromLS = localStorage?.getItem("language");
        if (langFromLS) {
            I18n.setLanguage(langFromLS);
        } else {
            let languages = navigator.languages;
            for (let language of languages) {
                if (language && language.length >= 2 && I18n.messages[language.substring(0, 2)]) {
                    I18n.setLanguage(language.substring(0, 2));
                    break;
                }
            }
        }
    }
};