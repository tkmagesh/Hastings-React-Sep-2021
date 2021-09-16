import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware'

const rootMiddleware = applyMiddleware(logger, thunk, promiseMiddleware);

export default rootMiddleware;