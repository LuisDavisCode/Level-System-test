//Level System; Begginer Dev

let name = "Aldrich"
let Xp = 0

switch (true){
    
    case Xp <= 1000:
    console.log("The hero " + name + " are at Iron Rank")
    break
    
    case Xp >= 1001 && Xp <= 2000:
    console.log("The hero " + name + " are at Bronze Rank")
    break

    case Xp >= 2001 && Xp <= 5000:
    console.log("The hero " + name + " are at Silver Rank")
    break

    case Xp >= 5001 && Xp <= 7000:
    console.log("The hero " + name + " are at Gold Rank")
    break

    case Xp >= 7001 && Xp <= 8000:
    console.log("The hero " + name + " are at Platinum Rank")
    break

    case Xp >= 8001 && Xp <= 9000 :
    console.log("The hero " + name + " are at Diamond Rank")
    break

    case Xp >= 9001 && Xp <= 10000 :
    console.log("The hero " + name + " are at Imortal Rank")
    break

    case Xp >= 10001 :
    console.log("The hero " + name + " are at God Rank")
    break  
}   








