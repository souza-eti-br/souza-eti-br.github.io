var messages = {
    pt: {
        "developed.by": "Desenvolvido por:&nbsp;",
        "language": "Português",
        "welcome": "Bem-vindo!",
        "welcome.text": "Está página é para uso pessoal. Abaixo você pode acessar meu LinkedIn. :)"
    }, es: {
        "developed.by": "Desarrollado por:&nbsp;",
        "language": "Español",
        "welcome": "¡Bienvenidos!",
        "welcome.text": "Esta página es para uso personal. A continuación puedes acceder a mi LinkedIn. :)"
    }, en: {
        "developed.by": "Developed by:&nbsp;",
        "language": "English",
        "welcome": "Welcome!",
        "welcome.text": "This page is for personal use. Below you can access my LinkedIn. :)"
    }
};
function setLanguage(language) {
    $("#select-language").html(this.messages[language]["language"]);
    $("#welcome").html(this.messages[language]["welcome"]);
    $("#welcome-text").html(this.messages[language]["welcome.text"]);
    $("#developed-by").html(this.messages[language]["developed.by"]);
}