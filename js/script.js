// creo array di ogettiv forniti 
const infoUtenti = [

    {
        "nome": "Wayne Barnett",
        "professione": "Founder & CEO",
         "foto": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "Angela Carrol",
        "professione": "Chief Editor",
        "foto":"angela-caroll-chief-editor.jpg"
    },

    {
        "nome": "Walter Gordon",
        "professione": "Office Manager",
         "foto":"walter-gordon-office-manager.jpg"
    },
    {
        "nome": "Angela Lopez",
        "professione": "Social Media Manager",
        "foto":"angela-lopez-social-media-manager.jpg"
    },
    {
        "nome": "Scott Estrada",
        "professione": "Developer",
        "foto":"scott-estrada-developer.jpg"
    },
    {
        "nome": "Barbara Ramos",
        "professione": "Graphic Designer",
        "foto":"barbara-ramos-graphic-designer.jpg"
    },


]
// seleziono il container dove creare le mie card
const teamContainer = document.querySelector('.card_container');

// richiamo la funziomne per stampare la card 
createInfo(infoUtenti, teamContainer);

// creo la funzione per stampare la card

function createInfo(infoUtenti, teamContainer) {

    
// creo ciclo per stampare ogni oggetto

    for (let i = 0; i < infoUtenti.length; i++) {
        const teamCard = infoUtenti[i];
    // compongo l'elemento da stapare
        teamContainer.innerHTML +=
            `<div class="team-card"><div class="card-image"><img class = "img_container"src="img/${teamCard.foto}" /></div><divclass="card-text"><p>${teamCard.nome}</p><div><p>${teamCard.professione}</p></div></div></div>`;
    }
}



