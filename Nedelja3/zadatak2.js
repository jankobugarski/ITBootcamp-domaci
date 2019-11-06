function pizzaPrice(p, r) {





    let povrsina = Math.pow(r, 2) * Math.PI;

let price=p/povrsina;

return price;

}
let pizza1=`prva pica jer joj je cena  ${pizzaPrice(1299,16) } po cm`;
let pizza2=`druga pizza jer joj je cena  ${pizzaPrice(1400,17)  } po cm `;
let pizza3= `treca pizza jer joj je cena ${pizzaPrice(1000,10)  } po cm `;

function maxNumber(a,b,c){

if(a<b && a<c){

    return a;
}

else if(b<a && b<c){

    return b;


}

else { return c;

}
}
console.log(`najjeftinija pizza je ${maxNumber(pizza1,pizza2,pizza3) }`)    

//  jos jedna ideja za zadatak


let d;
function cenaPizze(r1,r2,r3,p1,p2,p3,fn){


    let povrsina1 = Math.pow(r1, 2) * Math.PI;
    let povrsina2 = Math.pow(r2, 2) * Math.PI;
    let povrsina3 = Math.pow(r3, 2) * Math.PI;

    let price1=p1/povrsina1;
    let price2=p2/povrsina2;
    let price3=p3/povrsina3;

    d = fn(price1,price2,price3);



    
}
cenaPizze(25,16,18,1000,1900,1500,maxNumber);
console.log(d)
