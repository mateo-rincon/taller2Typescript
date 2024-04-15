import { Serie } from "./serie.js";
import { dataSeries } from "./dataSeries.js"

let seriesTbody: HTMLElement = document.getElementById('series')!;
const avgSeasons: HTMLElement = document.getElementById("avg-seasons")!;
let seriesInfo: HTMLElement = document.getElementById('seriesInfo')!;

renderSeriesInTable(dataSeries);
avgSeasons.innerHTML=`${getAvgSeasons(dataSeries)}`


function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((serie) => {
      let trElement = document.createElement("tr");

        let tdID = document.createElement("td");
        tdID.innerHTML = serie.id.toString();
        trElement.appendChild(tdID);

        let tdName = document.createElement("td");
        tdName.innerHTML = `<a href="#" class="serie-name">${serie.name}</a>`;
        trElement.appendChild(tdName);

        tdName.addEventListener('click', () => seriesInfo.innerHTML = "\n<div class=\"card m-2\" style=\"width: 30rem;\">\n<img class=\"card-img-top\" src=\"".concat(serie.foto, "\"  height: auto;\">\n            <div class=\"card-body\">\n                <h1 class=\"card-title\" style=\"font-size:larger\">").concat(serie.name, "</h1>   \n                <p>").concat(serie.description, "</p>\n                <p> <a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.link, "</a></p>\n            </div>\n        </div>\n    "));

        let tdChannel = document.createElement("td");
        tdChannel.innerHTML = serie.channel;
        trElement.appendChild(tdChannel);

        let tdSeasons = document.createElement("td");
        tdSeasons.innerHTML = serie.seasons.toString();
        trElement.appendChild(tdSeasons);

        seriesTbody.appendChild(trElement);
    });
  }

  

  function getAvgSeasons(series:Serie[]){
    let sum:number=0;
    let cont:number=series.length;
    series.forEach((serie)=>sum=sum+serie.seasons);
    console.log("Valor sum: "+sum)
    console.log("Valor cont: "+cont)
    let avg:number=sum/cont
    return avg
  }