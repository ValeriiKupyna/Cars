import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header/index';
import Home from '../../pages/home';
import rootReducer from '../../store/reducers';
import rootSaga from '../../store/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);


export const App = () => (
    <Provider store={store} >
        <Router>
            <Fragment>
                <Header />

                <div className="container mt-2">
                    <div className="row">
                        <div className="col-12">
                            <Switch>
                                <Route path='/' exact component={Home} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Fragment>
        </Router>
    </Provider>
);
