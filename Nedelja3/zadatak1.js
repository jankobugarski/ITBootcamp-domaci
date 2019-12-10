<<<<<<< HEAD
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
=======
// function maks(x,y,z){
//     return x > y ? ((x > z) ? x : z) : ((y > z) ? y : z);
// }

function maks(x,y,z){
    if(x > y){
        return x > z ? x : z;
    }
    else{
        return y > z ? y : z;
    }
}

console.log(maks(1,20,3));
>>>>>>> fefe01b1c6f0aca7ff3601da3d62cd930050f636
