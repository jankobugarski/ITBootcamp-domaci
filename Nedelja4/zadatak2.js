var Recepti = function (name, difficulty, ingredients) {
    this.name = name,
        this.difficulty = difficulty,
        this.ingredients = ingredients
}

var recept1 = new Recepti('omlet', 'pocetni', ['jaja', 'sunka', 'ulje'])


var recept2 = new Recepti('Kapreze salata', 'lak', ['bosiljak', 'mirodjija', 'mocarela', 'paradajz'])


var recept3 = new Recepti('Tiramisu sladoled', 'lak', ['jaja', 'instant kafa', 'maskarpone sir', 'piskote', 'secer', 'aroma vanile'])

var recept4 = new Recepti('Lazanje sa spanacem i sirom', 'srednji', ['beli luk', 'biber', 'jaja', 'crni luk', 'parmezan', 'spanac', 'mozzarela'])

var recept5 = new Recepti('Krmenadla sa sparglama', 'srednji', ['krmenadle', 'biber', 'spargla', 'crni luk', 'vegeta',])

var recept6 = new Recepti('Tartar biftek', 'tezak', ['beli luk', 'biber', 'biftek', 'konjak', 'mleveni kim', 'ljuta paprika', 'so'])


let niz=[recept1,recept2,recept3,recept4,recept5,recept6];

function filter(arr){

    for(i=0;i<arr.length;i++){
        if(arr[i].difficulty=='pocetni' || arr[i].difficulty=='lak'){
            console.log(
                `   ${arr[i].name}
                Tezina: ${arr[i].difficulty}
                Sastojci: ${arr[i].ingredients}`)    
               
            
        }
    }
}

filter(niz);