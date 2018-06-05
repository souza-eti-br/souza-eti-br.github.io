"use strict";
var ajax = {
    count: 0,
    getHTTP: function (method, url, finish) {
        this.count++;
        if (document.getElementById("loading-screen")) {
            document.getElementById("loading-screen").style.display = "block";
        }
        var http;
        if (window.XMLHttpRequest) {
            http = new XMLHttpRequest();
        } else {
            http = new ActiveXObject("Microsoft.XMLHTTP");
        }
        http.onreadystatechange = function () {
            if (this.readyState === 4) {
                var response = {
                    status: this.status,
                    message: this.statusText,
                    xml: this.responseXML,
                    text: this.responseText
                };
                try {
                    response.object = JSON.parse(this.responseText);
                } catch (exception) {
                    response.object = undefined;
                }
                finish(response);
                ajax.count--;
                if (ajax.count === 0 && document.getElementById("loading-screen")) {
                    document.getElementById("loading-screen").style.display = "block";
                }
            }
        };
        http.open(method, url, true);
//        http.setRequestHeader("application", "webapp");
//        http.setRequestHeader("action", "webact");
//        http.setRequestHeader("token", "webtok");
        return http;
    },
    get: function (url, finish) {
        this.getHTTP("GET", url, finish).send();
    },
    post: function (url, body, finish) {
        this.getHTTP("POST", url, finish).send(body);
    }
};