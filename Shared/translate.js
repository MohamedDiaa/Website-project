

var en = {
    "header1": "Antimicrobial coatings",
    "body1": "The Corona pandemic with increasing confirmed cases challenges us. New hygiene concepts are needed. Before Covid-19 in mid-March, simple cleaning and disinfection was sufficient. But shortly after wiping, new colonization can occur. 99% of the time, a surface is exposed to viruses and germs until the next disinfection occurs. What if there was a surface that could defend itself against certain viruses around the clock? Our antimicrobial coating inactivates the Sars cov-2 coronavirus 10x faster, providing additional protection against the communicable disease.",
}


var sv = {
    "header1": "Antimikrobiella beläggningar",
    "body1": "Coronapandemin med allt fler bekräftade fall utmanar oss. Det behövs nya hygienkoncept. Före Covid-19 i mitten av mars räckte det med enkel rengöring och desinfektion. Men kort efter utplåningen kan ny kolonisation ske. 99 % av tiden är en yta utsatt för virus och bakterier fram till nästa desinfektion. Tänk om det fanns en yta som kunde försvara sig mot vissa virus dygnet runt? Vår antimikrobiella beläggning inaktiverar Sars cov-2 coronavirus 10 gånger snabbare, vilket ger ytterligare skydd mot den smittsamma sjukdomen."
}

var it = {
    "header1": "",
    "body1": ""
}

function translateLang(lang) {
    var dict = lang;

    for (const key in dict) {

        document.getElementById(key).innerText = dict[key];
    }
}

