let kelimeler = ["ELMA", "ARMUT","KOSMAK","YUZMEK","YAZILIM", "MUHASEBE" ];
let soru = Math.floor(Math.random()*kelimeler.length);
let kelime = kelimeler[soru];
console.log(kelime);
let kelimeHarfleri = kelime.split("");
let girilenHarfler = [];
let dogruHarfler = [];
let yanlisHarfler = [];
let ipucu = document.getElementById("ipucu");
let sonuc = document.querySelector(`#tahminEdilen`);

if (kelime=="ELMA" || kelime=="ARMUT" ) {
    ipucu.innerHTML= `Kelimemiz ${kelime.length} harften oluşan bir meyve çeşidi.`
}
else if (kelime=="KOSMAK" || kelime=="YUZMEK") {
    ipucu.innerHTML=`Kelimemiz ${kelime.length} harften oluşan bir yüklem.`
} 
else {
    ipucu.innerHTML=`Kelimemiz ${kelime.length} harften oluşan bir sektör adı.`
}


function harfA() {
    let harfA = document.getElementById("harfA").value;
    girilenHarfler.push(harfA);
    if (kelimeHarfleri.indexOf(harfA) !== -1) {
        dogruHarfler.push(harfA);
        document.getElementById("harfA").style.backgroundColor = "green";
        document.getElementById('harfA').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfA);
        document.getElementById("harfA").style.backgroundColor = "red";
        document.getElementById('harfA').removeAttribute('onclick');
      }
}
function harfB() {
    let harfB = document.getElementById("harfB").value;
    girilenHarfler.push(harfB);
    if (kelimeHarfleri.indexOf(harfB) !== -1) {
        dogruHarfler.push(harfB);
        document.getElementById("harfB").style.backgroundColor = "green";
        document.getElementById('harfB').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfB);
        document.getElementById("harfB").style.backgroundColor = "red";
        document.getElementById('harfB').removeAttribute('onclick');
      }
}
function harfC() {
    let harfC = document.getElementById("harfC").value;
    girilenHarfler.push(harfC);
    if (kelimeHarfleri.indexOf(harfC) !== -1) {
        dogruHarfler.push(harfC);
        document.getElementById("harfC").style.backgroundColor = "green";
        document.getElementById('harfC').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfC);
        document.getElementById("harfC").style.backgroundColor = "red";
        document.getElementById('harfC').removeAttribute('onclick');
      }
}
function harfD() {
    let harfD = document.getElementById("harfD").value;
    girilenHarfler.push(harfD);
    if (kelimeHarfleri.indexOf(harfD) !== -1) {
        dogruHarfler.push(harfD);
        document.getElementById("harfD").style.backgroundColor = "green";
        document.getElementById('harfD').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfD);
        document.getElementById("harfD").style.backgroundColor = "red";
        document.getElementById('harfD').removeAttribute('onclick');
      }
}
function harfE() {
    let harfE = document.getElementById("harfE").value;
    girilenHarfler.push(harfE);
    if (kelimeHarfleri.indexOf(harfE) !== -1) {
        dogruHarfler.push(harfE);
        document.getElementById("harfE").style.backgroundColor = "green";
        document.getElementById('harfE').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfE);
        document.getElementById("harfE").style.backgroundColor = "red";
        document.getElementById('harfE').removeAttribute('onclick');
      }
}
function harfF() {
    let harfF = document.getElementById("harfF").value;
    girilenHarfler.push(harfF);
    if (kelimeHarfleri.indexOf(harfF) !== -1) {
        dogruHarfler.push(harfF);
        document.getElementById("harfF").style.backgroundColor = "green";
        document.getElementById('harfF').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfF);
        document.getElementById("harfF").style.backgroundColor = "red";
        document.getElementById('harfF').removeAttribute('onclick');
      }
}
function harfG() {
    let harfG = document.getElementById("harfG").value;
    girilenHarfler.push(harfG);
    if (kelimeHarfleri.indexOf(harfG) !== -1) {
        dogruHarfler.push(harfG);
        document.getElementById("harfG").style.backgroundColor = "green";
        document.getElementById('harfG').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfG);
        document.getElementById("harfG").style.backgroundColor = "red";
        document.getElementById('harfG').removeAttribute('onclick');
      }
}
function harfH() {
    let harfH = document.getElementById("harfH").value;
    girilenHarfler.push(harfH);
    if (kelimeHarfleri.indexOf(harfH) !== -1) {
        dogruHarfler.push(harfH);
        document.getElementById("harfH").style.backgroundColor = "green";
        document.getElementById('harfH').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfH);
        document.getElementById("harfH").style.backgroundColor = "red";
        document.getElementById('harfH').removeAttribute('onclick');
      }
}
function harfI() {
    let harfI = document.getElementById("harfI").value;
    girilenHarfler.push(harfI);
    if (kelimeHarfleri.indexOf(harfI) !== -1) {
        dogruHarfler.push(harfI);
        document.getElementById("harfI").style.backgroundColor = "green";
        document.getElementById('harfI').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfI);
        document.getElementById("harfI").style.backgroundColor = "red";
        document.getElementById('harfI').removeAttribute('onclick');
      }
}
function harfK() {
    let harfK = document.getElementById("harfK").value;
    girilenHarfler.push(harfK);
    if (kelimeHarfleri.indexOf(harfK) !== -1) {
        dogruHarfler.push(harfK);
        document.getElementById("harfK").style.backgroundColor = "green";
        document.getElementById('harfK').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfK);
        document.getElementById("harfK").style.backgroundColor = "red";
        document.getElementById('harfK').removeAttribute('onclick');
      }
}
function harfL() {
    let harfL = document.getElementById("harfL").value;
    girilenHarfler.push(harfL);
    if (kelimeHarfleri.indexOf(harfL) !== -1) {
        dogruHarfler.push(harfL);
        document.getElementById("harfL").style.backgroundColor = "green";
        document.getElementById('harfL').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfL);
        document.getElementById("harfL").style.backgroundColor = "red";
        document.getElementById('harfL').removeAttribute('onclick');
      }
}
function harfM() {
    let harfM = document.getElementById("harfM").value;
    girilenHarfler.push(harfM);
    if (kelimeHarfleri.indexOf(harfM) !== -1) {
        dogruHarfler.push(harfM);
        document.getElementById("harfM").style.backgroundColor = "green";
        document.getElementById('harfM').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfM);
        document.getElementById("harfM").style.backgroundColor = "red";
        document.getElementById('harfM').removeAttribute('onclick');
      }
}
function harfN() {
    let harfN = document.getElementById("harfN").value;
    girilenHarfler.push(harfN);
    if (kelimeHarfleri.indexOf(harfN) !== -1) {
        dogruHarfler.push(harfN);
        document.getElementById("harfN").style.backgroundColor = "green";
        document.getElementById('harfN').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfN);
        document.getElementById("harfN").style.backgroundColor = "red";
        document.getElementById('harfN').removeAttribute('onclick');
      }
}
function harfO() {
    let harfO = document.getElementById("harfO").value;
    girilenHarfler.push(harfO);
    if (kelimeHarfleri.indexOf(harfO) !== -1) {
        dogruHarfler.push(harfO);
        document.getElementById("harfO").style.backgroundColor = "green";
        document.getElementById('harfO').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfO);
        document.getElementById("harfO").style.backgroundColor = "red";
        document.getElementById('harfO').removeAttribute('onclick');
      }
}
function harfP() {
    let harfP = document.getElementById("harfP").value;
    girilenHarfler.push(harfP);
    if (kelimeHarfleri.indexOf(harfP) !== -1) {
        dogruHarfler.push(harfP);
        document.getElementById("harfP").style.backgroundColor = "green";
        document.getElementById('harfP').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfP);
        document.getElementById("harfP").style.backgroundColor = "red";
        document.getElementById('harfP').removeAttribute('onclick');
      }
}
function harfR() {
    let harfR = document.getElementById("harfR").value;
    girilenHarfler.push(harfR);
    if (kelimeHarfleri.indexOf(harfR) !== -1) {
        dogruHarfler.push(harfR);
        document.getElementById("harfR").style.backgroundColor = "green";
        document.getElementById('harfR').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfR);
        document.getElementById("harfR").style.backgroundColor = "red";
        document.getElementById('harfR').removeAttribute('onclick');
      }
}
function harfS() {
    let harfS = document.getElementById("harfS").value;
    girilenHarfler.push(harfS);
    if (kelimeHarfleri.indexOf(harfS) !== -1) {
        dogruHarfler.push(harfS);
        document.getElementById("harfS").style.backgroundColor = "green";
        document.getElementById('harfS').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfS);
        document.getElementById("harfS").style.backgroundColor = "red";
        document.getElementById('harfS').removeAttribute('onclick');
      }
}
function harfT() {
    let harfT = document.getElementById("harfT").value;
    girilenHarfler.push(harfT);
    if (kelimeHarfleri.indexOf(harfT) !== -1) {
        dogruHarfler.push(harfT);
        document.getElementById("harfT").style.backgroundColor = "green";
        document.getElementById('harfT').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfT);
        document.getElementById("harfT").style.backgroundColor = "red";
        document.getElementById('harfT').removeAttribute('onclick');
      }
}
function harfU() {
    let harfU = document.getElementById("harfU").value;
    girilenHarfler.push(harfU);
    if (kelimeHarfleri.indexOf(harfU) !== -1) {
        dogruHarfler.push(harfU);
        document.getElementById("harfU").style.backgroundColor = "green";
        document.getElementById('harfU').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfU);
        document.getElementById("harfU").style.backgroundColor = "red";
        document.getElementById('harfU').removeAttribute('onclick');
      }
}
function harfV() {
    let harfV = document.getElementById("harfV").value;
    girilenHarfler.push(harfV);
    if (kelimeHarfleri.indexOf(harfV) !== -1) {
        dogruHarfler.push(harfV);
        document.getElementById("harfV").style.backgroundColor = "green";
        document.getElementById('harfV').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfV);
        document.getElementById("harfV").style.backgroundColor = "red";
        document.getElementById('harfV').removeAttribute('onclick');
      }
}
function harfY() {
    let harfY = document.getElementById("harfY").value;
    girilenHarfler.push(harfY);
    if (kelimeHarfleri.indexOf(harfY) !== -1) {
        dogruHarfler.push(harfY);
        document.getElementById("harfY").style.backgroundColor = "green";
        document.getElementById('harfY').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfY);
        document.getElementById("harfY").style.backgroundColor = "red";
        document.getElementById('harfY').removeAttribute('onclick');
      }
}
function harfZ() {
    let harfZ = document.getElementById("harfZ").value;
    girilenHarfler.push(harfZ);
    if (kelimeHarfleri.indexOf(harfZ) !== -1) {
        dogruHarfler.push(harfZ);
        document.getElementById("harfZ").style.backgroundColor = "green";
        document.getElementById('harfZ').removeAttribute('onclick');
      } 
      else {
        yanlisHarfler.push(harfZ);
        document.getElementById("harfZ").style.backgroundColor = "red";
        document.getElementById('harfZ').removeAttribute('onclick');
        return harfZ;
      }
}

function tahmin() {
    let inputValue = document.querySelector(`.KullaniciTahmin`).value;
    if (inputValue==kelime) {
        sonuc.innerHTML = `Tahmininiz DOĞRU! Tebrikler!`;
        sonuc.style.backgroundColor = "green";
        document.querySelector('.cevap').removeAttribute('onclick');
        document.querySelector('.cevap').style.display = "none";
        document.querySelector(".icon4").style.display = "none";
        document.querySelector(".icon1").style.display = "block";   
        document.querySelector(".icon7").style.display = "none";   
    } 
    else {
        sonuc.innerHTML = `Tahmininiz YANLIŞ!`;
        sonuc.style.backgroundColor = "red";
        document.querySelector(".icon4").style.display = "none";
        document.querySelector(".icon7").style.display = "block";
        document.querySelector(".icon1").style.display = "none";
    }
}

function cevabiGoster() {
    sonuc.innerHTML = `Aradığınız kelime : ${kelime}`;
    sonuc.style.backgroundColor = "blue";
    document.querySelector('.cevap').style.backgroundColor = "red";
    document.querySelector('#guess').removeAttribute('onclick');
}

function yeniSoru() {
    location.reload();
}