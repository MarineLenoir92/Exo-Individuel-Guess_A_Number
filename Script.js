function question() {
    let givenNumber = prompt("Choisissez un nombre entre 0 et 50")
    givenNumber = parseInt(givenNumber)
    return givenNumber
}

function didIwin(number) {
    if (number < 22) {
        return false
    } else if (number > 22) {
        return false
    } else if (number == 22) {
        document.write("Vrai: Bravo vous avez trouvé le nombre")
        return true
    }
}


function gamePlay() {
    //Déclare variable resultfinal en dépôt global afin qu'elle soit utilisable en dépot local dans boucle "do" //
let resultFinal = false
    do {
        let resultat = question()
        resultFinal = didIwin(resultat)  
        //Equivaut à didIwin(resultat) //
        // + let resultFinal = didIwin()//
         console.log(resultFinal) 
    }

    while(resultFinal == false )
}


gamePlay()