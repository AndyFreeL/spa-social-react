import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import ReactDOM from "react-dom";
import App from "./App";


let rerenderTree=(state)=>{
ReactDOM.render(
    <App store={store} state={state} dispatch={store.dispatch.bind(store)}/>, document.getElementById('root')
)}

rerenderTree(store.getState());
store.subscribe(()=>{
    let state = store.getState();
    rerenderTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
