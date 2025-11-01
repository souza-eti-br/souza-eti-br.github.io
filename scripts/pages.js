const Pages = {
    activePage: "home",
    pages: {
        "home": {
            page: "home",
            filepath: "pages/home.html"
        },
        "not-found": {
            page: "not-found",
            filepath: "pages/not-found.html"
        }
    },
    addPageWithDatabase() {
        Pages.pages["bills"] = {
            page: "bills",
            filepath: "pages/bills.html"
        };
        Pages.pages["investiments"] = {
            page: "investiments",
            filepath: "pages/investiments.html"
        };
        Pages.pages["games"] = {
            page: "games",
            filepath: "pages/games.html"
        };
        Pages.pages["secrets"] = {
            page: "secrets",
            filepath: "pages/secrets.html"
        };
        Pages.pages["lottery"] = {
            page: "lottery",
            filepath: "pages/lottery.html"
        };
    },
    isActive(page) {
        return (page === Pages.activePage);
    },
    checkHash() {
        if (location.hash) {
            Pages.activePage = location.hash.substring(1);
        } else {
            Pages.activePage = "home";
        }
        if (!Pages.pages[Pages.activePage]) {
            Pages.activePage = "not-found";
        }
        var page = Pages.pages[Pages.activePage];
        var mainContent = document.getElementById("main-content");
        if (page && mainContent) {
            mainContent.src = "about:blank";
            mainContent.src = page.filepath;
            let query = "[page]:not([page=\"" + Pages.activePage + "\"])";
            let elements = document.querySelectorAll(query);
            for (let element of elements) {
                element.classList.remove("active");
                var parent = element.parentElement?.parentElement?.parentElement;
                if (parent?.tagName?.toLowerCase() === "li" && parent?.classList?.contains("dropdown")) {
                    for (let child of parent.children) {
                        if (child?.tagName?.toLowerCase() === "a") {
                            child.classList.remove("active");
                            break;
                        }
                    }
                }
            }
            query = "[page=\"" + Pages.activePage + "\"]";
            elements = document.querySelectorAll(query);
            for (let element of elements) {
                if (!element.classList.contains("active")) {
                    element.classList.add("active");
                }
                var parent = element.parentElement?.parentElement?.parentElement;
                if (parent?.tagName?.toLowerCase() === "li" && parent?.classList?.contains("dropdown")) {
                    for (let child of parent.children) {
                        if (child?.tagName?.toLowerCase() === "a" && !child.classList.contains("active")) {
                            child.classList.add("active");
                            break;
                        }
                    }
                }
            }
        }
    }
};