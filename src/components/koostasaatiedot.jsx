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

  function haeSaadata(url, kaupunkiId)
  {
    // const url = `http://api.openweathermap.org/data/2.5/forecast?id=${kaupunkiId}&units=metric&appid=${apikey}`;
    // const url = `https://palikka.org/shitti/weather2.php?id=${kaupunkiId}`;
    
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
            switch (kaupunkiId)
            {
                case tampereID:
                asetaDataTampere(result);
                break;

                case jyvaskylaID:
                asetaDataJyvaskyla(result);
                break;

                case kuopioID:
                asetaDataKuopio(result);
                break;

                case helsinkiID:
                asetaDataHelsinki(result);
                break;
            }
        },
        
        (error) => {
          console.log("Virhe haettaessa säädataa");
        }
      )
  }

  useEffect(() => {
    haeSaadata(`https://palikka.org/shitti/weather2.php?id=${kuopioID}`, kuopioID);
    haeSaadata(`https://palikka.org/shitti/weather2.php?id=${tampereID}`, tampereID);
    haeSaadata(`https://palikka.org/shitti/weather2.php?id=${jyvaskylaID}`, jyvaskylaID);
    haeSaadata(`https://palikka.org/shitti/weather2.php?id=${helsinkiID}`, helsinkiID);
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