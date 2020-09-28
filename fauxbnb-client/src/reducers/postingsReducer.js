export const postingsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_POSTINGS':
            return action.postings
        case 'ADD_POST':
            return [...state, action.post]
        default:
            return state
    }
}