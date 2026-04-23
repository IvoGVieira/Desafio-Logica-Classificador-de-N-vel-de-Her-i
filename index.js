let nick = "Voi"
let xp = 1

if (xp <= 1000){
    console.log( "O Herói de nome " + nick + " está no nivel Ferro!")

} else if (xp > 1000 && xp <= 2000){
    console.log( "O Herói de nome " + nick + " está no nivel Bronze!")

} else if (xp > 2000 && xp <= 5000){
    console.log( "O Herói de nome " + nick + " está no nivel Prata!")

} else if (xp > 5000 && xp <= 7000){
    console.log( "O Herói de nome " + nick + " está no nivel Ouro!")

} else if (xp > 7000 && xp <= 8000){
    console.log( "O Herói de nome " + nick + " está no nivel Platina!")

} else if (xp > 8000 && xp <= 9000){
    console.log( "O Herói de nome " + nick + " está no nivel Ascendente!")

} else if (xp > 9000 && xp <= 10000){
    console.log( "O Herói de nome " + nick + " está no nivel Imortal!")

} else{
    console.log( "O Herói de nome " + nick + " está no nivel Radiante!")

}
console.log("Hello " + nick)