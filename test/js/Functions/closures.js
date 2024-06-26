/**
# Closures

A closure is the combination of a function bundled together (enclosed)
with references to its surrounding state (the lexical environment). In
other words, a closure gives you access to an outer function's scope from
an inner function. In JavaScript, closures are created every time a
function is created, at function creation time.


- A function has access to the variable environment (VE) of the execution
 context in which it was created.
- VE attached to the function, exactly as it was at the time and place the
 function was created

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 */

let inner;

const outerFunction = () => {
  const PI = Math.PI;

  inner = n => PI * (n || 1);
};

outerFunction();

console.dir(inner);