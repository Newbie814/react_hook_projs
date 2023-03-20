// In JavaScript, short-circuit evaluation is a technique used to evaluate an expression using logical operators (&& and ||) to perform conditional evaluations in a concise way.

// The && operator (logical AND ) returns the first operand if it is falsy, or the second if the first operand is truthy.

```js
const x = 0;
const y = 1;
const z = 1;
const a = 2;

console.log(x && y); // 0
console.log(y && x); // 0
console.log(y && z); // 1
console.log(z && a); // 2 - because the first operand is truthy, the second operand is returned
console.log(a && z); // 1 - because the first operand is truthy, the second operand is returned

// The || operator (logical OR ) returns the first operand if it is truthy, or the second if the first operand is falsy.
console.log(x || y); // 1 - because the first operand is falsy, the second operand is returned
console.log(y || x); // 1 - because the first operand is truthy, the first operand is returned
console.log(y || z);
console.log(z || a); // 1 - because the first operand is truthy, the first operand is returned
console.log(a || z); // 2 - because the first operand is truthy, the first operand is returned
```

Short-circuit eval can be useful in cases where you want to perform a certain action only if a certain condition is met, or you want to return a default value if a certain condition is not met

example:

```js
function displayName(name) {
  return name || 'Anonymous';
}

console.log(displayName('Pizza')); // Output: "Pizza"
console.log(displayName()); // Output: 'Anonymous'
```
