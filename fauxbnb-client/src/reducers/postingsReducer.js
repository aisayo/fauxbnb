export const postingsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_POSTS':
            return action.postings
        case 'ADD_POST':
            return [...state, action.post]
        case 'DELETE_POST':
            const newState = state.filter(post => post.id !== action.post.id)
            return newState
        default:
            return state
    }
}