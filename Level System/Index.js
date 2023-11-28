//Level System; Begginer Dev

let name = ""
let Xp = 10023
let rank = ""

name = "Nickname"

switch (true){
    
    case Xp <= 1000:
        rank = "Iron"
    break
    
    case Xp >= 1001 && Xp <= 2000:
        rank = "Bronze"
    break

    case Xp >= 2001 && Xp <= 5000:
        rank = "Silver"
    break

    case Xp >= 5001 && Xp <= 7000:
        rank = "Gold"
    break

    case Xp >= 7001 && Xp <= 8000:
        rank = "Platinum"
    break

    case Xp >= 8001 && Xp <= 9000 :
        rank = "Diamond"
    break

    case Xp >= 9001 && Xp <= 10000 :
        rank = "Imortal"
    break

    case Xp >= 10001 :
        rank = "God"
    break  
}    
console.log("The hero " + name + " are at " + rank + " Level")







