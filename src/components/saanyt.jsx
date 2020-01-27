import React from 'react';

export function SaaNyt(props)
{

  const kaupunki = (props.data.city.name == 'Jyvaeskylae') ? 'Jyväskylä' : props.data.city.name;
  const saatilaTxt = props.data.list[0].weather[0].description;
  const saaikoni = `https://openweathermap.org/img/wn/${props.data.list[0].weather[0].icon}@2x.png`;
  const lampotila = props.data.list[0].main.temp;
  const aika = props.data.list[0].dt_txt;
  
  const d = new Date(aika);
  const tunnit = (d.getHours() < 10) ? `0${d.getHours()}` : d.getHours();
  const minuutit = (d.getMinutes() < 10) ? `0${d.getMinutes()}` : d.getMinutes();
  const kellonaika = `${tunnit}:${minuutit}`;
  const kuukausi = d.getMonth();
  
  let paiva = d.getDate();

  const tuuli = props.data.list[0].wind.speed;
  const kosteus = props.data.list[0].main.humidity;
  let sademaara = 0;
  
  try {
    sademaara = props.data.list[0].rain["3h"];
  }
  catch
  {

  }

  try {
      sademaara = sademaara + props.data.list[0].snow["3h"];
  }
  catch {

  }
  
  const kuukaudet = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  if (paiva === 0)
    paiva = paiva + "st";
  else if (paiva === 1)
    paiva = paiva + "nd";
  else if (paiva === 2)
    paiva = paiva + "rd";
  else
    paiva = paiva + "th";


  return (
    <div className="card saakorttiIso">
      <div className="card-body">
      <table className="w-100">
        <tbody>
          <tr>
            <td>
              <h1 className="kaupunkiotsikko mt-1">{kaupunki}</h1>
              <p className="saatilateksti mt-1">{saatilaTxt}</p>
            </td>
            <td className="text-right mt-0 pt-0">
              
              <h1 className="lampotilaIso float-right" style={{bottom:0}}>{Math.round(lampotila)} &deg;C </h1>
              <img src={saaikoni} className="float-right"></img>
            </td>
          </tr>
          <tr>
            <td className="align-bottom">
              <p className="paivamaara">{kuukaudet[kuukausi]} {paiva}</p>
              <p className="kellonaika">{kellonaika}</p>
            </td>
            <td>
              <p className="saatekstit">Wind: {tuuli} m/s</p>
              <p className="saatekstit">Humidity: {kosteus}%</p>
              <p className="saatekstit">Precipitation (3 h): {sademaara}mm</p>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}
