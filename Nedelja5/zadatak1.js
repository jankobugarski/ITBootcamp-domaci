let dugmeZaDodavanje = document.querySelector('.dugmeDodaj')
let velikiPrihodi = document.querySelector('.spisakPrihoda')
let velikiRashodi = document.querySelector('.spisakTroskova')
let blueIncoms = document.querySelector('.vrednostPrihoda')
let redExpences = document.querySelector('.vrednostTroskova')
let profitPolje=document.querySelector('.pocetnaVrednost')
let procenatPolje=document.querySelector('.procenatTroskova')
let okvirniDiv=document.querySelector('.container clearfix')
let okvirPrihoda=document.querySelector('.income')
let naslovPrihoda=document.querySelector('.icome__title')
let totalIncome = 0;
let totalExpences = 0;
let profit = 0;


dugmeZaDodavanje.addEventListener('click', function () {

    pokupiInpute()
})

function pokupiInpute() {



    let plusMinus = document.querySelector('.prihodiRashodi').value
    console.log(plusMinus)

    let inputText = document.querySelector('.opisVrednosti').value
    let inputBroj = document.querySelector('.dodajVrednost').value
    let prihodi = document.createElement('div');
    let textPrihoda=document.createElement('p')
    let valuePrihoda=document.createElement('p')
    let textRashoda=document.createElement('p')
    let valueRashoda=document.createElement('p')
    let valueProcenta=document.createElement('p')
    let rashodi = document.createElement('div')
    let pojedinacniProcenat=document.createElement('p')
    let thisRashodi=0;
    
    
     if (plusMinus == 'inc') {
        valuePrihoda.id='brojprihoda'
        textPrihoda.id='tekstPrihoda'
        
        textPrihoda.innerHTML=`${inputText}`
        valuePrihoda.innerHTML=`+${inputBroj}`

        
        prihodi.appendChild(textPrihoda)
        prihodi.appendChild(valuePrihoda)
        velikiPrihodi.appendChild(prihodi)
        totalIncome = totalIncome + parseInt(inputBroj)

        blueIncoms.innerHTML = totalIncome;

        
    }
    else if (plusMinus == 'exp') {
       
        thisRashodi=parseInt(inputBroj)
        pojedinacniProcenat.innerHTML=`${Math.round(thisRashodi/totalIncome*100)}% `
        textRashoda.innerHTML=`${inputText}`
        valueRashoda.innerHTML=`${inputBroj}`
        valueProcenta.appendChild(pojedinacniProcenat)
        rashodi.appendChild(textRashoda)
        rashodi.appendChild(valueRashoda)
        rashodi.appendChild(valueProcenta)
        
        textRashoda.className='rashodi1'
        textRashoda.id='razmak'
        valueRashoda.className='rashodi1'
        valueProcenta.className='rashodi1'
        valueRashoda.id='crvena'
        valueProcenta.id='crvena1'
        
        
        velikiRashodi.appendChild(rashodi)
        totalExpences = totalExpences + parseInt(inputBroj)
        redExpences.innerHTML = totalExpences
    }

    profit = totalIncome - totalExpences;
    profitPolje.innerHTML=profit;

    procenatPolje.innerHTML=`${Math.round(totalExpences/totalIncome *100)} %`






}


























 

    




























