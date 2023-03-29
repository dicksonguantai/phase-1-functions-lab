// Code your solution in this file!
const scuberHqBlock =42
let pickuppointBlock = 50

function distanceFromHqInBlocks(pickup){
    let distanceinblocks = Math.abs(pickup-42);
    return distanceinblocks;

}
function distanceFromHqInFeet(pickup){
    const feet = 264
    let distanceInBlocks = distanceFromHqInBlocks(pickup);
    let distanceInFeet = (distanceInBlocks*feet);
    return distanceInFeet;
}

function distanceTravelledInFeet(start,destination){
    let distanceTravelled = (Math.abs(start-destination)*264);
    return distanceTravelled;

}

function calculatesFarePrice(start,destination){
const distanceTravelled= distanceTravelledInFeet(start,destination);
let fare;
if(distanceTravelled<=400){
    fare = 0;
}else if(distanceTravelled>=400 && distanceTravelled<=2000){
    fare = ((distanceTravelled-400)*0.02);
} else if(distanceTravelled>2000 && distanceTravelled <2500){
    fare = 25;
}else{
    return "cannot travel that far"
}
return fare;
}