function maxNumber(a,b,c){

if(a>=b && a>=c){

    return a;
}

else if(b>=a && b>=c){

    return b;


}

else { return c;

}
}


console.log(maxNumber(12,15,15));



function pizzaPrice(p, r) {





    let povrsina = Math.pow(r, 2) * Math.PI;

let price=p/povrsina;

return price;

}


console.log(pizzaPrice(2000,16))