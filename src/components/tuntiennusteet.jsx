import React from 'react';
import {Tuntiennustekortti} from './tuntiennustekortti';
import {tulostaKellonaika} from './saanyt';

export function Tuntiennusteet({data})
{
  const tuuli = [
    data.list[1].wind.speed, 
    data.list[2].wind.speed, 
    data.list[3].wind.speed, 
    data.list[4].wind.speed, 
    data.list[5].wind.speed
  ];
  
  const kosteus = [
    data.list[1].main.humidity, 
    data.list[2].main.humidity, 
    data.list[3].main.humidity, 
    data.list[4].main.humidity, 
    data.list[5].main.humidity
  ];

  
  let vesisade = [
    data.list[1].rain, 
    data.list[2].rain, 
    data.list[3].rain, 
    data.list[4].rain, 
    data.list[5].rain
  ];

  let lumisade = [
    data.list[1].snow, 
    data.list[2].snow, 
    data.list[3].snow, 
    data.list[4].snow, 
    data.list[5].snow
  ];

  let saatilaTxt = [
    data.list[1].weather[0].description,
    data.list[2].weather[0].description,
    data.list[3].weather[0].description,
    data.list[4].weather[0].description,
    data.list[5].weather[0].description,
  ];

  // Yhdistellään lumi- ja vesisademäärät
  let sademaara = [0, 0, 0, 0, 0];

  for (let i = 0; i < 5; i++)
  {
    try {
      if (vesisade[i]["3h"] > 0)
      {
        sademaara[i] = vesisade[i]["3h"];
      }
    }
    catch {

    }
  }

  for (let i = 0; i < 5; i++)
  {
    try {
      if (lumisade[i]["3h"] > 0)
      {
        sademaara[i] = sademaara[i] + lumisade[i]["3h"];
      }
     
    }
    catch
    {

    }
  }

  const saaikoni = [
    `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png`,
    `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}.png`,
    `https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}.png`,
    `https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}.png`,
    `https://openweathermap.org/img/wn/${data.list[5].weather[0].icon}.png`
  ];
  

  const lampotila = [
    Math.round(data.list[1].main.temp),
    Math.round(data.list[2].main.temp),
    Math.round(data.list[3].main.temp),
    Math.round(data.list[4].main.temp),
    Math.round(data.list[5].main.temp)
  ];

  let kellonaika = [];

  for (let i = 1; i < 6; i++)
  {
    let aika = data.list[i].dt_txt;
    kellonaika.push(tulostaKellonaika(aika));
  }

  const kortit = [
      {"id" : "0", "kellonaika" : kellonaika[0], "saaikoni" : saaikoni[0], "lampotila" : lampotila[0], "tuuli" : tuuli[0], "kosteus" : kosteus[0], "sademaara" : sademaara[0], "saatilaTxt" : saatilaTxt[0]},
      {"id" : "1", "kellonaika" : kellonaika[1], "saaikoni" : saaikoni[1], "lampotila" : lampotila[1], "tuuli" : tuuli[1], "kosteus" : kosteus[1], "sademaara" : sademaara[1], "saatilaTxt" : saatilaTxt[1]},
      {"id" : "2", "kellonaika" : kellonaika[2], "saaikoni" : saaikoni[2], "lampotila" : lampotila[2], "tuuli" : tuuli[2], "kosteus" : kosteus[2], "sademaara" : sademaara[2], "saatilaTxt" : saatilaTxt[2]},
      {"id" : "3", "kellonaika" : kellonaika[3], "saaikoni" : saaikoni[3], "lampotila" : lampotila[3], "tuuli" : tuuli[3], "kosteus" : kosteus[3], "sademaara" : sademaara[3], "saatilaTxt" : saatilaTxt[3]},
      {"id" : "4", "kellonaika" : kellonaika[4], "saaikoni" : saaikoni[4], "lampotila" : lampotila[4], "tuuli" : tuuli[4], "kosteus" : kosteus[4], "sademaara" : sademaara[4], "saatilaTxt" : saatilaTxt[4]}
  ];
  
  const ennustekortit = kortit.map((kortti) => (
    <td key={"td" + kortti.id}>
        <Tuntiennustekortti key={kortti.id} eka={(kortti.id) == 0 ? '1' : ''} vika={(kortti.id) == kortit.length-1 ? '1' : ''} kellonaika={kortti.kellonaika} saaikoni={kortti.saaikoni} lampotila={kortti.lampotila} tuuli={kortti.tuuli} kosteus={kortti.kosteus} sademaara={kortti.sademaara} saatilaTxt={kortti.saatilaTxt}/>
    </td>
  ));

  return (
    <table className="w-100">
        <tbody>
            <tr>
                {ennustekortit}
            </tr>
        </tbody>
    </table>
  );
  
}