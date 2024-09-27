// EX1--------------------------------------------------

// declaration tableau des nombres
let nums = [2, 5, 8, 7, 3];

// utilisation de la mehode map 
let nouvNums = nums.map((value)=>{
    return value*3;
});
// l'affichage de resultat
console.log(nouvNums);



// EX2---------------------------------------------------

// declaration de tableau
const personnes = [
  { nom: "ALAMI", age: 33, estMember: true },
  { nom: "FATIHI", age: 24, estMember: false },
  { nom: "RAJI", age: 45, estMember: true },
  { nom: "RAMI", age: 37, estMember: false },
];

// utilisation de methose filter pour filtrer les personnes qui son membres


const membre = personnes.filter((value)=>{
    if(value.estMember){
        return value;
    }
})

// utilisation de methode map pour afficher les noms des personnes qui son me


const estMenmbre =membre.map((value)=>{
    return value.nom ;
});
// l'affichage 
console.log(estMenmbre);




// EX3-----------------------------------------------------
const inscriptions = [
    { id: 10, nom: 'ALAMI', filiere: 'DEVOWFS' },
    { id: 11, nom: 'RAJI', filiere: 'DEVOWFS' },
    { id: 12, nom: 'NAJI', filiere: 'DEVOWFS' },
    { id: 13, nom: 'IBRAHIMI', filiere: 'DEVOWFS' }
];


// ajouter les frais a tout les inscriptions

const frais = 100;

// const frais2 = 200;
// const frais3 = 500;
// const frais4 = 250;

const inscriptionsAvecFrais = inscriptions.map((value)=>{
    return {
        ...value , frais
    }
})

console.log(inscriptionsAvecFrais)


// creer nouveau inscription


const newInscription = {
    id:14 ,
    nom :'Ramos',
    filiere : 'DEVOWFS' ,
    frais :250
};



// creer pure Fonction

let FonctionPure = (newInscription , inscription)=>{
    return [...inscription,newInscription];
}

const inscriptions2 = FonctionPure(newInscription , inscriptions);

// l'affichage de l'inscriptions apres l'ajoute
console.log(inscriptions2);




 






