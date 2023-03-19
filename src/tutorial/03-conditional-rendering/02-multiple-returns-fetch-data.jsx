import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        console.log(user);
        setUser(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error...</h2>;
  }
  // const { login, avatar_url, html_url, bio } = user;
  return (
    <>
      <img src={user.avatar_url} alt={user.login} />
      <h2>{user.login}</h2>
      <h3>Works at: {user.company}</h3>
      <a href={user.html_url}>profile</a>
      <p>{user.bio}</p>
    </>
  );
};
export default MultipleReturnsFetchData;
