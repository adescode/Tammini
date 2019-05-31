import React, {Component} from 'react';
import createStore from './src/store/createStore';
import Setup from './src/Setup';

export default class App extends Component {
  render() {
    const initialState = window.___INTITIAL_STATE__;
    const store = createStore(initialState);
    return <Setup store={store}/>    
  }
}