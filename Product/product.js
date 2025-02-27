var product = [
    {
        "title": "Antimicrobial coatings",
        "body": `The Corona pandemic with increasing confirmed cases challenges us. New hygiene concepts are needed.
            Before Covid-19 in mid-March, simple cleaning and disinfection was sufficient. But shortly after
            wiping, new colonization can occur. 99% of the time, a surface is exposed to viruses and germs until
            the next disinfection occurs. What if there was a surface that could defend itself against certain
            viruses around the clock? Our antimicrobial coating inactivates the Sars cov-2 coronavirus 10x
            faster, providing additional protection against the communicable disease.`,

        "img": "/assets/AdobeStock_342983353-1-min.webp"

    },
    {
        "title": `Nano coating`,
        "body": `Nano” (Greek: dwarf) is the part of a billionth of a meter. Ultra-thin coatings prevent limescale
            from forming on shower stalls in the bathroom, for example, as with nano glass sealing, or simply
            allow wine to roll off upholstery and T-shirts. Nano sealings have no effect on UV radiation – wood
            undergoes its characteristic aging as desired, but remains free of mold and moss.`,
        "img": "/assets/kermikbeschichtung-auto.jpg.pagespeed.ce.AjTXKsgJ2w.jpg"

    }
    ,
    {
        "title": `Waterproofing spray`,
        "body": `Clothing or shoes waterproof have always been at the expense of nature in the past. Per- and
            polyfluorinated chemicals in waterproofing spray polluted the environment. However, we have an
            ecologically sustainable solution that works in wind and weather. Sprayed on at a distance of 30
            centimeters, our impregnation spray technology works reliably after drying and is suitable for all
            textiles and outdoor shoes. Gore Tex and Sympatex membranes can be re-impregnated once the effect
            wears off.`,
        "img": "/assets/versiegelung-nano-ceramic-schutz.jpg.pagespeed.ce.txYEbo6Eiw.jpg"

    }
];

let link = window.location.href;
let arr = link.split(`?`);
let param = arr[arr.length - 1]
let arr2 = param.split(`=`);

let v = arr2[1];
if (v != undefined && v < product.length) {

    document.getElementById(`pro-title`).textContent = product[v].title;
    document.getElementById(`pro-body`).textContent = product[v].body;
    document.getElementById(`pro-img`).setAttribute(`src`, product[v].img);

}
else {
    document.getElementById(`pro-title`).textContent = product[0].title;
    document.getElementById(`pro-body`).textContent = product[0].body;
    document.getElementById(`pro-img`).setAttribute(`src`, product[0].img);
}