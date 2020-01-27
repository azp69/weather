Asennusohjeet:

- Suorita 'npm install' projektihakemistossa asentaaksesi tarvittavat moduulit.
- Luo apikey.js -tiedosto weather\src\apikey.js polkuun.
- apikey.js tiedoston sisältö:

####
const apikey = 'abcdefg123';
export {apikey};
####

- Varmista weather\src\components\koostasaatiedot.jsx -tiedostosta että 'debugMode = false;'
- Mikäli debugMode on päällä, haetaan tiedot staattisesta testiapista, eikä siis openweathermapin apista.
- Suorita 'npm start'
