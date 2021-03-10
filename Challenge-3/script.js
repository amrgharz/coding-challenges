let dolphinAvarage = (96 + 108 + 89) / 3;
let koalaAvarage   = (88 + 91 + 110) / 3;

console.log(dolphinAvarage, koalaAvarage);

if(dolphinAvarage > koalaAvarage){
    console.log(`Dolphins are the winners with a score of ${dolphinAvarage}`)
}else if (dolphinAvarage < koalaAvarage){
    console.log(`Koalas are the winners with a score of ${koalaAvarage}`)
}else{
    console.log(`That's a draw!!`)
}

// Bouneses
let minimumScore = 100;
if((dolphinAvarage > koalaAvarage) && (dolphinAvarage > minimumScore)){
    console.log(`Dolphins are the winners with a score of ${dolphinAvarage}`)
}else if ((dolphinAvarage < koalaAvarage) && (koalaAvarage > minimumScore)){
    console.log(`Koalas are the winners with a score of ${koalaAvarage}`)
}else{
    console.log(`That's a draw!! OR none of them reched the minimun score`)// I am lazy I know :( I should log another message if less than 100, but you got the idea:)
}
