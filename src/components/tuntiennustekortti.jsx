import React from 'react';

export function Tuntiennustekortti({kellonaika, saaikoni, lampotila, tuuli, kosteus, sademaara, eka, vika, saatilaTxt})
{
    // Ensimmäisessä ja viimeisessä kortissa on hieman erilaiset tyylit.
    let tyyli = "card px-0 ";

    if (eka)
    {
        tyyli = tyyli + "mr-1";
    }
    else if (vika)
    {
        tyyli = tyyli + "ml-1";
    }
    else
    {
        tyyli = tyyli + "mx-1";
    }

    return (
        <div className={tyyli}>
            <div className="card-body mr-0 px-1 text-center">
            <p className="tuntiotsikko text-center">{kellonaika}</p>
            <img src={saaikoni} alt={saatilaTxt}></img>
            <p className="lampotilaTuntiennuste text-center">{lampotila}&deg;C</p>
            </div>
            <div className="footer saaennusteFooter text-center">
            <p>{tuuli}m/s</p>
            <p>{kosteus}%</p>
            <p>{sademaara}mm</p>
            </div>
        </div>
    )

    
}