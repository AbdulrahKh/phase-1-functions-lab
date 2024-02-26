// Code your solution in this file!

function distanceFromHqInBlocks(destination) {
  let distance = destination - 42;
  distance < 0 ? (distance = distance * -1) : distance;
  return distance;
}

function distanceFromHqInFeet(Blocks) {
  let distance = distanceFromHqInBlocks(Blocks);
  return distance * 264;
}

function distanceTravelledInFeet(start, end) {
  let distance = (end - start) * 264;
  distance < 0 ? (distance = distance * -1) : distance;
  return distance;
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400){
        return 0;
    } else if(distance > 400 && distance < 2000){
       return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500){
        return 25;
    } else if (distance > 2500) {
        return "cannot travel that far";
    }
};