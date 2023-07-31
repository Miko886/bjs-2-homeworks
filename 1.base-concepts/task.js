"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  let answer1;
  let answer2;
  if (d === 0) {
    answer1 = -b / (2 * a);
    arr.push(answer1);
  } else if (d > 0) {
    answer1 = (-b + Math.sqrt(d)) / (2 * a);
    answer2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(answer1, answer2);
  };
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let ratePerMonthRatio = percent / 100 / 12;
  let creditBody = amount - contribution;
  let paymentPerMonth = creditBody * (ratePerMonthRatio + (ratePerMonthRatio / (((1 + ratePerMonthRatio)**countMonths)-1)));
  let fullCreditCost = paymentPerMonth * countMonths;
  return (+(fullCreditCost).toFixed(2));
}