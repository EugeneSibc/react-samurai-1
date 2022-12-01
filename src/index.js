import React from 'react';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";



/*let rerenderEntireTree = (state) => {*/
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );

   /* rerenderEntireTree(store.getState());
    store.subscribe(()=>{
        let state = store.getState();
        rerenderEntireTree(state);}
        )*/

/*state={state}
                 dispatch={store.dispatch.bind(store)}
                 store={store}*/

/*    ()=>{
    let state = store.getState();
    rerenderEntireTree(state);
}*/

