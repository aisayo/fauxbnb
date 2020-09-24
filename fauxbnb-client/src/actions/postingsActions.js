export const fetchPostings = () => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/postings')
        .then(resp => resp.json())
        .then(postings => dispatch({ type: 'FETCH_POSTINGS', postings}))
    }
}