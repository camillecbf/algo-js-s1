

class Pokemon {
    constructor (name, attack, def, hp) {
        this.name = name
        this.attack = attack
        this.def = def
        this.hp = hp
    }

    attackPokemon (specifique) {
        specifique.hp -= this.attack - specifique.def
    }
}

let evoli = new Pokemon("Evoli", 55, 50, 92)
let salameche = new Pokemon("Salameche", 58, 43, 87)

while (salameche.hp > 0 && evoli.hp > 0) {

    console.log("Evoli a", evoli.hp, "hp")
    console.log("Salameche a", salameche.hp, "hp")
    
    salameche.attackPokemon (evoli)
    
    if (evoli.hp <= 0) {
        console.log ("Evoli a perdu son combat contre Salameche et se retrouve à ", 
        evoli.hp, " hp.")
        break
    }
    
    evoli.attackPokemon (salameche)
    
    if (salameche.hp <= 0) {
        console.log ("Salameche a perdu son combat contre Evoli et se retrouve à ", 
        salameche.hp, " hp.")
        break
    }
}


