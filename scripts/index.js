//AppDatabase = {};

window.onhashchange = () => {
    Pages.checkHash();
};

function onLoad() {
    if (typeof AppDatabase !== 'undefined') {
        let elements = document.querySelectorAll("[need-database=\"true\"]");
        for (let element of elements) {
            element.classList.remove("d-none");
        }
        Pages.addPageWithDatabase();
    }
    I18n.checkLanguage();
    Pages.checkHash();
}

window.onload = () => {
    onLoad();
};