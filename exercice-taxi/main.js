class Characters {
    constructor (name, sanity) {
        this.name = name
        this.sanity = sanity
    }
     trajects (playlist = musics) {
        let nbrChangedTaxi  = 0
        let redLightsNumber  = 0

        while (redLightsNumber < 30 && john.sanity > 0) {

            redLightsNumber++

            if (redLightsNumber === 1){
                console.log("John a passé " + redLightsNumber + " feu rouge")
            } else {
                console.log("John a passé " + redLightsNumber + " feux rouges")
            }

            if(redLightsNumber === 30 && john.sanity > 1) {

                console.log("John a réussi a passé tous les 30 feux rouges pour rentrer chez lui et se retrouve avec " + john.sanity + " points de santé mentale.")
                break
            } 
            if (redLightsNumber === 30 && john.sanity === 1) {
                console.log("John a réussi a passé tous les 30 feux rouges pour rentrer chez lui et se retrouve avec " + john.sanity + " point de santé mentale.")
                break
            }

            const random = Math.floor(Math.random() * playlist.length);

            if(playlist[random] === "Annissa - Wejdene"){
                console.log("L'horrible musique ", playlist[random], " est en train de jouer")

            } else {
                console.log("La musique ", playlist[random], " est en train de jouer");
            }                       
            
            if (playlist[random] === "Annissa - Wejdene" ) {

                john.sanity--
                console.log("La santé mentale de John est descendue à " + john.sanity)

                nbrChangedTaxi++
                console.log("John a changé de taxis " + nbrChangedTaxi + " fois.")
            }           

            if (john.sanity === 0) {
                
                    if (redLightsNumber === 30 - 1) {
                        console.log("John a perdu toute sa santé mentale et a explosé, alors qu'il ne lui restait que " + (30 - redLightsNumber) + " feu rouge avant de rentrer chez lui.")
                        break
                        } 
                        if (redLightsNumber < 25) {
                            console.log("John a perdu toute sa santé mentale et a explosé, et il lui restait encore " + (30 - redLightsNumber) + " feux rouges avant de rentrer chez lui.")
                        } else {
                            console.log("John a perdu toute sa santé mentale et a explosé, alors qu'il ne lui restait que " + (30 - redLightsNumber) + " feux rouges avant de rentrer chez lui.")
                        } 
               
                    }

                }                          
            }                
        }

let john = new Characters ("John", 10)
let musics = ["Annissa - Wejdene", "LILAC - IU", "Reckless - Madison Beer", "Easy - Troye Sivan", "I AM - IVE"]

console.log("John veut rentrer chez lui mais dès qu'il entend la musique Annissa - Wejdene, il perd un point de sa santé mentale, et doit changer de taxi")

john.trajects()


