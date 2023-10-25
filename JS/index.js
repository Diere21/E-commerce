const Tontou = await fetch('../JSON/last.json');
const  dernier = await Tontou.json();
const answer = await fetch('../JSON/logo.json');
const  logos = await answer.json();



function genererPhotosIndex(dernier){
    const lastProjet = document.querySelector(".accueil-photos");

    const titreh2 = document.createElement("h2");
    titreh2.innerText = "Mon dernier projet";
    lastProjet.appendChild(titreh2);

    const undivLast = document.createElement("div");
    lastProjet.appendChild(undivLast);

    const deuxdivLast = document.createElement("div");
    lastProjet.appendChild(deuxdivLast);

    
    for(let i = 0; i < dernier.length; i++){
        if(i < 3){
            const unlastPhotos = document.createElement("img");
            unlastPhotos.src = dernier[i].photo;
            unlastPhotos.alt = dernier[i].nom;
            undivLast.appendChild(unlastPhotos);
        }
       else{
            const deuxlastPhotos = document.createElement("img");
            deuxlastPhotos.src = dernier[i].photo;
            deuxlastPhotos.alt = dernier[i].nom;
            deuxdivLast.appendChild(deuxlastPhotos);
        }
       
    }
}
genererPhotosIndex(dernier);

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
