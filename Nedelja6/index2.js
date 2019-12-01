let posalji = document.getElementById('dugme');
let niz = []
let objekat = {}


posalji.addEventListener('click', () => {
    let text = document.getElementById('username')
    let lozinka = document.getElementById('password')
    text = text.value;
    lozinka = lozinka.value
    let a = lozinka.length;
    let b = text.length

    if (a >= 3 && a <= 15 && b >= 3 && b <= 15 && typeof lozinka.charAt(0) != 'number') {
        objekat.username = text;
        objekat.password = lozinka;
    }
    else {
        alert('lozinka i korisnicko ime moraju da sadrzi izmedju 3 i 15 karaktera i lozinka ne sme da pocne brojem')
    }
    niz.push(objekat)

    let json = JSON.stringify(niz)
    console.log(json)
}
    







})

5.









