import React, {useState, useEffect} from 'react';
import {apikey} from './apikey';
import './tyylit.css';



function App() {

  const [valittuKaupunki, asetaKaupunki] = useState(0);
  
  const valikko = (
    <div className="card">
      <select className="kaupunkidropdown" value={valittuKaupunki} onChange={(e) => asetaKaupunki(e.target.value)}>
        <option value="0">Kaikki kaupungit</option>
        <option value="1">Helsinki</option>
        <option value="2">Jyväskylä</option>
        <option value="3">Kuopio</option>
        <option value="4">Tampere</option>
      </select>
    </div>
  )

  let rakenne;

  if (valittuKaupunki == '0')
  {
    rakenne = (
      <div className="container-tausta">
      <Header />
      <div className="container container-xl">
        <div className="row">
          <div className="col-sm-12 col-xl-12">
            {valikko}
          </div>
        </div>
        <div className="row">
          <KoostaSaatiedot valinta={valittuKaupunki} />
        </div>
      </div>
    </div>
    )
  }

  else
  {
    rakenne = (
    <div className="container-tausta">
      <Header />
      <div className="container container-xl">
        <div className="row">
          <div className="col-xl-2"></div>
          <div className="col-sm-12 col-xl-8">
            {valikko}
          </div>
          <div className="col-xl-2"></div>
        </div>
        <div className="row">
          <KoostaSaatiedot valinta={valittuKaupunki} />
        </div>
      </div>
    </div>
    )
  }

  return rakenne;
}


function KoostaSaatiedot(props)
{
  const [saaDataTampere, asetaDataTampere] = useState(null);
  const [saaDataJyvaskyla, asetaDataJyvaskyla] = useState(null);
  const [saaDataKuopio, asetaDataKuopio] = useState(null);
  const [saaDataHelsinki, asetaDataHelsinki] = useState(null);

  const tampereID = '634964';
  const jyvaskylaID = '655195';
  const kuopioID = '650225';
  const helsinkiID = '658225';

  let naytto;
  
  useEffect(() => {
    // const url = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${apikey}`;
    const url = `https://palikka.org/shitti/weather.php?id=${tampereID}`;
    
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          asetaDataTampere(result);
        },
        
        (error) => {
          console.log("Virhe");
        }
      )
  }, []);

  useEffect(() => {
    // const url = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${apikey}`;
    const url = `https://palikka.org/shitti/weather.php?id=${kuopioID}`;
    
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          asetaDataKuopio(result);
        },
        
        (error) => {
          console.log("Virhe");
        }
      )
  }, []);

  useEffect(() => {
    // const url = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${apikey}`;
    const url = `https://palikka.org/shitti/weather.php?id=${jyvaskylaID}`;
    
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          asetaDataJyvaskyla(result);
        },
        
        (error) => {
          console.log("Virhe");
        }
      )
  }, []);

  useEffect(() => {
    // const url = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${apikey}`;
    const url = `https://palikka.org/shitti/weather.php?id=${helsinkiID}`;
    
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          asetaDataHelsinki(result);
        },
        (error) => {
          console.log("Virhe");
        }
      )
  }, []);


  switch(props.valinta)
  {
    case '1':
      if (saaDataHelsinki !== null)
      {
        naytto = (
          <>
            <div className="col-xl-2"></div>
            <div className="col-sm-12 col-xl-8">
              <SaaNyt data={saaDataHelsinki} />
              <Tuntiennusteet data={saaDataHelsinki} />
            </div>
            <div className="col-xl-2"></div>
          </>
        );
        return naytto;
      }
      else
        return (<p>Loading</p>);

    case '2':
      if (saaDataJyvaskyla !== null)
      {
        naytto = (
          <>
            <div className="col-xl-2"></div>
            <div className="col-sm-12 col-xl-8">
              <SaaNyt data={saaDataJyvaskyla} />
              <Tuntiennusteet data={saaDataJyvaskyla} />
            </div>
            <div className="col-xl-2"></div>
          </>
        );
        return naytto;
      }
      else
        return (<p>Loading</p>);

    case '4':
      if (saaDataTampere !== null)
      {
        naytto = (
          <>
            <div className="col-xl-2"></div>
            <div className="col-sm-12 col-xl-8">
              <SaaNyt data={saaDataTampere} />
              <Tuntiennusteet data={saaDataTampere} />
            </div>
            <div className="col-xl-2"></div>
          </>
        );
        return naytto;
      }
      else
        return (<p>Loading</p>);

    case '3':
      if (saaDataKuopio !== null)
      {
        naytto = (
          <>
            <div className="col-xl-2"></div>
            <div className="col-sm-12 col-xl-8">
              <SaaNyt data={saaDataKuopio} />
              <Tuntiennusteet data={saaDataKuopio} />
            </div>
            <div className="col-xl-2"></div>
          </>
        );
        return naytto;
      }
      else
        return (<p>Loading</p>);

    default:

      if (saaDataHelsinki !== null && saaDataJyvaskyla !== null && saaDataKuopio !== null && saaDataTampere !== null)
      {
        naytto = (
          <>
            <div className="col-sm-12 col-xl-6">
              <SaaNyt data={saaDataHelsinki} />
              <Tuntiennusteet data={saaDataHelsinki} />
            </div>
            <div className="col-sm-12 col-xl-6">
              <SaaNyt data={saaDataJyvaskyla} />
              <Tuntiennusteet data={saaDataJyvaskyla} />
            </div>
            <div className="col-sm-12 col-xl-6">
              <SaaNyt data={saaDataKuopio} />
              <Tuntiennusteet data={saaDataKuopio} />
            </div>
            <div className="col-sm-12 col-xl-6">
              <SaaNyt data={saaDataTampere} />
              <Tuntiennusteet data={saaDataTampere} />
            </div>
          </>
        );
        return naytto;
      }
      else
        return (<p>Loading</p>);
  }
}

function Tuntiennusteet(props)
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

  const sademaara = [
    props.data.list[1].rain, 
    props.data.list[2].rain, 
    props.data.list[3].rain, 
    props.data.list[4].rain, 
    props.data.list[5].rain
  ];

  
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

  for (var i = 1; i < 6; i++)
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

function SaaNyt(props)
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
  const sademaara = props.data.list[0].rain;
  
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
      <table style={{width:'100%'}}>
        <tbody>
          <tr>
            <td>
              <h1 className="kaupunkiotsikko">{kaupunki}</h1>
              <p className="saatilateksti">{saatilaTxt}</p>
            </td>
            <td className="text-right">
              <img src={saaikoni}></img>
              <h1 className="lampotilaIso d-inline-block">{Math.round(lampotila)} &deg;C </h1>
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

function Header() {
  return (
    <div className="headeri">
      <h1 className="text-center">Säätutka</h1>
    </div>
  )
}

export default App;
