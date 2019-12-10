<<<<<<< HEAD
let counter = document.getElementById('counter');
let button = document.querySelectorAll('.btn-order');
let brojac = 0;
let buttonNow=document.querySelectorAll('.btn-order-now');




button.forEach(element => {
    element.addEventListener('click', function () {

        brojac++;
        counter.innerHTML = brojac;

    });

});

buttonNow.forEach(element1 => {
    element1.addEventListener('click',function(){
        let datumO=new Date();
        let datum=datumO.getDate();
        let mesec=datumO.getMonth();
        let sati=datumO.getHours();
        let minuti=datumO.getMinutes();

        if(brojac !== 0){

            alert(`narucili ste ${brojac} pizza ${datum}.${mesec} u ${sati}:${minuti}`)
    
            brojac=0;
            counter.innerHTML = brojac;
    
    
    
        }
        else{
    
            alert(`u vasoj korpi se nalazi 0 pizza`)
        }
    
    


    })
    


    
    
})















=======
// function priceRelative(cena,r){
//     return cena / (r*r*Math.PI);
// }

function minimum(x,y,z){
    return x < y ? ((x < z) ? x : z) : ((y < z) ? y : z);
}

// function cheapestPizza(p1,r1,p2,r2,p3,r3){
//     let price1 = priceRelative(p1,r1);
//     let price2 = priceRelative(p2,r2);
//     let price3 = priceRelative(p3,r3);
//     return minimum(price1,price2,price3);
// }

// console.log(priceRelative(200,18))
// console.log(priceRelative(100,12))
// console.log(priceRelative(300,16))

// console.log(cheapestPizza(200,18,100,12,300,16));

// Додатно, погледајте шта су објекти:

pizza1 = {
    price: 200,
    r: 18
}
pizza2 = {
    price: 100,
    r: 12
}
pizza3 = {
    price: 300,
    r: 16
}

function priceRelative(pizza){
    return pizza.price / (pizza.r ** 2 *Math.PI);
}
// function cheapestPizza2(p1,p2,p3){
//     price1 = priceRelative(p1);
//     price2 = priceRelative(p2);
//     price3 = priceRelative(p3);
//     return minimum(price1,price2,price3);
// }

function cheapestPizza2(...pice){
    let cene = [];
    for (pica of pice){
        cene.push(priceRelative(pica));
    }
    return Math.min(...cene);
}

console.log(priceRelative(pizza1))
console.log(priceRelative(pizza2))
console.log(priceRelative(pizza3))

console.log(cheapestPizza2(pizza1,pizza2,pizza3));
>>>>>>> fefe01b1c6f0aca7ff3601da3d62cd930050f636
