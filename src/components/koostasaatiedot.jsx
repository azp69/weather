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
  const [errorMsg, setError] = useState(null);

  // Kaupunkien ID:t apissa
  const tampereID = '634964';
  const jyvaskylaID = '655195';
  const kuopioID = '650225';
  const helsinkiID = '658225';

  const debugMode = true; // Debuggausta varten haku omasta apista

  function haeSaadata(url, kaupunkiId)
  {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
            switch (kaupunkiId)
            {
                case tampereID:
                if (result.cod !== 401)
                    asetaDataTampere(result);
                else
                    setError("Wrong apikey!");
                break;

                case jyvaskylaID:
                if (result.cod !== 401)
                    asetaDataJyvaskyla(result);
                else
                    setError("Wrong apikey!");
                break;

                case kuopioID:
                if (result.cod !== 401)
                    asetaDataKuopio(result);
                else
                    setError("Wrong apikey!");
                break;

                case helsinkiID:
                if (result.cod !== 401)
                    asetaDataHelsinki(result);
                else
                    setError("Wrong apikey!");
                break;

                default:
                    break;
            }
            
        },
        
        (error) => {
          // console.log("Virhe haettaessa säädataa");
          setError("Error while loading data!");
        }
      )
  }

  useEffect(() => {
    if (debugMode)
    {
        haeSaadata(`https://palikka.org/shitti/weather2.php?id=${kuopioID}`, kuopioID);
        haeSaadata(`https://palikka.org/shitti/weather2.php?id=${tampereID}`, tampereID);
        haeSaadata(`https://palikka.org/shitti/weather2.php?id=${jyvaskylaID}`, jyvaskylaID);
        haeSaadata(`https://palikka.org/shitti/weather2.php?id=${helsinkiID}`, helsinkiID);
    }
    else
    {
        haeSaadata(`http://api.openweathermap.org/data/2.5/forecast?id=${kuopioID}&units=metric&appid=${apikey}`, kuopioID);
        haeSaadata(`http://api.openweathermap.org/data/2.5/forecast?id=${tampereID}&units=metric&appid=${apikey}`, tampereID);
        haeSaadata(`http://api.openweathermap.org/data/2.5/forecast?id=${jyvaskylaID}&units=metric&appid=${apikey}`, jyvaskylaID);
        haeSaadata(`http://api.openweathermap.org/data/2.5/forecast?id=${helsinkiID}&units=metric&appid=${apikey}`, helsinkiID);
    }
  }, [debugMode]);


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


  if (valinta > 0) // Näytetään yksittäisen kaupungin sää.
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
          return naytaViesti();
      }
  }
  else  // Näytetään kaikkien kaupunkien sää.
  {
      const saadata = [
          { "id" : "1" , "data" : saaDataHelsinki},
          { "id" : "2" , "data" : saaDataJyvaskyla},
          { "id" : "3" , "data" : saaDataKuopio},
          { "id" : "4" , "data" : saaDataTampere}
        ];

      if (saaDataHelsinki && saaDataJyvaskyla && saaDataTampere && saaDataKuopio)
      {
        const datat = saadata.map((d) => (
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
        return naytaViesti();
      }
  }

  function naytaViesti()
    {
        return (
            <>
                <div className="col-xl-2"></div>
                <div className="col-sm-12 col-xl-8">
                    <h2>{errorMsg}</h2>
                </div>
                <div className="col-xl-2"></div>
                </>
        );
    }
}

