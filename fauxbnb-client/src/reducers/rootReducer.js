import { combineReducers } from 'redux'

import { postingsReducer as postings } from './postingsReducer'

export const rootReducer = combineReducers({
    postings
})