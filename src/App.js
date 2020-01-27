import React, {useState, useEffect} from 'react';

import {Kaupunkivalikko} from './components/kaupunkivalikko';
import {KoostaSaatiedot} from './components/koostasaatiedot';
import {Header} from './components/header';

import './tyylit.css';

function App() {

  const [valittuKaupunki, asetaKaupunki] = useState(0);
  
  const handleValikkoUpdate = (valinta) =>
  {
    asetaKaupunki(valinta);
  }

  return (
    <div className="container-tausta">
      <Header />
      <div className="container container-xl">
        <div className="row">
          <div className={(valittuKaupunki == '0') ? '' : 'col-xl-2'}></div>
          <div className={(valittuKaupunki == '0') ? 'col-sm-12 col-xl-12' : 'col-sm-12 col-xl-8'}>
            <Kaupunkivalikko valittuKaupunki={valittuKaupunki} onValikkoUpdate={handleValikkoUpdate}/>
          </div>
        </div>
        <div className="row">
          <KoostaSaatiedot valinta={valittuKaupunki} />
        </div>
        <div className={(valittuKaupunki == '0') ? '' : 'col-xl-2'}></div>
      </div>
    </div>
  );
}

export default App;
