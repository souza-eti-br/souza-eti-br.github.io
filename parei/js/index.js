var showNow = true;
var textNow = "";
var app = {
    initialize: function () {
        app.calcule();
    },
    // 2023-03-13 02:29:08.589
    moment: [2023, 3, 13, 2, 29, 8, 589],
    now: [0, 0, 0, 0, 0, 0, 0],
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
        return app.formatNumber(date[3], 2) + ":" + app.formatNumber(date[4], 2) + ":" + app.formatNumber(date[5], 2) + "." + app.formatNumber(date[6], 3) + " " + app.formatNumber(date[2], 2) + "/" + app.formatNumber(date[1], 2) + "/" + app.formatNumber(date[0], 4);
    },
    showGeneric: function (id, text, value) {
        var formatted = app.formatDecimal(value, 16 - (text.length - 7));
        if (formatted) {
            document.getElementById(id).innerHTML = formatted + text;
        } else {
            document.getElementById(id + "-tr").style.display = "none";
        }
    },
    showDiffMiliSeconds: function (date) {
        var diff = (date[0] * 31536000000) + (date[1] * 2628000000) + (date[2] * 86400000) + (date[3] * 3600000) + (date[4] * 60000) + (date[5] * 1000) + date[6];
        app.showGeneric("miliseconds", " Milisegundos", diff);
    },
    showDiffSeconds: function (date) {
        var diff = (date[0] * 31536000) + (date[1] * 2628000) + (date[2] * 86400) + (date[3] * 3600) + (date[4] * 60) + date[5] + (date[6] * 0.001);
        app.showGeneric("seconds", " Segundos", diff);
    },
    showDiffMinutes: function (date) {
        var diff = (date[0] * 525600) + (date[1] * 43800) + (date[2] * 1440) + (date[3] * 60) + date[4] + (date[5] * 0.0166666666666667) + (date[6] * 0.0000166666666667);
        app.showGeneric("minutes", " Minutos", diff);
    },
    showDiffHours: function (date) {
        var diff = (date[0] * 8760) + (date[1] * 730) + (date[2] * 24) + date[3] + (date[4] * 0.0166666666666667) + (date[5] * 0.0002777777777778) + (date[6] * 0.0000002777777778);
        app.showGeneric("hours", " Horas", diff);
    },
    showDiffDays: function (date) {
        var diff = (date[0] * 365) + (date[1] * 30.416666666666667) + date[2] + (date[3] * 0.0416666666666667) + (date[4] * 0.0006944444444444) + (date[5] * 0.0000115740740740) + (date[6] * 0.0000000115740740);
        app.showGeneric("days", " Dias", diff);
    },
    showDiffWeeks: function (date) {
        var diff = ((date[0] * 365) + (date[1] * 30.416666666666667) + date[2] + (date[3] * 0.0416666666666667) + (date[4] * 0.0006944444444444) + (date[5] * 0.0000115740740740) + (date[6] * 0.0000000115740740)) / 7;
        app.showGeneric("weeks", " Semanas", diff);
    },
    showDiffMonths: function (date) {
        var diff = (date[0] * 12) + date[1] + (date[2] * 0.0328767123287671) + (date[3] * 0.0013698630136986) + (date[4] * 0.0000228310502283) + (date[5] * 0.0000003805175038) + (date[6] * 0.0000000003805175);
        app.showGeneric("months", " Meses", diff);
    },
    showDiffYears: function (date) {
        var diff = date[0] + (date[1] * 0.0833333333333333) + (date[2] * 0.0027397260273973) + (date[3] * 0.0001141552511415) + (date[4] * 0.0000019025875190) + (date[5] * 0.0000000317097919) + (date[6] * 0.0000000000317097);
        app.showGeneric("years", " Anos", diff);
    },
    execution: function (date) {
        document.getElementById("now-datetime").innerHTML = app.formatDateTime(app.now);
        document.getElementById("since-datetime").innerHTML = app.formatDateTime(app.moment);
        if ((date[0] > 0 || date[1] > 0 || date[2] > 0 || date[3] > 0 || date[4] >= 20) && (document.getElementById("info1").className == "red")) {
            document.getElementById("info1").className = "green";
        }
        if ((date[0] > 0 || date[1] > 0 || date[2] > 0 || date[3] >= 2) && (document.getElementById("info2").className == "red")) {
            document.getElementById("info2").className = "green";
        }
        if ((date[0] > 0 || date[1] > 0 || date[2] > 0 || date[3] >= 8) && (document.getElementById("info3").className == "red")) {
            document.getElementById("info3").className = "green";
        }
        if ((date[0] > 0 || date[1] > 0 || date[2] > 0 || date[3] >= 12) && (document.getElementById("info4").className == "red")) {
            document.getElementById("info4").className = "yellow";
        }
        if ((date[0] > 0 || date[1] > 0 || date[2] > 0 || date[3] >= 24) && (document.getElementById("info4").className == "yellow")) {
            document.getElementById("info4").className = "green";
        }
        if ((date[0] > 0 || date[1] > 0 || date[2] >= 2) && (document.getElementById("info5").className == "red")) {
            document.getElementById("info5").className = "green";
        }
        if ((date[0] > 0 || date[1] > 0 || date[2] >= 21) && (document.getElementById("info6").className == "red")) {
            document.getElementById("info6").className = "green";
        }
        if ((date[0] >= 1) && (document.getElementById("info7").className == "red")) {
            document.getElementById("info7").className = "green";
        }
        if ((date[0] >= 10) && (document.getElementById("info8").className == "red")) {
            document.getElementById("info8").className = "green";
        }
        app.showDiffMiliSeconds(date);
        app.showDiffSeconds(date);
        app.showDiffMinutes(date);
        app.showDiffHours(date);
        app.showDiffDays(date);
        app.showDiffWeeks(date);
        app.showDiffMonths(date);
        app.showDiffYears(date);
    },
    calcule: function () {
        var now = new Date();
        app.now = [now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds()];
        if (showNow) {
            textNow = app.now[6] + "";
            while (textNow.length < 3) {
                textNow = "0" + textNow;
            }
            textNow = app.now[5] + "." + textNow;
            while (textNow.length < 6) {
                textNow = "0" + textNow;
            }
            textNow = app.now[4] + ":" + textNow;
            while (textNow.length < 9) {
                textNow = "0" + textNow;
            }
            textNow = app.now[3] + ":" + textNow;
            while (textNow.length < 12) {
                textNow = "0" + textNow;
            }
            textNow = app.now[2] + " " + textNow;
            while (textNow.length < 15) {
                textNow = "0" + textNow;
            }
            textNow = app.now[1] + "-" + textNow;
            while (textNow.length < 18) {
                textNow = "0" + textNow;
            }
            textNow = app.now[0] + "-" + textNow;
            document.getElementById("myInput").value = textNow;
            showNow = false;
        }
        var diff = app.getDiffArray();
        document.getElementById("diff-datetime").innerHTML = app.formatDateTime(diff);
        app.execution(diff);
        setTimeout(app.calcule, 75);
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
    copyText.value = textNow;
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}
app.initialize();