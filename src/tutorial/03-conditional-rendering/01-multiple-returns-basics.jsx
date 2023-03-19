import { useEffect, useState } from 'react';

// simple toggle rendering:

// const MultipleReturnsBasics = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const notLoading = <h2>Multiple Returns Basics</h2>;
//   const loading = <h2>Loading...</h2>;
//   return (
//     <div>
//       {isLoading ? loading : notLoading}
//       <button type='button' onClick={() => setIsLoading(!isLoading)}>
//         change
//       </button>
//     </div>
//   );
// };

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
