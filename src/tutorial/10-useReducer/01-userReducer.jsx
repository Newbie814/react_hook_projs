import { useReducer } from 'react';
import { data } from '../../data';

const defaultState = {
  people: data,
};

const reducer = (state, action) => {
  if (action.type === 'CLEAR_LIST') {
    return { ...state, people: [] };
  }
  if (action.type === 'RESET') {
    return { ...state, people: data };
  }
  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      people: state.people.filter((person) => person.id !== action.payload),
    };
  }
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const handleClearList = () => {
    dispatch({ type: 'CLEAR_LIST' });
    // setPeople([]);
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
    // setPeople(data);
  };
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button
              onClick={() => {
                removeItem(id);
              }}
              className='btn'
            >
              remove
            </button>
          </div>
        );
      })}
      {state.people.length !== 0 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={handleClearList}
        >
          clear items
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={handleReset}
        >
          reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
