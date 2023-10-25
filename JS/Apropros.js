const answer = await fetch('../JSON/logo.json');
const  logos = await answer.json();
function genererLogo(logos){
    const footerElement = document.querySelector("footer");

    const linkObjectif = document.createElement("a");
    linkObjectif.href = "index.html";
    linkObjectif.className = "lien-icone";
    footerElement.appendChild(linkObjectif);

    const logoObectif = document.createElement("img");
    logoObectif.src = logos[0].photo;
    logoObectif.alt= logos[0].nom;    
    linkObjectif.appendChild(logoObectif);

    const siteElement = document.createElement("div");
    footerElement.appendChild(siteElement);
    for(let i = 1; i < logos.length - 1; i++){
        const lienSite = document.createElement("a");
        lienSite.target = "_blank";
        lienSite.href = logos[i].ref;
        lienSite.className = "lien-icone"
        siteElement.appendChild(lienSite);

        const siteLogo = document.createElement("img");
        siteLogo.src = logos[i].photo;
        siteLogo.alt = logos[i].nom;
        lienSite.appendChild(siteLogo);
    }
}
genererLogo(logos);
