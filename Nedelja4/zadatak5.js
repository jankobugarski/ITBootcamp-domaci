


let recept = {
    name: 'Burger sa graskom',
    namirnice: [{
        naziv: 'crni luk',
        kolicina: 2,
        cena: 30
    }, {
        naziv: 'tost hleb',
        kolicina: 2,
        cena: 10
    }, {
        naziv: 'junece meso',
        kolicina: 1,
        cena: 800
    },
    {
        naziv: 'jaje',
        kolicina: 3,
        cena: 15
    }],
}


Object.prototype.izracunaj = function () {

    let vrednost = 0;
    for (i = 0; i < this.namirnice.length; i++) {
        vrednost += this.namirnice[i].kolicina * this.namirnice[i].cena
    }
    return vrednost;
}
console.log(recept.izracunaj())