import React from 'react';
import { people } from '../../data';

const defaultImg =
  'https://res.cloudinary.com/dylvkdabj/image/upload/v1661281858/website%20pics%20family/pexels-pok-rie-130879_ilf9fy.jpg';

const Person = ({ name, nickName, images }) => {
  const img = images?.[0]?.small?.url || defaultImg;

  return (
    <>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h3>{name}</h3>
      <p>Nickname: {nickName}</p>
    </>
  );
};

export default Person;
