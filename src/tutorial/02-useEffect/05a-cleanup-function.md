```js
const intID = setInterval(() => {
  console.log('hello from interval');
}, 1000);
clearInterval(intID);

const someFunc = () => {
  // some logic here
};
window.addEventListener('scroll', someFunc);
window.removeEventListener('scroll', someFunc);
```
