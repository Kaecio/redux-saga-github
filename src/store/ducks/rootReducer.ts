// vai combinar todos os reducers em um unico reducer
import { combineReducers } from 'redux';
import  repositories from './repositories';

export default combineReducers({
  repositories,
})