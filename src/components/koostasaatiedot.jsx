import React, {useState, useEffect} from 'react';
import {Tuntiennusteet} from './tuntiennusteet';
import {SaaNyt} from './saanyt';
import {apikey} from '../apikey';

export function KoostaSaatiedot({valinta})
{
  const [saaDataTampere, asetaDataTampere] = useState(null);
  const [saaDataJyvaskyla, asetaDataJyvaskyla] = useState(null);
  const [saaDataKuopio, asetaDataKuopio] = useState(null);
  const [saaDataHelsinki, asetaDataHelsinki] = useState(null);

  const tampereID = '634964';
  const jyvaskylaID = '655195';
  const kuopioID = '650225';
  const helsinkiID = '658225';

  useEffect(() => {
    // const url = `http://api.openweathermap.org/data/2.5/forecast?id=${tampereID}&units=metric&appid=${apikey}`;
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
     // const url = `http://api.openweathermap.org/data/2.5/forecast?id=${kuopioID}&units=metric&appid=${apikey}`;
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
     // const url = `http://api.openweathermap.org/data/2.5/forecast?id=${jyvaskylaID}&units=metric&appid=${apikey}`;
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
     // const url = `http://api.openweathermap.org/data/2.5/forecast?id=${helsinkiID}&units=metric&appid=${apikey}`;
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


  let saadata;

  switch(valinta)
  {
    case '1':
        saadata = saaDataHelsinki;
        break;

    case '2':
        saadata = saaDataJyvaskyla;
        break;

    case '3':
        saadata = saaDataKuopio;
        break;

    case '4':
        saadata = saaDataTampere;
        break;
    
    default:
        break;

  }


  if (valinta > 0)
  {
      if (saadata)
      {
          return (
            <>
                <div className="col-xl-2"></div>
                <div className="col-sm-12 col-xl-8">
                <SaaNyt data={saadata} />
                <Tuntiennusteet data={saadata} />
                </div>
                <div className="col-xl-2"></div>
            </>
          );
      }
      else
      {
          return <h2>Loading data</h2>
      }
  }
  else
  {
      const saadata = [
          { "id" : "1" , "data" : saaDataHelsinki},
          { "id" : "2" , "data" : saaDataJyvaskyla},
          { "id" : "3" , "data" : saaDataKuopio},
          { "id" : "4" , "data" : saaDataTampere}
        ];

      if (saaDataHelsinki && saaDataJyvaskyla && saaDataTampere && saaDataKuopio)
      {
        const datat = saadata.map((d, index) => (
            <div key={"div" + d.id} className="col-sm-12 col-xl-6 mb-2">
                <SaaNyt key={"saaNyt" + d.id} data={d.data} />
                <Tuntiennusteet key={d.id} data={d.data} />
            </div>
        ));

        return (
            <>
                {datat}
            </>
            );
      }
      else
      {
          return <h2>Loading data</h2>
      }
  }
}