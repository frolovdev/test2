import * as RoundingModes from "@easymoney/core";

export const roundExamples = [
  [2.6, RoundingModes.RoundingModes.HALF_EVEN, "3"],
  [2.5, RoundingModes.RoundingModes.HALF_EVEN, "2"],
  [3.5, RoundingModes.RoundingModes.HALF_EVEN, "4"],
  [-2.6, RoundingModes.RoundingModes.HALF_EVEN, "-3"],
  [-2.5, RoundingModes.RoundingModes.HALF_EVEN, "-2"],
  [-3.5, RoundingModes.RoundingModes.HALF_EVEN, "-4"],

  [2, RoundingModes.RoundingModes.HALF_EVEN, "2"],

  [2.5, RoundingModes.RoundingModes.HALF_DOWN, "2"],
  [2.6, RoundingModes.RoundingModes.HALF_DOWN, "3"],
  [-2.5, RoundingModes.RoundingModes.HALF_DOWN, "-2"],
  [-2.6, RoundingModes.RoundingModes.HALF_DOWN, "-3"],
  [2.2, RoundingModes.RoundingModes.HALF_UP, "2"],
  [2.5, RoundingModes.RoundingModes.HALF_UP, "3"],
  [2, RoundingModes.RoundingModes.HALF_UP, "2"],
  [-2.5, RoundingModes.RoundingModes.HALF_UP, "-3"],
  [-2, RoundingModes.RoundingModes.HALF_UP, "-2"],
  [2, RoundingModes.RoundingModes.HALF_DOWN, "2"],
  ["12.50", RoundingModes.RoundingModes.HALF_DOWN, "12"],
  ["-12.50", RoundingModes.RoundingModes.HALF_DOWN, "-12"],
  [-1.5, RoundingModes.RoundingModes.HALF_UP, "-2"],
  [-8328.578947368, RoundingModes.RoundingModes.HALF_UP, "-8329"],
  [-8328.5, RoundingModes.RoundingModes.HALF_UP, "-8329"],
  [-8328.5, RoundingModes.RoundingModes.HALF_DOWN, "-8328"],
  [5.0, RoundingModes.RoundingModes.HALF_EVEN, "5"],
  [5.1, RoundingModes.RoundingModes.HALF_EVEN, "5"],
  [5.4, RoundingModes.RoundingModes.HALF_EVEN, "5"],
  [5.5, RoundingModes.RoundingModes.HALF_EVEN, "6"],
  [5.6, RoundingModes.RoundingModes.HALF_EVEN, "6"],
  [5.9, RoundingModes.RoundingModes.HALF_EVEN, "6"],
  [6.0, RoundingModes.RoundingModes.HALF_EVEN, "6"],
  [6.1, RoundingModes.RoundingModes.HALF_EVEN, "6"],
  [6.4, RoundingModes.RoundingModes.HALF_EVEN, "6"],
  [6.5, RoundingModes.RoundingModes.HALF_EVEN, "6"],
  [6.6, RoundingModes.RoundingModes.HALF_EVEN, "7"],
  [6.9, RoundingModes.RoundingModes.HALF_EVEN, "7"],
  [7.0, RoundingModes.RoundingModes.HALF_EVEN, "7"],
  [-7.0, RoundingModes.RoundingModes.HALF_EVEN, "-7"],
  [-6.9, RoundingModes.RoundingModes.HALF_EVEN, "-7"],
  [-6.6, RoundingModes.RoundingModes.HALF_EVEN, "-7"],
  [-6.5, RoundingModes.RoundingModes.HALF_EVEN, "-6"],
  [-6.4, RoundingModes.RoundingModes.HALF_EVEN, "-6"],
  [-6.1, RoundingModes.RoundingModes.HALF_EVEN, "-6"],
  [-6.0, RoundingModes.RoundingModes.HALF_EVEN, "-6"],
  [-5.9, RoundingModes.RoundingModes.HALF_EVEN, "-6"],
  [-5.6, RoundingModes.RoundingModes.HALF_EVEN, "-6"],
  [-5.5, RoundingModes.RoundingModes.HALF_EVEN, "-6"],
  [-5.4, RoundingModes.RoundingModes.HALF_EVEN, "-5"],
  [-5.1, RoundingModes.RoundingModes.HALF_EVEN, "-5"],
  [-5.0, RoundingModes.RoundingModes.HALF_EVEN, "-5"],
  [5.0, RoundingModes.RoundingModes.HALF_UP, "5"],
  [5.1, RoundingModes.RoundingModes.HALF_UP, "5"],
  [5.4, RoundingModes.RoundingModes.HALF_UP, "5"],
  [5.5, RoundingModes.RoundingModes.HALF_UP, "6"],
  [5.6, RoundingModes.RoundingModes.HALF_UP, "6"],
  [5.9, RoundingModes.RoundingModes.HALF_UP, "6"],
  [6.0, RoundingModes.RoundingModes.HALF_UP, "6"],
  [6.1, RoundingModes.RoundingModes.HALF_UP, "6"],
  [6.4, RoundingModes.RoundingModes.HALF_UP, "6"],
  [6.5, RoundingModes.RoundingModes.HALF_UP, "7"],
  [6.6, RoundingModes.RoundingModes.HALF_UP, "7"],
  [6.9, RoundingModes.RoundingModes.HALF_UP, "7"],
  [7.0, RoundingModes.RoundingModes.HALF_UP, "7"],
  [-7.0, RoundingModes.RoundingModes.HALF_UP, "-7"],
  [-6.9, RoundingModes.RoundingModes.HALF_UP, "-7"],
  [-6.6, RoundingModes.RoundingModes.HALF_UP, "-7"],
  [-6.5, RoundingModes.RoundingModes.HALF_UP, "-7"],
  [-6.4, RoundingModes.RoundingModes.HALF_UP, "-6"],
  [-6.1, RoundingModes.RoundingModes.HALF_UP, "-6"],
  [-6.0, RoundingModes.RoundingModes.HALF_UP, "-6"],
  [-5.9, RoundingModes.RoundingModes.HALF_UP, "-6"],
  [-5.6, RoundingModes.RoundingModes.HALF_UP, "-6"],
  [-5.5, RoundingModes.RoundingModes.HALF_UP, "-6"],
  [-5.4, RoundingModes.RoundingModes.HALF_UP, "-5"],
  [-5.1, RoundingModes.RoundingModes.HALF_UP, "-5"],
  [-5.0, RoundingModes.RoundingModes.HALF_UP, "-5"],
  [5.0, RoundingModes.RoundingModes.HALF_DOWN, "5"],
  [5.1, RoundingModes.RoundingModes.HALF_DOWN, "5"],
  [5.4, RoundingModes.RoundingModes.HALF_DOWN, "5"],
  [5.5, RoundingModes.RoundingModes.HALF_DOWN, "5"],
  [5.6, RoundingModes.RoundingModes.HALF_DOWN, "6"],
  [5.9, RoundingModes.RoundingModes.HALF_DOWN, "6"],
  [6.0, RoundingModes.RoundingModes.HALF_DOWN, "6"],
  [6.1, RoundingModes.RoundingModes.HALF_DOWN, "6"],
  [6.4, RoundingModes.RoundingModes.HALF_DOWN, "6"],
  [6.5, RoundingModes.RoundingModes.HALF_DOWN, "6"],
  [6.6, RoundingModes.RoundingModes.HALF_DOWN, "7"],
  [6.9, RoundingModes.RoundingModes.HALF_DOWN, "7"],
  [7.0, RoundingModes.RoundingModes.HALF_DOWN, "7"],
  [-7.0, RoundingModes.RoundingModes.HALF_DOWN, "-7"],
  [-6.9, RoundingModes.RoundingModes.HALF_DOWN, "-7"],
  [-6.6, RoundingModes.RoundingModes.HALF_DOWN, "-7"],
  [-6.5, RoundingModes.RoundingModes.HALF_DOWN, "-6"],
  [-6.4, RoundingModes.RoundingModes.HALF_DOWN, "-6"],
  [-6.1, RoundingModes.RoundingModes.HALF_DOWN, "-6"],
  [-6.0, RoundingModes.RoundingModes.HALF_DOWN, "-6"],
  [-5.9, RoundingModes.RoundingModes.HALF_DOWN, "-6"],
  [-5.6, RoundingModes.RoundingModes.HALF_DOWN, "-6"],
  [-5.5, RoundingModes.RoundingModes.HALF_DOWN, "-5"],
  [-5.4, RoundingModes.RoundingModes.HALF_DOWN, "-5"],
  [-5.1, RoundingModes.RoundingModes.HALF_DOWN, "-5"],
  [-5.0, RoundingModes.RoundingModes.HALF_DOWN, "-5"],
  [5.0, RoundingModes.RoundingModes.FLOOR, "5"],
  [5.1, RoundingModes.RoundingModes.FLOOR, "5"],
  [5.4, RoundingModes.RoundingModes.FLOOR, "5"],
  [5.5, RoundingModes.RoundingModes.FLOOR, "5"],
  [5.6, RoundingModes.RoundingModes.FLOOR, "5"],
  [5.9, RoundingModes.RoundingModes.FLOOR, "5"],
  [6.0, RoundingModes.RoundingModes.FLOOR, "6"],
  [6.1, RoundingModes.RoundingModes.FLOOR, "6"],
  [6.4, RoundingModes.RoundingModes.FLOOR, "6"],
  [6.5, RoundingModes.RoundingModes.FLOOR, "6"],
  [6.6, RoundingModes.RoundingModes.FLOOR, "6"],
  [6.9, RoundingModes.RoundingModes.FLOOR, "6"],
  [7.0, RoundingModes.RoundingModes.FLOOR, "7"],
  [-7.0, RoundingModes.RoundingModes.FLOOR, "-7"],
  [-6.9, RoundingModes.RoundingModes.FLOOR, "-7"],
  [-6.6, RoundingModes.RoundingModes.FLOOR, "-7"],
  [-6.5, RoundingModes.RoundingModes.FLOOR, "-7"],
  [-6.4, RoundingModes.RoundingModes.FLOOR, "-7"],
  [-6.1, RoundingModes.RoundingModes.FLOOR, "-7"],
  [-6.0, RoundingModes.RoundingModes.FLOOR, "-6"],
  [-5.9, RoundingModes.RoundingModes.FLOOR, "-6"],
  [-5.6, RoundingModes.RoundingModes.FLOOR, "-6"],
  [-5.5, RoundingModes.RoundingModes.FLOOR, "-6"],
  [-5.4, RoundingModes.RoundingModes.FLOOR, "-6"],
  [-5.1, RoundingModes.RoundingModes.FLOOR, "-6"],
  [-5.0, RoundingModes.RoundingModes.FLOOR, "-5"],
  [5.0, RoundingModes.RoundingModes.CEILING, "5"],
  [5.1, RoundingModes.RoundingModes.CEILING, "6"],
  [5.4, RoundingModes.RoundingModes.CEILING, "6"],
  [5.5, RoundingModes.RoundingModes.CEILING, "6"],
  [5.6, RoundingModes.RoundingModes.CEILING, "6"],
  [5.9, RoundingModes.RoundingModes.CEILING, "6"],
  [6.0, RoundingModes.RoundingModes.CEILING, "6"],
  [6.1, RoundingModes.RoundingModes.CEILING, "7"],
  [6.4, RoundingModes.RoundingModes.CEILING, "7"],
  [6.5, RoundingModes.RoundingModes.CEILING, "7"],
  [6.6, RoundingModes.RoundingModes.CEILING, "7"],
  [6.9, RoundingModes.RoundingModes.CEILING, "7"],
  [7.0, RoundingModes.RoundingModes.CEILING, "7"],
  [-7.0, RoundingModes.RoundingModes.CEILING, "-7"],
  [-6.9, RoundingModes.RoundingModes.CEILING, "-6"],
  [-6.6, RoundingModes.RoundingModes.CEILING, "-6"],
  [-6.5, RoundingModes.RoundingModes.CEILING, "-6"],
  [-6.4, RoundingModes.RoundingModes.CEILING, "-6"],
  [-6.1, RoundingModes.RoundingModes.CEILING, "-6"],
  [-6.0, RoundingModes.RoundingModes.CEILING, "-6"],
  [-5.9, RoundingModes.RoundingModes.CEILING, "-5"],
  [-5.6, RoundingModes.RoundingModes.CEILING, "-5"],
  [-5.5, RoundingModes.RoundingModes.CEILING, "-5"],
  [-5.4, RoundingModes.RoundingModes.CEILING, "-5"],
  [-5.1, RoundingModes.RoundingModes.CEILING, "-5"],
  [-5.0, RoundingModes.RoundingModes.CEILING, "-5"],
  [5.0, RoundingModes.RoundingModes.DOWN, "5"],
  [5.1, RoundingModes.RoundingModes.DOWN, "5"],
  [5.4, RoundingModes.RoundingModes.DOWN, "5"],
  [5.5, RoundingModes.RoundingModes.DOWN, "5"],
  [5.6, RoundingModes.RoundingModes.DOWN, "5"],
  [5.9, RoundingModes.RoundingModes.DOWN, "5"],
  [6.0, RoundingModes.RoundingModes.DOWN, "6"],
  [6.1, RoundingModes.RoundingModes.DOWN, "6"],
  [6.4, RoundingModes.RoundingModes.DOWN, "6"],
  [6.5, RoundingModes.RoundingModes.DOWN, "6"],
  [6.6, RoundingModes.RoundingModes.DOWN, "6"],
  [6.9, RoundingModes.RoundingModes.DOWN, "6"],
  [7.0, RoundingModes.RoundingModes.DOWN, "7"],
  [-7.0, RoundingModes.RoundingModes.DOWN, "-7"],
  [-6.9, RoundingModes.RoundingModes.DOWN, "-6"],
  [-6.6, RoundingModes.RoundingModes.DOWN, "-6"],
  [-6.5, RoundingModes.RoundingModes.DOWN, "-6"],
  [-6.4, RoundingModes.RoundingModes.DOWN, "-6"],
  [-6.1, RoundingModes.RoundingModes.DOWN, "-6"],
  [-6.0, RoundingModes.RoundingModes.DOWN, "-6"],
  [-5.9, RoundingModes.RoundingModes.DOWN, "-5"],
  [-5.6, RoundingModes.RoundingModes.DOWN, "-5"],
  [-5.5, RoundingModes.RoundingModes.DOWN, "-5"],
  [-5.4, RoundingModes.RoundingModes.DOWN, "-5"],
  [-5.1, RoundingModes.RoundingModes.DOWN, "-5"],
  [-5.0, RoundingModes.RoundingModes.DOWN, "-5"],
  [5.0, RoundingModes.RoundingModes.UP, "5"],
  [5.1, RoundingModes.RoundingModes.UP, "6"],
  [5.4, RoundingModes.RoundingModes.UP, "6"],
  [5.5, RoundingModes.RoundingModes.UP, "6"],
  [5.6, RoundingModes.RoundingModes.UP, "6"],
  [5.9, RoundingModes.RoundingModes.UP, "6"],
  [6.0, RoundingModes.RoundingModes.UP, "6"],
  [6.1, RoundingModes.RoundingModes.UP, "7"],
  [6.4, RoundingModes.RoundingModes.UP, "7"],
  [6.5, RoundingModes.RoundingModes.UP, "7"],
  [6.6, RoundingModes.RoundingModes.UP, "7"],
  [6.9, RoundingModes.RoundingModes.UP, "7"],
  [7.0, RoundingModes.RoundingModes.UP, "7"],
  [-7.0, RoundingModes.RoundingModes.UP, "-7"],
  [-6.9, RoundingModes.RoundingModes.UP, "-7"],
  [-6.6, RoundingModes.RoundingModes.UP, "-7"],
  [-6.5, RoundingModes.RoundingModes.UP, "-7"],
  [-6.4, RoundingModes.RoundingModes.UP, "-7"],
  [-6.1, RoundingModes.RoundingModes.UP, "-7"],
  [-6.0, RoundingModes.RoundingModes.UP, "-6"],
  [-5.9, RoundingModes.RoundingModes.UP, "-6"],
  [-5.6, RoundingModes.RoundingModes.UP, "-6"],
  [-5.5, RoundingModes.RoundingModes.UP, "-6"],
  [-5.4, RoundingModes.RoundingModes.UP, "-6"],
  [-5.1, RoundingModes.RoundingModes.UP, "-6"],
  [-5.0, RoundingModes.RoundingModes.UP, "-5"]
];
