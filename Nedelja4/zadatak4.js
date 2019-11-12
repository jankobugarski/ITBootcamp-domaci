{ 
let Sastojci=function(naziv,kolicina,cena){
    this.naziv=naziv;
    this.kolicina=kolicina;
    this.cena=cena;

}
let sastojak1=new Sastojci('kim',5,100);
let sastojak2=new Sastojci('jaja',100,15);
let sastojak3=new Sastojci('beli luk',30,8);
let sastojak4=new Sastojci('meso',10,300);
let sastojak5=new Sastojci('mleko',60,90);

var Recepti = function (name, difficulty, ingredients) {
    this.name = name,
        this.difficulty = difficulty,
        this.ingredients = ingredients
}

var recept1 = new Recepti('omlet', 'pocetni', [{sastojak1},{sastojak2},{sastojak3},{sastojak4},{sastojak5}])
console.log(recept1);

var recept2 = new Recepti('Kapreze salata', 'lak', [{sastojak1},{sastojak2},{sastojak3},{sastojak4},{sastojak5}])
console.log(recept2);

var recept3 = new Recepti('Tiramisu sladoled', 'lak', [{sastojak1},{sastojak2},{sastojak3},{sastojak4},{sastojak5}]);
var recept4 = new Recepti('Lazanje sa spanacem i sirom', 'srednji', [{sastojak1},{sastojak2},{sastojak3},{sastojak4},{sastojak5}])
var recept5 = new Recepti('Krmenadla sa sparglama', 'srednji', [{sastojak1},{sastojak2},{sastojak3},{sastojak4},{sastojak5}])

var recept6 = new Recepti('Tartar biftek', 'tezak', [{sastojak1},{sastojak2},{sastojak3},{sastojak4},{sastojak5}])
console.log(recept5)

}