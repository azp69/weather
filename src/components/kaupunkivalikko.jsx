import React from 'react';

export function Kaupunkivalikko(props)
{
  const valikko = (
    <div className="card">
      <select className="kaupunkidropdown" value={props.valittuKaupunki} onChange={(e) => props.onValikkoUpdate(e.target.value)}>
        <option value="0">Kaikki kaupungit</option>
        <option value="1">Helsinki</option>
        <option value="2">Jyväskylä</option>
        <option value="3">Kuopio</option>
        <option value="4">Tampere</option>
      </select>
    </div>
  )

  return valikko;
}