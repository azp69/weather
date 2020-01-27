import React, {useState, useEffect} from 'react';

import {Kaupunkivalikko} from './components/kaupunkivalikko';
import {KoostaSaatiedot} from './components/koostasaatiedot';


import './tyylit.css';

function App() {

  const [valittuKaupunki, asetaKaupunki] = useState(0);
  
  const handleValikkoUpdate = (valinta) =>
  {
    // console.log(valinta);
    asetaKaupunki(valinta);
  }

  
  let rakenne;

  if (valittuKaupunki == '0')
  {
    rakenne = (
      <div className="container-tausta">
      <Header />
      <div className="container container-xl">
        <div className="row">
          <div className="col-sm-12 col-xl-12">
            <Kaupunkivalikko valittuKaupunki={valittuKaupunki} onValikkoUpdate={handleValikkoUpdate}/>
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
            <Kaupunkivalikko valittuKaupunki={valittuKaupunki} onValikkoUpdate={handleValikkoUpdate}/>
          </div>
          <div className="col-xl-2"></div>
        </div>
        <div className="row">
          <KoostaSaatiedot valinta={valittuKaupunki} valittuKaupunki={valittuKaupunki}/>
        </div>
      </div>
    </div>
    )
  }

  return rakenne;
}

function Header() {
  return (
    <div className="headeri">
      <h1 className="text-center">Säätutka</h1>
    </div>
  )
}

export default App;
