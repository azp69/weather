import React from 'react';

export function SaaNyt({data})
{
  const kaupunki = (data.city.name == 'Jyvaeskylae') ? 'Jyväskylä' : data.city.name;
  const saatilaTxt = data.list[0].weather[0].description;
  const saaikoni = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
  const lampotila = data.list[0].main.temp;
  const aika = data.list[0].dt_txt;
  const tuuli = data.list[0].wind.speed;
  const kosteus = data.list[0].main.humidity;


  // Yhdistellään vesisade ja lumisade
  let sademaara = 0;
  
  try {
    sademaara = data.list[0].rain["3h"];
  }
  catch
  {
  }

  try {
      sademaara = sademaara + data.list[0].snow["3h"];
  }
  catch 
  {
  }

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
              <img src={saaikoni} className="float-right" alt={saatilaTxt}></img>
            </td>
          </tr>
          <tr>
            <td className="align-bottom">
              <p className="paivamaara">{tulostaPaivamaara(aika)}</p>
              <p className="kellonaika">{tulostaKellonaika(aika)}</p>
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

function tulostaPaivamaara(aika)
{
  const kuukaudet = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const d = new Date(aika);
  const kuukausi = d.getMonth();

  let paiva = d.getDate();

  if (paiva === 0)
    paiva = paiva + "st";
  else if (paiva === 1)
    paiva = paiva + "nd";
  else if (paiva === 2)
    paiva = paiva + "rd";
  else
    paiva = paiva + "th";

  return (`${kuukaudet[kuukausi]} ${paiva}`);
}

export function tulostaKellonaika(aika)
{
  const d = new Date(aika);
  const tunnit = (d.getHours() < 10) ? `0${d.getHours()}` : d.getHours();
  const minuutit = (d.getMinutes() < 10) ? `0${d.getMinutes()}` : d.getMinutes();
  const kellonaika = `${tunnit}:${minuutit}`;

  return kellonaika;
}
