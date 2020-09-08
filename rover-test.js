var assert = require('chai').assert;
var roverMoves = require('./rover');

describe('roverMoves', function() {
  it('RoverMoves function should return correct output', function() {
      let data = [
          {
            inputCurrentPositon: "1 2 N",
            inputMoveInstructions: "LMLMLMLMM",
            expected: "1 3 N"
          },
          {
            inputCurrentPositon: "3 3 E",
            inputMoveInstructions: "MMRMMRMRRM",
            expected: "5 1 E"
          },
          {
            inputCurrentPositon: "0 0 N",
            inputMoveInstructions: "MMLMMMM",
            expected: "-4 2 W"
          },
          {
            inputCurrentPositon: "-4 2 W",
            inputMoveInstructions: "LMMMMMMLMMLMRMMMM",
            expected: "2 -3 E"
          },
          {
            inputCurrentPositon: "2 -3 E",
            inputMoveInstructions: "RRMMMMMMMRMMLMLMM",
            expected: "-6 -3 S"
          },
      ]
        data.map(d => {
            const { inputCurrentPositon, inputMoveInstructions, expected} = d
            var result = roverMoves(inputCurrentPositon, inputMoveInstructions);
        
            assert.equal(result, expected)

        })

  });

})