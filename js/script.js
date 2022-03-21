function showmenu() {
  document.getElementById("otroModo").classList.toggle("show");
}

var imgEs = document.querySelector(".flags__img-es");
var imgEn = document.querySelector(".flags__img-en");
var imgBr = document.querySelector(".flags__img-br");

imgEs.addEventListener('click',idiomaEs);
imgEn.addEventListener('click',idiomaEn);
imgBr.addEventListener('click',idiomaBr);

function idiomaEs(){ 
  location.href="./index.html";
}

function idiomaEn(){ 
  location.href="./en.html";
}

function idiomaBr(){ 
  location.href="./br.html";
}

var imgEsp = document.querySelector(".flags__es-img");
var imgEng = document.querySelector(".flags__en-img");
var imgBra = document.querySelector(".flags__br-img");

imgEsp.addEventListener('click',idiomaEsp);
imgEng.addEventListener('click',idiomaEng);
imgBra.addEventListener('click',idiomaBra);


function idiomaEsp(){ 
  location.href="./index.html";
}

function idiomaEng(){ 
  location.href="./en.html";
}

function idiomaBra(){ 
  location.href="./br.html";
}