function pizzaPrice(p, r) {





    let povrsina = Math.pow(r, 2) * Math.PI;

let price=p/povrsina;

return price;

}


console.log(pizzaPrice(2000,16))