<<<<<<< HEAD
for( i=0;i<=100; i++){

if(i % 3==0  && i % 5==0){

    console.log('FizzBuzz');
}
else if(i % 3==0){

    console.log('Fizz');
}
else if(i % 5==0) {
    console.log('Buzz');


}
else {

    console.log(i);
}

}
=======
for(let i = 1; i <= 100; i++){
    let ispis = '';
    if(i % 3 == 0 ) 
        ispis += 'Fizz';
    if(i % 5 == 0) 
        ispis += 'Buzz';
    if(i % 7 == 0)
        ispis += 'Zazz';
    if(i % 13 == 0)
        ispis += 'Pezz';
    if(ispis == '') 
        ispis = i;
    console.log(ispis)
}

>>>>>>> fefe01b1c6f0aca7ff3601da3d62cd930050f636
