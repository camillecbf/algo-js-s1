
let a = "Jean"
let b = "Paul"
let result = checkName(a, b)

function checkName(name1, name2){
    if (name1 === name2)
    return true
else {
    return false
}
}
console.log(result)


/*function cookingCookeo(legume1, legume2, legum3) {
    return legume1 + legume2 + legume3
    cookingCookeo("Poire","Peche","Pomme")*/




let c = 10
let d = 5
let resultat = calcul(c, d)

function calcul(nombre1, nombre2) {
    return nombre1 - nombre2
}
console.log(resultat)


let gabreiel = 1995
let samy = 2000


function calculAge(today, bornYear) {
    return today - bornYear
}
let resultCalculOne = calculAge(2023, 1995)
console.log(resultat)


let students = ["Samy", "Sofiane"]
let number = [1, 2345]
let things = [1, true, false, "hey"]

console.log(students)
console.log(students[0])

let amazonCart = []
amazonCart.push("Ps5", "Fifa", "IIM")

console.log(amazonCart[1])

amazonCart.splice(1, 1)

console.log(amazonCart)

let comments = ["hi", "heyyyy", "houuu"]
console.log(comments.length) //3
console.log(comments[0])

//1ere facon de faire une boucle
for(let i = 0; i< comments.length; i++) [
    //comments[i] += " et c'est tres cool"
    ////console.log(comments[i]) // pour afficher le nombre de com en nombre
   // //console.log(i) pour afficher chacun des commentaires
    comments[i] = "Bonjour, " + comments[i]
    //console.log(comments[i])
]


// 2eme facon de faire une boucle
comments.forEach(truc => {
    //truc equivaut a chaque element du tableau
    truc+= " c'est super" // truc = truc + " c'est super"
console.log(truc)
})