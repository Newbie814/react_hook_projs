import { useState } from 'react';

const ToggleChallenge = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h2>toggle challenge</h2>
      <button className='btn' onClick={() => setShow(!show)}>
        {show ? 'hide' : 'show'}
      </button>
      {show && <ToggledComponent />}
    </>
  );
};

const ToggledComponent = () => {
  return (
    <div className='alert alert-danger'>
      <h1>Matthew Woodard</h1>
      <h2>Software Engineer</h2>
      <p>Partner of Sandra. Father of Liam and Connor.</p>
      <h6>made you look.</h6>
    </div>
  );
};

export default ToggleChallenge;
