import React from 'react';
import {Tuntiennustekortti} from './tuntiennustekortti';

export function Tuntiennusteet(props)
{
  const tuuli = [
    props.data.list[1].wind.speed, 
    props.data.list[2].wind.speed, 
    props.data.list[3].wind.speed, 
    props.data.list[4].wind.speed, 
    props.data.list[5].wind.speed
  ];
  
  const kosteus = [
    props.data.list[1].main.humidity, 
    props.data.list[2].main.humidity, 
    props.data.list[3].main.humidity, 
    props.data.list[4].main.humidity, 
    props.data.list[5].main.humidity
  ];

  
  let sademaara = [
    props.data.list[1].rain, 
    props.data.list[2].rain, 
    props.data.list[3].rain, 
    props.data.list[4].rain, 
    props.data.list[5].rain
  ];

  for (let i = 0; i < 5; i++)
  {
    try {
      if (sademaara[i]["3h"] > 0)
        sademaara[i] = sademaara[i]["3h"];
      else
      sademaara[i] = "0";
    }
    catch
    {
      sademaara[i] = "0";
    }
  }

  const saaikoni = [
    `https://openweathermap.org/img/wn/${props.data.list[1].weather[0].icon}.png`,
    `https://openweathermap.org/img/wn/${props.data.list[2].weather[0].icon}.png`,
    `https://openweathermap.org/img/wn/${props.data.list[3].weather[0].icon}.png`,
    `https://openweathermap.org/img/wn/${props.data.list[4].weather[0].icon}.png`,
    `https://openweathermap.org/img/wn/${props.data.list[5].weather[0].icon}.png`
  ];
  

  const lampotila = [
    Math.round(props.data.list[1].main.temp),
    Math.round(props.data.list[2].main.temp),
    Math.round(props.data.list[3].main.temp),
    Math.round(props.data.list[4].main.temp),
    Math.round(props.data.list[5].main.temp)
  ];

  let kellonaika = [];

  for (let i = 1; i < 6; i++)
  {
    let aika = props.data.list[i].dt_txt;
    let d = new Date(aika);
    let tunnit = (d.getHours() < 10) ? `0${d.getHours()}` : d.getHours();
    let minuutit = (d.getMinutes() < 10) ? `0${d.getMinutes()}` : d.getMinutes();
    kellonaika.push(`${tunnit}:${minuutit}`);
  }

  const kortit = [
      {"id" : "0", "kellonaika" : kellonaika[0], "saaikoni" : saaikoni[0], "lampotila" : lampotila[0], "tuuli" : tuuli[0], "kosteus" : kosteus[0], "sade" : sademaara[0]},
      {"id" : "1", "kellonaika" : kellonaika[1], "saaikoni" : saaikoni[1], "lampotila" : lampotila[1], "tuuli" : tuuli[1], "kosteus" : kosteus[1], "sade" : sademaara[1]},
      {"id" : "2", "kellonaika" : kellonaika[2], "saaikoni" : saaikoni[2], "lampotila" : lampotila[2], "tuuli" : tuuli[2], "kosteus" : kosteus[2], "sade" : sademaara[2]},
      {"id" : "3", "kellonaika" : kellonaika[3], "saaikoni" : saaikoni[3], "lampotila" : lampotila[3], "tuuli" : tuuli[3], "kosteus" : kosteus[3], "sade" : sademaara[3]},
      {"id" : "4", "kellonaika" : kellonaika[4], "saaikoni" : saaikoni[4], "lampotila" : lampotila[4], "tuuli" : tuuli[4], "kosteus" : kosteus[4], "sade" : sademaara[4]},
  ];
  
  const ennustekortit = kortit.map((kortti) => (
    <td key={"td" + kortti.id}>
        <Tuntiennustekortti key={kortti.id} eka={(kortti.id) == 0 ? '1' : ''} vika={(kortti.id) == kortit.length-1 ? '1' : ''} kellonaika={kortti.kellonaika} saaikoni={kortti.saaikoni} lampotila={kortti.lampotila} tuuli={kortti.tuuli} kosteus={kortti.kosteus} sade={kortti.sade} />
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