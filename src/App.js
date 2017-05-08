import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

import Router from './Router'
import reducers from './redux/reducers'

class App extends Component{

    render() {
        return(
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router/>
            </Provider>
        );
    }
}


export default App