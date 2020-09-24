import { combineReducer } from 'redux'

import { postingsReducer } from './postingsReducer'

export const rootReducer = combineReducer({
    postings: postingsReducer
})