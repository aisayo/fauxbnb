import React from 'react'
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'

import App from './components/App'
import { rootReducer } from './reducers/rootReducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)