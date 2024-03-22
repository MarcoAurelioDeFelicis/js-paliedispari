console.log ('Palondroma')


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

//dichiarazione FUNZIONE
function isPalindrome (text) {
    console.log(text)//return boolean

    //generare stringa invertita
    const parolaInvertita = parola. toLowerCase(). split(''). reverse(). join('')
    console.log (parolaInvertita)


    //SE parola === parola invertita
    if (parola === parolaInvertita) {
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
    //return stringa invertita
}