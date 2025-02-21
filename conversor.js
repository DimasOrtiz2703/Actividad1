
function wattsToHP(watts) {
    return watts / 745.7; 
}

function hpToWatts(hp) {
    return hp * 745.7; 
}


let watts = 1000; 
let hp = 1.5; 


let convertedToHP = wattsToHP(watts);
let convertedToWatts = hpToWatts(hp);

console.log(watts + " Watts son " + convertedToHP.toFixed(2) + " Caballos de Fuerza.");
console.log(hp + " Caballos de Fuerza son " + convertedToWatts.toFixed(2) + " Watts.");
