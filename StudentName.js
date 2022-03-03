'use strict'

function setup() {
    console.log("--------------------------------")
    console.log("PRIMER PUNTO")
    wordCutter(testWord);

    console.log("--------------------------------")
    console.log("SEGUNDO PUNTO")
    console.log(wordSearcherIgnoreCase(testTargetWordC,testWordsList));

    
    console.log("--------------------------------")
    console.log("TERCER PUNTO")
    console.log(wordLengthClassifier(testSampleList));

    console.log("--------------------------------")
    console.log("CUARTO PUNTO")
    console.log(palindromeVerifier(onVerificationWordD));

    
    console.log("--------------------------------")
    console.log("QUINTO PUNTO")
    console.log(lettersCounter(containerTestObject));
    
    console.log("--------------------------------")
    console.log("SEXTO PUNTO")
    console.log(arrayJoiner(wordArrayA,wordArrayB));

    console.log("--------------------------------")
    console.log("SÉPTIMO PUNTO")
    console.log(anagramVerifier(testWordToExplore, wordsToVerify));
    
    console.log("--------------------------------")
    console.log("OCTAVO PUNTO")
    console.log(vocalsRemoverFromObject(testObjMultiContainer));

    console.log("--------------------------------")
    console.log("NOVENO PUNTO")
    console.log(vocalsRemoverFromObject(testObjMultiContainer));
    
    console.log("--------------------------------")
    console.log("DÉCIMO PUNTO")
    console.log(lastVocalReplacer(someWordsToTest));
    

    console.log("--------------------------------")
    console.log("UNDÉCIMO PUNTO")
    console.log(doubleListVerifier(testListA,testListB));
    

    
}

function draw() {
   
}

/*Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/

let testWord = "esternocleidomastoideo";
function wordCutter(word) {

    var arrIndex = [];
   

    while( arrIndex.length < word.length ){
        let r = Math.floor( random(0 , word.length) );
        if(arrIndex.indexOf(r) < 0){
            arrIndex.push(r);
        }
        
    }

    for(let i = 0 ; i < word.length ; i++){
        
        console.log(word.charAt(arrIndex[i]));
    }

   // :)
}


/*Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/

let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazón";
let testTargetWordC = "Tempurado";
let testWordsList = [
    "Sabr0sura",
    "Gozadera",
    "ritmo",
    "TEMPURADO",
    "SAZON",
    "Chevere",
    "Meneo",
];

// pruebe para cada palabra A, B y C
function wordSearcherIgnoreCase(targetWord, wordsList) {
    for(let i =0; i < wordsList.length ; i++){
        if(wordsList[i].toUpperCase() == targetWord.toUpperCase()  )
            return "La palabra "+targetWord+" SI se enuentra en el listado";
    }

    return "La palabra "+targetWord+" NO se encuentra en el listado";
    
}




/*Dado un arreglo de strings, retornar la palabra más larga,
la más corta y el tamaño promedio, el arreglo debe ser
entregado por parámetro y puede variar en cantidad de palabras
del arreglo de entrada libremente, debe retornar un objeto
con los valores mencionados*/

let testSampleList = [
    "Capitan",
    "Comandante",
    "Teniente",
    "Cabo",
    "Brigadier",
    "Coronel",
    "Zar",
    "Pedronel",
    "esternocleidomastoideo"

];

function wordLengthClassifier(wordsList) {


    var a = wordsList.map(x => x.length);
    const reducer = (accumulator, curr) => accumulator + (curr);
    const promedio =  (a.reduce(reducer) / wordsList.length)
    var aux = 0;
    var palabra = "";
    
    
    wordsList.forEach(element => {
        if(element.length > aux){
            aux = element.length;
            palabra = element;
        }
            
    });

    var larga = palabra;

    wordsList.forEach(element => {
        if(element.length < aux){
            aux = element.length;
            palabra = element;
        }
            
    });

    var corta = palabra;

    const objResultado = {
        "Larga" : larga,
        "Corta" : corta,
        "Promedio" : promedio
    }

    console.log(objResultado);

}


/*Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(word) {
    const rev =word.split('').reverse().join('');
    if(word.toUpperCase() === rev.toUpperCase())
        console.log("La palabra "+word+" es un palíndromo");
    else
        console.log("La palabra "+word+" NO es un palíndromo") ;
}



/*Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/
let containerTestObject = {
    list:["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}
function lettersCounter(objectContainer) {
    const vocales = ["a", "e", "i", "o", "u"];
    var arrRes =  ["vocales","consonantes"];
    var contV = 0;
    var contC = 0;
    var arrVoc = [];
    var arrCons = [];
    objectContainer.list.forEach(element => {
        
        for(let pal of element){
            if(vocales.includes(pal))
                contV++;
            else
                contC++;
        }
        
        arrVoc.push(contV);
        arrCons.push(contC);
        contV = 0;
        contC = 0;
        
    });

    arrRes["vocales"] = arrVoc;
    arrRes["consonantes"] = arrCons;

    console.log(arrRes);
}



/*Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿" ,"cómo", "estás", "?"];
let wordArrayB = ["te", "ves" ,"igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
    const arrRes = listA.concat(listB);    
    console.log(arrRes);
}



/*Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/

let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana" , "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {

    var arrRes = [];
    for(let i = 0; i < listOfWords.length ; i++){
        
        wordToExplore = wordToExplore.toLowerCase();
        var aux = listOfWords[i].toLowerCase();
        
        wordToExplore = wordToExplore.split("");
        aux = aux.split("");
        
        wordToExplore = wordToExplore.sort();
        aux = aux.sort();
        
        wordToExplore = wordToExplore.join("");
        aux = aux.join("");
        
        if(wordToExplore == aux){
          arrRes.push(i);
        }
    }

    console.log(arrRes);

    
}



/*Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

let testObjMultiContainer = {
    listA : ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
    listB : ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

function vocalsRemoverFromObject(objectMultiContainer) {
    
    const arrAux = objectMultiContainer.listA.concat(objectMultiContainer.listB);
    const regex = /[aeiou]/gi;
    for(let i = 0 ; i < arrAux.length ; i++){
        arrAux[i] = arrAux[i].toLowerCase().replace(regex,'');
    };

    const objRes = {
        "sinVocales" : arrAux
    }

    return objRes;
}



/*Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];

function lastVocalReplacer(words) {
    

    for(let i = 0 ; i < words.length; i++){

        const m = Math.max(
            words[i].lastIndexOf("a"),
            words[i].lastIndexOf("e"),
            words[i].lastIndexOf("i"),
            words[i].lastIndexOf("o"),
            words[i].lastIndexOf("u")
        );

        words[i] = words[i].substr(0,m) +   "x" + words[i].substr(  (m+1), (words[i].length - m) )  ;
    }
    console.log(words);
}




/*Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/


let testListA = ["amor", "sabor", "calor","firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {
    
    var objRes = {
        "reves" : []
    };
    for(let i = 0; i < listA.length ; i++){
        const rev = listA[i].split('').reverse().join('');
        for(let k = 0; k < listB.length ; k++){
            if(listB[k].toUpperCase() === rev.toUpperCase())
                objRes.reves.push(listA[i]+" Es la versión al revés de "+listB[k])
        };
        
    };
    
    console.log(objRes);

}

