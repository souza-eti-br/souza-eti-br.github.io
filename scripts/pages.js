const Pages = {
    activePage: "home",
    pages: {
        "home": {
            page: "home",
            filepath: "pages/home.html",
            postLoadPage: () => {}
        },
        "not-found": {
            page: "not-found",
            filepath: "pages/not-found.html",
            postLoadPage: () => {}
        }
    },
    addPageWithDatabase() {
        Pages.pages["bills"] = {
            page: "bills",
            filepath: "pages/bills.html",
            postLoadPage: () => {}
        };
        Pages.pages["investiments"] = {
            page: "investiments",
            filepath: "pages/investiments.html",
            postLoadPage: () => {
                new Chart(document.getElementById('myChart'), {
                    type: 'bar',
                    data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                        datasets: [{
                            label: 'Monthly Sales',
                            data: [65, 59, 80, 81, 56, 55],
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,
                                text: 'Teste Bar Chart'
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }
        };
        Pages.pages["games"] = {
            page: "games",
            filepath: "pages/games.html",
            postLoadPage: () => {}
        };
        Pages.pages["secrets"] = {
            page: "secrets",
            filepath: "pages/secrets.html",
            postLoadPage: () => {}
        };
        Pages.pages["lottery"] = {
            page: "lottery",
            filepath: "pages/lottery.html",
            postLoadPage: () => {}
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
            fetch(page.filepath).then(response => response.text()).then((data) => {
                mainContent.innerHTML = data;
                page.postLoadPage();
                I18n.checkLanguage();
            });
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