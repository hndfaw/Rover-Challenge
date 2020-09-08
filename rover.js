 
const roverMoves = (currentLocation, moves) => {
    let splitCurrentLocation = currentLocation.split(" ");
    let zToNumber = {
       N: 1,
       E: 2,
       S: 3,
       W: 4
    };

    let x = parseInt(splitCurrentLocation[0]);
    let y = parseInt(splitCurrentLocation[1]);
    let z = zToNumber[splitCurrentLocation[2]];
    moves.split("").map(l => {

        // when rover turns to sides: L or R
       if(l === "L" && z === 1) {
            z = 4;
        } else if(l === "R" && z === 4) {
            z = 1
        } else if(l === "L") {
            z = z -1
        } else if (l === "R") {
            z = z + 1
      // when rover moves: M
        } else {
          if (z === 1) {
             y += 1
          } else if (z=== 2) {
             x += 1
          } else if (z === 3) {
             y -= 1
          } else {
             x -= 1
          }
         
       }
    })
    let returnedZ = Object.keys(zToNumber).find(key => zToNumber[key] === z);
    let output = `${x} ${y} ${returnedZ}`;
    return output;
 }
  
module.exports = roverMoves;