<<<<<<< HEAD
// 1.posto nisam bas siguran sta se trazi,prvo cu napisati sve brojeve iz prvih 1000 koji su deljivi sa 5,a zatim prvih 1000brojeva deljiv sa 

for(i=0; i<=1000;i++){

if(i % 5===0){

    console.log(i);
}

}


for(j=0; j<=5000;j++){


    if(j % 5 ===0){

        console.log(j);
    }
}
=======
// let _5 = 5;
// for(let i = 0; i < 1000; i++){
//     console.log(_5);
//     _5 += 5;
// }

for(let i = 1; i <= 1000;i++){
    console.log(i * 5);
}

// 2. Начин

// let count = 0;
// let counter = 1;
// while(count < 1000){
//     if(counter % 5 == 0){
//         console.log(counter);
//         count++;
//     }
//     counter++;
// }

// 3. Начин
// let br = 5; // Број за који тражимо 1000 првих
// // Почињемо од самог броја,па i повећавамо за тај број (знамо да нпр. ништа између 5 и 10 није дељиво са 5,па нема потребе да проверавамо)
// for(let i = br; i <= 1000 * br; i += br){
//     console.log(i);
// }
>>>>>>> fefe01b1c6f0aca7ff3601da3d62cd930050f636
