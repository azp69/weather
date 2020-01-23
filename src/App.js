import React from 'react';

import './tyylit.css';

function App() {
  return (
    <div>
      <Header />
      <div class="container container-sm">
        <div class="row">
          <div class="col-sm-12 col-lg-6">
            <Kaupunkivalikko />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-lg-6">
            <SaaNyt />
          </div>
          <div class="col-sm-12 col-lg-6">
            <Tuntiennusteet />
          </div>
          <div class="col-sm-12 col-lg-6">
            <SaaNyt />
          </div>
        </div>
        
      </div>
    </div>
  );
}

function Tuntiennusteet()
{
  return (
    <div className="card-group">
      <div className="card">
        <div className="card-header">15:00</div>
      </div>
      <div className="card">
        <div className="card-header">18:00</div>
      </div>
        <div className="card">
        <div className="card-header">21:00</div>
      </div>
      <div className="card">
        <div className="card-header">00:00</div>
      </div>
      <div className="card">
        <div className="card-header">03:00</div>
      </div>
  </div>
         
  )
}

function SaaNyt()
{
  return (
    <div className="card saakorttiIso">
      <div className="card-body">
      <table style={{width:'100%'}}>
        <tbody>
          <tr>
            <td>
              <h1 className="kaupunkiotsikko">Helsinki</h1>
              <p className="saatilateksti">Scattered clouds</p>
            </td>
            <td className="text-right">
              <img src="https://openweathermap.org/img/wn/09d.png" className="align-top"></img>
              <h1 className="lampotilaIso d-inline-block">0 &deg;C </h1>
            </td>
          </tr>
          <tr>
            <td className="align-bottom">
              <p className="paivamaara">May 2nd</p>
              <p className="kellonaika">11:53</p>
            </td>
            <td>
              <p className="saatekstit">Wind: 5,1 m/s</p>
              <p className="saatekstit">Humidity: 86%</p>
              <p className="saatekstit">Precipitation (3 h): 5mm</p>
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



function Kaupunkivalikko() {

  const valikko = (
    <div className="card">
      <select className="kaupunkidropdown">
        <option>Kaikki kaupungit</option>
        <option>Helsinki</option>
        <option>Jyväskylä</option>
        <option>Kuopio</option>
        <option>Tampere</option>
      </select>
    </div>
  );

  return (
    valikko
  )
}


export default App;
