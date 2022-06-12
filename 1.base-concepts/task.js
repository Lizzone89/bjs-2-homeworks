"use strict";

function solveEquation(a, b, c) {
  let arr;
  
  arr = [];
  let disc = b**2 - 4 * a * c;

  if (disc < 0) {
    arr;
  } else if (disc === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(disc)) / (2 * a))
    arr.push((-b - Math.sqrt(disc)) / (2 * a))
    console.log(arr)
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  // not done yet

  return totalAmount;
}
