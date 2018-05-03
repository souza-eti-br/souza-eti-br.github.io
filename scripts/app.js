"use strict";
var i18n = {
    selector: factory.element({ tag: "select", className: "right" }),
    addLanguage: function (value, label, selected, url) {
        if (!value) {
            throw "Value is required.";
        }
        if (!label) {
            throw "Label is required.";
        }
        if (!url) {
            throw "Url is required.";
        }
        this.selector.add(factory.element({ tag: "option", children: label, value: value, selected: selected }));
        this.loading++;
        ajax.get(url, function (response) {
            if (response.status === 200) {
                i18n.messages[value] = response.object;
            } else {
                i18n.messages[value] = {};
            }
            i18n.loading--;
        });
    },
    loading: 0,
    messages: {},
    functions: [],
    addFunction: function (newFunction, executeNow) {
        this.functions.push(newFunction);
        if (executeNow) {
            newFunction();
        }
    },
    runFunctions: function () {
        if (i18n.loading > 0) {
            setTimeout(i18n.runFunctions, i18n.loading * 100);
        } else {
            for (var i = 0; i < i18n.functions.length; i++) {
                i18n.functions[i]();
            }
        }
    },
    getMessage: function (key, args) {
        if (this.loading > 0) {
            return "### I18N DATA IS LOADDING ###";
        }
        if (key) {
            if (typeof key !== "string") {
                throw "Key is not a string.";
            }
            if (!args) {
                args = [];
            } else if (!Array.isArray(args)) {
                args = [args];
            }
            var message = this.messages[this.selector.value][key];
            if (message) {
                for (var i = 0; i < args.length; i++) {
                    var argKey = "{" + i + "}";
                    while (message.indexOf(argKey) > -1) {
                        message = message.replace(argKey, arguments[i]);
                    }
                }
                return message;
            } else {
                return "### " + arguments[0] + " ###";
            }
        } else {
            return "### UNKNOWN I18N MESSAGE KEY ###";
        }
    },
    init: function (languages, functions, executeFunctionsNow) {
        if (languages) {
            if (!Array.isArray(languages)) {
                languages = [languages];
            }
            var language = navigator.language || navigator.userLanguage;
            if (language) {
                if (language.length > 2) {
                    language = language.substr(0, 2);
                }
            }
            for (var i = 0; i < languages.length; i++) {
                if (!languages[i].label) {
                    throw "Languages[" + i + "] don't have label, it's required to init i18n.";
                }
                if (!languages[i].value) {
                    throw "Languages[" + i + "] don't have value, it's required to init i18n.";
                }
                if (!languages[i].urlOfValues) {
                    throw "Languages[" + i + "] don't have urlOfValues, it's required to init i18n.";
                }
                if (languages[i].default && !language) {
                    language = languages[i].value;
                }
            }
            if (!language) {
                language = languages[0].value;
            }
            for (var i = 0; i < languages.length; i++) {
                this.addLanguage(languages[i].value, languages[i].label, language === languages[i].value, languages[i].urlOfValues);
            }
        } else {
            throw "Languages are required to init i18n.";
        }
        if (functions) {
            if (!Array.isArray(functions)) {
                functions = [functions];
            }
            for (var i = 0; i < functions.length; i++) {
                if (typeof functions[i] !== "function") {
                    throw "Functions[" + i + "] isn't a function.";
                }
                this.addFunction(functions[i]);
            }
        }
        if (executeFunctionsNow) {
            this.runFunctions();
        }
        this.selector.onchange = this.runFunctions;
    }
};
var app = {
    header: {
        content: factory.element({
            tag: "div",
            id: "content-header",
            children: [
                factory.element({ tag: "img", src: "images/favicon.png", children: "Souza.eti.br"}),
                factory.element({ tag: "a", id: "link-header-home", href: "#home" }),
                factory.element({ tag: "a", id: "link-header-about", href: "#about" }),
                i18n.selector
            ]
        }),
        onLanguageChange: function() {
            document.getElementById("link-header-home").innerHTML = i18n.getMessage("home");
            document.getElementById("link-header-about").innerHTML = i18n.getMessage("about");
        }
    },
    footer: {
        content: factory.element({
            tag: "div",
            id: "content-footer",
            children: [
                factory.element({ tag: "span", id: "content-footer-label"}),
                ": ",
                factory.element({ tag: "a", href: "mailto:alan@souza.eti.br", target: "_BLANK", children: "Alan Moraes Souza"}),
                "."
            ]
        }),
        onLanguageChange: function() {
            document.getElementById("content-footer-label").innerHTML = i18n.getMessage("developed.by");
            if (document.getElementById("loading-label")) {
                document.getElementById("loading-label").innerHTML = i18n.getMessage("loading");
            }
        }
    },
    body: {
        content: factory.element({ tag: "div", id: "content-body" }),
        pages: [
            { name: "home", page: {
                init: function(content) {
                    content.innerHTML = "home page";
                }
            }},
            { name: "about", page: {
                init: function(content) {
                    content.innerHTML = "about page";
                }
            }}
        ],
        onChangeHash: function (event) {
            var listHash = window.location.hash.substring(1).split("/");
            var pages = app.body.pages;
            for (var i = 0; i < listHash.length; i++) {
                var hash = listHash[i];
                for (var j = 0; j < pages.length; j++) {
                    if (pages[j].name === hash) {
                        if (pages[j].page) {
                            pages[j].page.init(app.body.content);
                            document.getElementById("link-header-" + pages[j].name).style.backgroundColor = "#000000";
                            document.getElementById("link-header-" + pages[j].name).style.fontWeight = "bold";
                        } else if (pages[j].pages) {
                            pages = pages[j].pages;
                            break;
                        }
                    } else {
                        document.getElementById("link-header-" + pages[j].name).style.backgroundColor = "#222222";
                        document.getElementById("link-header-" + pages[j].name).style.fontWeight = "normal";
                    }
                }
            }
        }
    },
    loading: {
        content: factory.element({tag: "div", id: "loading-screen", children: [
            factory.element({tag: "img", src: "images/loading.gif", alt: "loading"}),
            factory.element({tag: "br"}),
            factory.element({tag: "span"})
        ]}),
        onLanguageChange: function() {
            app.loading.content.innerHTML = i18n.getMessage("loading");
        }
    },
    init: function () {
        window.addEventListener("hashchange", app.body.onChangeHash);
        i18n.init([
            {label: "English", value: "en", default: false, urlOfValues: "jsons/i18n-en.json"},
            {label: "Español", value: "es", default: false, urlOfValues: "jsons/i18n-es.json"},
            {label: "Português", value: "pt", default: true, urlOfValues: "jsons/i18n-pt.json"}
        ], [
            function () {
                app.header.onLanguageChange();
                app.footer.onLanguageChange();
                app.loading.onLanguageChange();
            }
        ], true);
        document.body.appendChild(this.header.content);
        document.body.appendChild(this.body.content);
        document.body.appendChild(this.footer.content);
        var founded = false;
        if (window.location.hash.length > 0) {
            var page = window.location.hash.substring(1);
            for (var i = 0; i < app.body.pages.length; i++) {
                if (app.body.pages[i].name === page) {
                    app.body.pages[i].page.init(app.body.content);
                    document.getElementById("link-header-" + app.body.pages[i].name).style.backgroundColor = "#000000";
                    document.getElementById("link-header-" + app.body.pages[i].name).style.fontWeight = "bold";
                    founded = true;
                } else {
                    document.getElementById("link-header-" + app.body.pages[i].name).style.backgroundColor = "#222222";
                    document.getElementById("link-header-" + app.body.pages[i].name).style.fontWeight = "normal";
                }
            }
        }
        if (!founded) {
            app.body.pages[0].page.init(app.body.content);
            document.getElementById("link-header-" + app.body.pages[0].name).style.backgroundColor = "#000000";
            document.getElementById("link-header-" + app.body.pages[0].name).style.fontWeight = "bold";
        }
    }
};
document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        app.init();
    }
};