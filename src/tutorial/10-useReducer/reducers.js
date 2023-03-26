import { data } from '../../data';

import { CLEAR_LIST, RESET, REMOVE_ITEM } from './actions';

const defaultState = {
  people: data,
};

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    return {
      ...state,
      people: state.people.filter((person) => person.id !== action.payload.id),
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export { defaultState, reducer };
