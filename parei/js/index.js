var showNow = true;
var textNow = "";
var app = {
    initialize: function () {
        // 15:44:23.058 06/11/2023
        app.moment.setHours(15);
        app.moment.setMinutes(44);
        app.moment.setSeconds(23);
        app.moment.setMilliseconds(58);
        app.moment.setDate(6);
        app.moment.setMonth(11 - 1);
        app.moment.setFullYear(2023);
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
        let parts = [
            app.now.getHours() - app.moment.getHours(),
            app.now.getMinutes() - app.moment.getMinutes(),
            app.now.getSeconds() - app.moment.getSeconds(),
            app.now.getMilliseconds() - app.moment.getMilliseconds(),
            app.now.getDate() - app.moment.getDate(),
            app.now.getMonth() - app.moment.getMonth(),
            app.now.getFullYear() - app.moment.getFullYear()
        ];
        while (parts[3] < 0) {
            parts[3] = parts[3] + 1000;
            parts[2] = parts[2] - 1;
        }
        while (parts[2] < 0) {
            parts[2] = parts[2] + 60;
            parts[1] = parts[1] - 1;
        }
        while (parts[1] < 0) {
            parts[1] = parts[1] + 60;
            parts[0] = parts[0] - 1;
        }
        while (parts[0] < 0) {
            parts[0] = parts[0] + 24;
            parts[4] = parts[4] - 1;
        }
        while (parts[4] < 0) {
            parts[4] = parts[4] + 30;
            parts[5] = parts[5] - 1;
        }
        while (parts[5] < 0) {
            parts[5] = parts[5] + 12;
            parts[6] = parts[6] - 1;
        }
        let text = "" + parts[6];
        while (text.length < 4) {
            text = "0" + text;
        }
        text = parts[5] + "/" + text;
        while (text.length < 7) {
            text = "0" + text;
        }
        text = parts[4] + "/" + text;
        while (text.length < 10) {
            text = "0" + text;
        }
        text = parts[3] + " " + text;
        while (text.length < 14) {
            text = "0" + text;
        }
        text = parts[2] + "." + text;
        while (text.length < 17) {
            text = "0" + text;
        }
        text = parts[1] + ":" + text;
        while (text.length < 20) {
            text = "0" + text;
        }
        text = parts[0] + ":" + text;
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
    },
    getDiffArray: function () {
        var diff = [0, 0, 0, 0, 0, 0, 0];
        diff[6] = app.now[6] - app.moment[6];
        diff[5] = app.now[5] - app.moment[5];
        diff[4] = app.now[4] - app.moment[4];
        diff[3] = app.now[3] - app.moment[3];
        diff[2] = app.now[2] - app.moment[2];
        diff[1] = app.now[1] - app.moment[1];
        diff[0] = app.now[0] - app.moment[0];
        if (diff[6] < 0) {
            diff[6] = diff[6] + 1000;
            diff[5] = diff[5] - 1;
        }
        if (diff[5] < 0) {
            diff[5] = diff[5] + 60;
            diff[4] = diff[4] - 1;
        }
        if (diff[4] < 0) {
            diff[4] = diff[4] + 60;
            diff[3] = diff[3] - 1;
        }
        if (diff[3] < 0) {
            diff[3] = diff[3] + 24;
            diff[2] = diff[2] - 1;
        }
        if (diff[2] < 0) {
            if ([2, 4, 6, 8, 9, 11, 1].indexOf(app.now[1]) !== -1) {
                diff[2] = diff[2] + 31;
            } else if ([5, 7, 10, 12].indexOf(app.now[1]) !== -1) {
                diff[2] = diff[2] + 30;
            } else if ((app.now[0] % 4 === 0) && (app.now[0] % 400 !== 0)) {
                diff[2] = diff[2] + 29;
            } else {
                diff[2] = diff[2] + 28;
            }
            diff[1] = diff[1] - 1;
        }
        if (diff[1] < 0) {
            diff[1] = diff[1] + 12;
            diff[0] = diff[0] - 1;
        }
        return diff;
    }
};
function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}
app.initialize();