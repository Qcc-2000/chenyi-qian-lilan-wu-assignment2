import { expect, test } from "vitest";
import { NextStage } from "../utils/algo.js";
const testCases = [
  {
    input: [
      [false, true, false],
      [false, false, true],
      [true, true, true],
      [false, false, false],
    ],
    output: [
      [false, false, false],
      [true, false, true],
      [false, true, true],
      [false, true, false],
    ],
  },
  {
    input: [
      [true, true],
      [true, false],
    ],
    output: [
      [true, true],
      [true, true],
    ],
  },
  {
    input: [
      [false, true, false, false],
      [false, false, true, false],
      [true, true, true, false],
      [false, false, false, false],
    ],
    output: [
      [false, false, false, false],
      [true, false, true, false],
      [false, true, true, false],
      [false, true, false, false],
    ],
  },
  {
    input: [
      [false, false, false, false, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, true, true, true, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, false, false, false, false],
    ],
    output: [
      [false, false, false, false, false, false, false],
      [false, false, true, true, true, false, false],
      [false, false, true, false, true, false, false],
      [false, false, true, true, true, false, false],
      [false, false, false, false, false, false, false],
    ],
  },
];

testCases.forEach((testCase, index) => {
  test(`test case ${index}`, () => {
    const { input, output } = testCase;
    expect(NextStage(input)).toEqual(output);
  });
});
