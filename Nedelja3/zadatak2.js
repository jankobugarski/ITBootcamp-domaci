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
