function hitungLuasSegitiga() {
    
    let alas = parseFloat(document.getElementById("alas").value);
    let tinggi = parseFloat(document.getElementById("tinggi").value);

    let luas = 0.5 * alas * tinggi;

    document.getElementById("hasilLuas").innerText = "Luas Segitiga = 0.5 * " + alas + " * " + tinggi + " = " +luas;
}

function hitungKelilingSegitiga() {

    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    let keliling = a + b + c;

    document.getElementById("hasilKeliling").innerText = "Keliling Segitiga = " + a + " + " + b + " + " + c + " = " +keliling;
}

