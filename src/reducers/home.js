import update from 'react-addons-update';
import constants from './actionConstants';
const {
  GET_SHOW_CHANGE,
  GET_TODO,
} = constants;

export function fetchLists() {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(
        response => {
          console.log(response);
          return response.json();
        },
        err => console.log('Theres error in response')
      )
      .then(
        json => {
          dispatch({
            type: GET_TODO,
            payload: json
          });
          console.log(json);
        },
        err => console.log('Theres error in json')
      );
  };
}

export function showChange(name) {
  return dispatch => {
    const newName = { name: `new name is ${name} and newName` };
    dispatch({
      type: GET_SHOW_CHANGE,
      payload: newName
    });
  };
}

function handleShowChange(state, action) {
  return update(state, {
    showChangeUpdate: {
      $set: action.payload
    }
  });
}

function handleTodo(state, action) {
  return update(state, {
    showTodo: {
      $set: action.payload
    }
  });
}

const ACTION_HANDLERS = {
  GET_SHOW_CHANGE: handleShowChange,
  GET_TODO: handleTodo
};

const initialState = {};

export default function HomeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}