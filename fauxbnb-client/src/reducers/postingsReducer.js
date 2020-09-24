export const postingsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_POSTINGS':
            return action.postings
        default:
            return state
    }
}