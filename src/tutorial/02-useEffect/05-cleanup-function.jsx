import { useState, useEffect } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div style={{ marginBottom: '5rem' }}>
        <h1>Cleanup Function</h1>
      </div>
      <button
        className='btn'
        onClick={() => setToggle(!toggle)}
        style={{ marginBottom: '1.5rem' }}
      >
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </>
  );
};

// const RandomComponent = () => {
//   useEffect(() => {
//     const intId = setInterval(() => {
//       console.log('hello from interval');
//     }, 2000);
//     return () => {
//       console.log('cleanup function');
//       clearInterval(intId);
//     };
//   }, []);

//   return <h1>Random Component</h1>;
// };

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      console.log('you are scrolling');
    };
    window.addEventListener('scroll', someFunc);
    return () => {
      window.removeEventListener('scroll', someFunc);
    };
  }, []);

  return <h1>Random Component</h1>;
};

export default CleanupFunction;
