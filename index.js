
const hq = 42;

function distanceFromHqInBlocks(thisValue) {
    return Math.abs(thisValue - hq);
}

function distanceFromHqInFeet(thisValue) {
    return distanceFromHqInBlocks(thisValue) * 264;
}


function distanceTravelledInFeet(start, stop) {
    return Math.abs(stop - start) * 264;
}

function calculatesFarePrice(start, stop) {
    const distance = distanceTravelledInFeet(start, stop);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
};

console.log('Distance from HQ in blocks (34):', distanceFromHqInBlocks(34));
console.log('Distance from HQ in feet (34):', distanceFromHqInFeet(34));
console.log('Distance travelled in feet (34, 50):', distanceTravelledInFeet(34, 50));
console.log('Fare price (34, 50):', calculatesFarePrice(34, 50));
console.log('Distance from HQ in blocks (42):', distanceFromHqInBlocks(42));
console.log('Distance from HQ in feet (42):', distanceFromHqInFeet(42));
console.log('Distance travelled in feet (42, 50):', distanceTravelledInFeet(42, 50));
console.log('Fare price (42, 50):', calculatesFarePrice(42, 50));
console.log('Distance from HQ in blocks (50):', distanceFromHqInBlocks(50));
console.log('Distance from HQ in feet (50):', distanceFromHqInFeet(50));
console.log('Distance travelled in feet (50, 42):', distanceTravelledInFeet(50, 42));
console.log('Fare price (50, 42):', calculatesFarePrice(50, 42)); 
