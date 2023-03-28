//Array Immagini
let arrayimages =[
    "./assets/img/01.webp",
    "./assets/img/02.webp",
    "./assets/img/03.webp",
    "./assets/img/04.webp",
    "./assets/img/05.webp"
];

//variabili
const first = arrayimages[0];
const lastElement = arrayimages[arrayimages.length - 1];

for( let i=0; i < arrayimages.length; i++ ){
    document.querySelector('.images').innerHTML+= `<img class="imgcarousel" src="${arrayimages[i]}" alt="" width="400px"></img>`;

    //Condizione se prima o ultima immagine
    if(arrayimages[i] == first){
    document.querySelector('.images').innerHTML+= `<img class="imgcarousel attiva first" src="${arrayimages[i]}" alt="" width="400px"></img>`;
    } else if( arrayimages[i] == lastElement ){
        document.querySelector('.images').innerHTML+= `<img class="imgcarousel last" src="${arrayimages[i]}" alt="" width="400px"></img>`;
    }
}


function next(){
//variabili
let imgAttiva= document.querySelector('.imgcarousel.attiva');
let imgDaAttivare= imgAttiva.nextElementSibling

//Condizione se finiscono le img
if(imgAttiva.classList.contains('last')){
    imgDaAttivare= document.querySelector('.imgcarousel.first')
}

//rimuovere e aggiungere classe
imgAttiva.classList.remove('attiva')
imgDaAttivare.classList.add('attiva')
}


function prev(){
//variabili
let imgAttiva= document.querySelector('.imgcarousel.attiva');
let imgDaAttivare= imgAttiva.previousElementSibling

//Condizione se finiscono le img
if(imgAttiva.classList.contains('first')){
    imgDaAttivare= document.querySelector('.imgcarousel.last')
}

//rimuovere e aggiungere classe
imgAttiva.classList.remove('attiva')
imgDaAttivare.classList.add('attiva')
}