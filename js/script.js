// main.js
"use strict"


// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede




// Creo array di oggetti

const members = [
    {
        "name": "Wayne",
        "surname": "Barnett",
        "job": "Founder & CEO",
        "photo": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "name": "Angela",
        "surname": "Caroll",
        "job": "Chief Editor",
        "photo": "angela-caroll-chief-editor.jpg"
    },
    {
        "name": "Walter",
        "surname": "Gordon",
        "job": "Office Manager",
        "photo": "walter-gordon-office-manager.jpg"
    },
    {
        "name": "Angela",
        "surname": "Lopez",
        "job": "Social Media Manager",
        "photo": "angela-lopez-social-media-manager.jpg"
    },
    {
        "name": "Scott",
        "surname": "Estrada",
        "job": "Developer",
        "photo": "scott-estrada-developer.jpg"
    },

    {
        "name": "Barbara",
        "surname": "Ramos",
        "job": "Graphic Designer",
        "photo": "barbara-ramos-graphic-designer.jpg"
    },
]

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < members.length; i++) {
    const teamCard = members[i];

}

// seleziono elemento HTML 
let getDocument = document.getElementById("card_container")

// invoco la funzione
cardCreation(getDocument, members)



// Stampare le stesse informazioni su DOM sottoforma di stringhe
function cardCreation(element, array) {

    for (let i = 0; i < members.length; i++) {
        const teamCard = members[i];

        getDocument.innerHTML += `<div class ="img_container">
        <img src="img/${teamCard.photo}" alt="">
        </div>
        <div class ="name">${teamCard.name}</div>
        <div class ="surname">${teamCard.surname}</div>
        <div class ="job">${teamCard.job}</div>`

    }
}
