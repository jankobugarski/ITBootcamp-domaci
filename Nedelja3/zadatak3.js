let counter = document.getElementById('counter');
let button = document.querySelectorAll('.btn-order');
let brojac = 0;
let buttonNow=document.querySelectorAll('.btn-order-now');
let datumO=new Date();
let datum=datumO.getDate();
let mesec=datumO.getMonth();
let sati=datumO.getHours();
let minuti=datumO.getMinutes();


button.forEach(element => {
    element.addEventListener('click', function () {

        brojac++;
        counter.innerHTML = brojac;

    });

});

buttonNow.forEach(element1 => {
    element1.addEventListener('click',function(){


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















