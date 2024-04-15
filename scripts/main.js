import { dataSeries } from "./dataSeries.js";
var seriesTbody = document.getElementById('series');
var avgSeasons = document.getElementById("avg-seasons");
var seriesInfo = document.getElementById('seriesInfo');
renderSeriesInTable(dataSeries);
avgSeasons.innerHTML = "".concat(getAvgSeasons(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        var tdID = document.createElement("td");
        tdID.innerHTML = serie.id.toString();
        trElement.appendChild(tdID);
        var tdName = document.createElement("td");
        tdName.innerHTML = "<a href=\"#\" class=\"serie-name\">".concat(serie.name, "</a>");
        trElement.appendChild(tdName);
        tdName.addEventListener('click', function () { return seriesInfo.innerHTML = "\n<div class=\"card m-2\" style=\"width: 30rem;\">\n<img class=\"card-img-top\" src=\"".concat(serie.foto, "\"  height: auto;\">\n            <div class=\"card-body\">\n                <h1 class=\"card-title\" style=\"font-size:larger\">").concat(serie.name, "</h1>   \n                <p>").concat(serie.description, "</p>\n                <p> <a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.link, "</a></p>\n            </div>\n        </div>\n    "); });
        var tdChannel = document.createElement("td");
        tdChannel.innerHTML = serie.channel;
        trElement.appendChild(tdChannel);
        var tdSeasons = document.createElement("td");
        tdSeasons.innerHTML = serie.seasons.toString();
        trElement.appendChild(tdSeasons);
        seriesTbody.appendChild(trElement);
    });
}
function getAvgSeasons(series) {
    var sum = 0;
    var cont = series.length;
    series.forEach(function (serie) { return sum = sum + serie.seasons; });
    console.log("Valor sum: " + sum);
    console.log("Valor cont: " + cont);
    var avg = sum / cont;
    return avg;
}
