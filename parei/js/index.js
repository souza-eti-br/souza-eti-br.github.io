var showNow = true;
var textNow = "";
var app = {
    initialize: function () {
        // 2024-12-31 23:56:59.581
        app.moment.setHours(23);
        app.moment.setMinutes(56);
        app.moment.setSeconds(59);
        app.moment.setMilliseconds(581);
        app.moment.setDate(31);
        app.moment.setMonth(11);
        app.moment.setFullYear(2024);
        app.calcule();
    },
    moment: new Date(),
    now: new Date(),
    diff: 0,
    formatNumber: function (number, size) {
        var format = "" + number;
        while (format.length < size) {
            format = "0" + format;
        }
        return format;
    },
    formatDecimal: function (number, length) {
        var inteiro = "" + number;
        if (inteiro.indexOf("e") >= 0) {
            var potencia = parseInt(inteiro.split("e-")[1]);
            inteiro = inteiro.split("e-")[0].replace(".", "");
            while (potencia > 1) {
                inteiro = "0" + inteiro;
                potencia = potencia - 1;
            }
            inteiro = "0." + inteiro;
        }
        var decimal = "0";
        if (inteiro.indexOf(".")) {
            decimal = inteiro.split(".")[1];
            inteiro = inteiro.split(".")[0];
        }
        if (decimal === undefined) {
            decimal = "0";
        }
        if (inteiro === undefined) {
            inteiro = "0";
        }
        var size = 3;
        if (inteiro.length > size + 1) {
            inteiro = inteiro.substr(0, inteiro.length - size) + "." + inteiro.substr(inteiro.length - size);
            size = size + 4;
        }
        while (inteiro.length > size) {
            inteiro = inteiro.substr(0, inteiro.length - size) + "." + inteiro.substr(inteiro.length - size);
            size = size + 4;
        }
        if (inteiro.length > length) {
            return false;
        } else if (inteiro.length === length) {
            return inteiro;
        } else if ((inteiro.length + 1) === length) {
            return "0" + inteiro;
        } else {
            if (decimal.length >= (length - inteiro.length) - 1) {
                decimal = decimal.substr(0, (length - inteiro.length) - 1);
            } else {
                while (decimal.length < (length - inteiro.length) - 1) {
                    decimal = decimal + "0";
                }
            }
            return inteiro + "," + decimal;
        }
    },
    formatDateTime: function (date) {
        let text = (date.getMonth() + 1) + "/" + date.getFullYear();
        while (text.length < 7) {
            text = "0" + text;
        }
        text = date.getDate() + "/" + text;
        while (text.length < 10) {
            text = "0" + text;
        }
        text = date.getMilliseconds() + " " + text;
        while (text.length < 14) {
            text = "0" + text;
        }
        text = date.getSeconds() + "." + text;
        while (text.length < 17) {
            text = "0" + text;
        }
        text = date.getMinutes() + ":" + text;
        while (text.length < 20) {
            text = "0" + text;
        }
        text = date.getHours() + ":" + text;
        while (text.length < 23) {
            text = "0" + text;
        }
        return text;
    },
    showGeneric: function (id, text, value) {
        var formatted = app.formatDecimal(value, 16 - (text.length - 7));
        if (formatted) {
            document.getElementById(id).innerHTML = formatted + text;
        } else {
            document.getElementById(id + "-tr").style.display = "none";
        }
    },
    showDiff: function () {
        let num = Math.floor(app.diff / (1000 * 60 * 60 * 24 * 365));
        let text = "" + num;
        while (text.length < 4) {
            text = "0" + text;
        }
        num = Math.floor(app.diff / (1000 * 60 * 60 * 24 * (365 / 12)));
        while (num > 12) {
            num = num - 12;
        }
        text = num + "/" + text;
        while (text.length < 7) {
            text = "0" + text;
        }
        num = Math.floor(app.diff / (1000 * 60 * 60 * 24));
        while (num > 365) {
            num = num - 365;
        }
        while (num > 30) {
            num = num - 30;
        }
        text = num + "/" + text;
        while (text.length < 10) {
            text = "0" + text;
        }
        num = Math.floor(app.diff);
        while (num > 1000) {
            num = num - 1000;
        }
        text = num + " " + text;
        while (text.length < 14) {
            text = "0" + text;
        }
        num = Math.floor(app.diff / (1000));
        while (num > 60) {
            num = num - 60;
        }
        text = num + "." + text;
        while (text.length < 17) {
            text = "0" + text;
        }
        num = Math.floor(app.diff / (1000 * 60));
        while (num > 60) {
            num = num - 60;
        }
        text = num + ":" + text;
        while (text.length < 20) {
            text = "0" + text;
        }
        num = Math.floor(app.diff / (1000 * 60 * 60));
        while (num > 60) {
            num = num - 60;
        }
        text = num + ":" + text;
        while (text.length < 23) {
            text = "0" + text;
        }
        document.getElementById("diff-datetime").innerHTML = text;
    },
    showDiffMiliSeconds: function () {
        app.showGeneric("miliseconds", " Milisegundos", app.diff);
    },
    showDiffSeconds: function () {
        app.showGeneric("seconds", " Segundos", app.diff / 1000);
    },
    showDiffMinutes: function () {
        app.showGeneric("minutes", " Minutos", app.diff / (1000 * 60));
    },
    showDiffHours: function () {
        app.showGeneric("hours", " Horas", app.diff / (1000 * 60 * 60));
    },
    showDiffDays: function () {
        app.showGeneric("days", " Dias", app.diff / (1000 * 60 * 60 * 24));
    },
    showDiffWeeks: function () {
        app.showGeneric("weeks", " Semanas", app.diff / (1000 * 60 * 60 * 24 * 7));
    },
    showDiffMonths: function () {
        app.showGeneric("months", " Meses", app.diff / (1000 * 60 * 60 * 24 * (365 / 12)));
    },
    showDiffYears: function () {
        app.showGeneric("years", " Anos", app.diff / (1000 * 60 * 60 * 24 * 365));
    },
    execution: function () {
        document.getElementById("now-datetime").innerHTML = app.formatDateTime(app.now);
        document.getElementById("since-datetime").innerHTML = app.formatDateTime(app.moment);
        app.showDiff();
        if ((document.getElementById("info1").className === "red") && ((app.diff / (1000 * 60)) > 20)) {
            document.getElementById("info1").className = "green";
        }
        if ((document.getElementById("info2").className === "red") && ((app.diff / (1000 * 60 * 60)) > 2)) {
            document.getElementById("info2").className = "green";
        }
        if ((document.getElementById("info3").className === "red") && ((app.diff / (1000 * 60 * 60)) > 8)) {
            document.getElementById("info3").className = "green";
        }
        if ((document.getElementById("info4").className === "red") && ((app.diff / (1000 * 60 * 60)) > 12)) {
            document.getElementById("info4").className = "yellow";
        }
        if ((document.getElementById("info4").className === "yellow") && ((app.diff / (1000 * 60 * 60)) > 24)) {
            document.getElementById("info4").className = "green";
        }
        if ((document.getElementById("info5").className === "red") && ((app.diff / (1000 * 60 * 60 * 24)) > 2)) {
            document.getElementById("info5").className = "green";
        }
        if ((document.getElementById("info6").className === "red") && ((app.diff / (1000 * 60 * 60 * 24)) > 21)) {
            document.getElementById("info6").className = "green";
        }
        if ((document.getElementById("info7").className === "red") && ((app.diff / (1000 * 60 * 60 * 24 * 365)) > 1)) {
            document.getElementById("info7").className = "green";
        }
        if ((document.getElementById("info8").className === "red") && ((app.diff / (1000 * 60 * 60 * 24 * 365)) > 10)) {
            document.getElementById("info8").className = "green";
        }
        if ((document.getElementById("info9").className === "red") && ((app.diff / (1000 * 60 * 60 * 24 * 365)) > 15)) {
            document.getElementById("info9").className = "green";
        }
        app.showDiffMiliSeconds();
        app.showDiffSeconds();
        app.showDiffMinutes();
        app.showDiffHours();
        app.showDiffDays();
        app.showDiffWeeks();
        app.showDiffMonths();
        app.showDiffYears();
    },
    calcule: function () {
        app.now = new Date();
        if (showNow) {
            document.getElementById("myInput").value = app.formatDateTime(app.now);
            showNow = false;
        }
        app.diff = app.now.getTime() - app.moment.getTime();
        app.execution();
        setTimeout(app.calcule, 1);
    }
};
function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}
app.initialize();