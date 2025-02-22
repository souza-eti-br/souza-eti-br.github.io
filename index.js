const messages = {
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
    document.getElementById("select-language").innerHTML = messages[language]["language"];
    document.getElementById("welcome").innerHTML = messages[language]["welcome"];
    document.getElementById("welcome-text").innerHTML = messages[language]["welcome.text"];
    document.getElementById("developed-by").innerHTML = messages[language]["developed.by"];
}