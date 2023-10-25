const reponse = await fetch('../JSON/article.json');
const  photos = await reponse.json();
const answer = await fetch('../JSON/logo.json');
const  logos = await answer.json();

// cretion de la fonction qui me permet d'afficher les phoptos dans le main


function genererPhotosPortfolio(photos){
    const sectionPhotos = document.querySelector(".portfolio-section-photos");

    const titrePaysages = document.createElement("h2");
    titrePaysages.innerText = "Paysages";
    sectionPhotos.appendChild(titrePaysages);

    const paysageGrilles = document.createElement("div");
    paysageGrilles.className = "grid-paysages";
    sectionPhotos.appendChild(paysageGrilles);
    
    const titrePortrait = document.createElement("h2");
    titrePortrait.innerText = "Portrait";
    sectionPhotos.appendChild(titrePortrait);

    const portraitGrilles = document.createElement("div");
    portraitGrilles.className = "grid-portraits";
    sectionPhotos.appendChild(portraitGrilles);

    for(let i = 0; i < photos.length; i++){
        // photos[i].categorie === "paysage
        
        if(photos[i].categorie === "paysage"){
            const LinkElement  = document.createElement("a");
            LinkElement.href = photos[i].image;
            LinkElement.className = "lien-conteneur-photo";
            paysageGrilles.appendChild(LinkElement);
            
           
            const paysageImage = document.createElement("img");
            paysageImage.src = photos[i].image;
            paysageImage.alt = photos[i].nom;
            LinkElement.appendChild(paysageImage);

            const divPhotos = document.createElement("div");
            divPhotos.className = "photo-hover";
            divPhotos.innerText = "Voir la photo";
            LinkElement.appendChild(divPhotos); 

            
        }    
        else{
            const LinkElement  = document.createElement("a");
            LinkElement.href = photos[i].image;
            LinkElement.className = "lien-conteneur-photo";
            portraitGrilles.appendChild(LinkElement);

            const portraitImage = document.createElement("img");
            portraitImage.src = photos[i].image;
            portraitImage.alt = photos[i].nom;
            LinkElement.appendChild(portraitImage);

            const divPhotos = document.createElement("div");
            divPhotos.className = "photo-hover";
            divPhotos.innerText = "Voir la photo";
            LinkElement.appendChild(divPhotos); 

            
        }
       
        
    }         
}
genererPhotosPortfolio(photos);
 
// la partie footer 
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


