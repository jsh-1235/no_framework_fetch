"use strict";
export default function sum(...args) {
  return args.reduce((accumulator, currentValue) => accumulator + currentValue);
}
