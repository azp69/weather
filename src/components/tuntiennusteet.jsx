import React from 'react';

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
      console.log(sademaara[i]["3h"]);
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
  
  // console.log(sademaara[1]);

  console.log(sademaara);

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
  
  
  return (
    <table className="w-100">
      <tbody>
        <tr>
          <td>
            <div className="card mr-1 px-0">
              <div className="card-body mr-0 px-1 text-center">
                <p className="tuntiotsikko text-center">{kellonaika[0]}</p>
                <img src={saaikoni[0]} ></img>
                <p className="lampotilaTuntiennuste text-center">{lampotila[0]}&deg;C</p>
              </div>
              <div className="footer saaennusteFooter text-center">
                <p>{tuuli[0]}m/s</p>
                <p>{kosteus[0]}%</p>
                <p>{sademaara[0]}mm</p>
              </div>
            </div>
          </td>

          <td>
            <div className="card mx-1 px-0">
              <div className="card-body mr-0 px-1 text-center">
                <p className="tuntiotsikko text-center">{kellonaika[1]}</p>
                <img src={saaikoni[1]}></img>
                <p className="lampotilaTuntiennuste text-center">{lampotila[1]}&deg;C</p>
              </div>
              <div className="footer saaennusteFooter text-center">
                <p>{tuuli[1]}m/s</p>
                <p>{kosteus[1]}%</p>
                <p>{sademaara[1]}mm</p>
              </div>
            </div>
          </td>

          <td>
            <div className="card mx-1 px-0">
              <div className="card-body mr-0 px-1 text-center">
                <p className="tuntiotsikko text-center">{kellonaika[2]}</p>
                <img src={saaikoni[2]}></img>
                <p className="lampotilaTuntiennuste text-center">{lampotila[2]}&deg;C</p>
              </div>
              <div className="footer saaennusteFooter text-center">
                <p>{tuuli[2]}m/s</p>
                <p>{kosteus[2]}%</p>
                <p>{sademaara[2]}mm</p>
              </div>
            </div>
          </td>

          <td>
            <div className="card mx-1 px-0">
              <div className="card-body px-1 text-center">
                <p className="tuntiotsikko text-center">{kellonaika[3]}</p>
                <img src={saaikoni[3]}></img>
                <p className="lampotilaTuntiennuste text-center">{lampotila[3]}&deg;C</p>
              </div>
              <div className="footer saaennusteFooter text-center">
                <p>{tuuli[3]}m/s</p>
                <p>{kosteus[3]}%</p>
                <p>{sademaara[3]}mm</p>
              </div>
            </div>
          </td>

          <td>
            <div className="card ml-1 px-0">
              <div className="card-body mr-0 px-1 text-center">
                <p className="tuntiotsikko text-center">{kellonaika[4]}</p>
                <img src={saaikoni[4]}></img>
                <p className="lampotilaTuntiennuste text-center">{lampotila[4]}&deg;C</p>
              </div>
              <div className="footer saaennusteFooter text-center">
                <p>{tuuli[4]}m/s</p>
                <p>{kosteus[4]}%</p>
                <p>{sademaara[4]}mm</p>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}