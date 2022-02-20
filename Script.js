let iteration = 1
let minRange = 0
let maxRange = 50


function numberToGuess(){
    let goodNumber = 0
    do {
    goodNumber = parseInt(prompt("Joueur 1 : Saisissez un nombre à deviner entre 0 et 50", "0 < ? < 50"))
}
while (goodNumber < 0 || goodNumber > 50)
    console.log(goodNumber)
    return goodNumber
}


function question() {
    let givenNumber = 0
    do {
        givenNumber = parseInt(prompt("Joueur 2: Ceci est votre tentative n°  " + iteration + " Choisissez un nombre entre " + minRange + " et " + maxRange, minRange + " < ? < " + maxRange))
    } while (givenNumber < minRange || givenNumber > maxRange)// "||" signifie "ou"
    console.log(givenNumber)
    iteration ++
    return givenNumber
}


function didIwin(number, choiceNumber) {

    if (number == choiceNumber) {
        alert("Vrai: Bravo vous avez trouvé le nombre")
        return true
        }

    else if (number < choiceNumber) {
        if (number > minRange){
            minRange = number
        }
        alert("Plus grand")
        

    } else {
        if (number < maxRange){
            maxRange = number
        }
        alert("Plus petit")  
    }

    return false
  
}


function gamePlay() {
    let choiceNumber = numberToGuess () // retour de goodNumber, chiffre à deviner entre 0 et 50 
    let resultat = question() // retour de givenNumber, chiffre choisi entre 0 et 50
    while (!didIwin(resultat, choiceNumber)){
        resultat = question()
    }
}


gamePlay()