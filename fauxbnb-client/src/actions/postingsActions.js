export const fetchPostings = () => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/postings')
        .then(resp => resp.json())
        .then(postings => dispatch({ type: 'FETCH_POSTINGS', postings}))
    }
}

export const addPost = post => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/postings', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(post => dispatch({ type: 'ADD_POST', post}))
    }
}