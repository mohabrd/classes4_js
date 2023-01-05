class Lieu {
    constructor(nom, personnes){
        this.nom = nom;
        this.personnes = personnes;

    }
}


let Molengeek = new Lieu('Molengeek', []);
let Snack = new Lieu('Snack', []);
let Maison = new Lieu('Maison', []);


class Personne {
    constructor(nom, prenom, argent){
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;


    }
    seDeplacer(lieu){
        lieu.embarquer(this);

    }
}

let moha = new Personne('brd','moha',80);


class Bus {
    constructor(personnes, caisse){
        this.personnes = personnes;
        this.caisse = caisse;

    }
    embarquer(lieu){
        if (Personne.argent >= 2.8) {
            Personne.argent -= 2.8;
            lieu.bus.caisse += 2.8;
            lieu.personnes.push(Personne);
            
        }
    }
}

let busss = new Bus([],100);


console.log('Argent Moha :');
console.log(moha.argent);
console.log('Argent Caisse du bus :');
console.log(busss.caisse);

console.log('8h00');
moha.seDeplacer(Maison);
console.log(moi.argent);
console.log(Maison.bus.caisse);