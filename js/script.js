const parola = prompt ('inserisci una parola')
console.log (parola)


// quello che vorrei svolgesse la mia funzione
const risultato = isPalindrome (parola) //boolean (true or false)


// ragionamento della funzione
if (risultato === true ) {
    console.log ('La parola ' + parola + ' è palindroma')
} else {
    console.log ('La parola ' + parola + ' non è palindroma')
}

                     //DICHIARAZIONI FUNZIONI
                     
//dichiarazione FUNZIONE
function isPalindrome (text) {
    console.log(text)//return boolean

    //convertitore in frase minuscole
    text = text.toLoerCase()

    //funzione annidata (generatore di parola invertita)
    let invertedText = invertiParola(text)
    
    console.log(text, invertedText)
    
    //SE parola === parola invertita
    if (text === invertedText) {
        // return true
        return true
        //ALTRIMENTI
    } else {
        // return false
        return false   
    }
}   

//dichiarazione seconda funzione
function parolaInvertita (string) {
    //return stringa inveertita

    //variabile vuota per ciclo FOR
    let invertedText = ''
    
    //generare stringa invertita CICLO FOR
    for (let i= string.length -1; i >= 0; i--) {
        //const char = tex.[i]//string or array
        const char = tex.charAt(i) //string
        console.log(char)
        invertedText += char
    }

    return invertedText
}