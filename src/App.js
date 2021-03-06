import React, {Component} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Rightbar from "./components/Rightbar/Rightbar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import leftBg from './assets/images/leftbg.png';
import rightBg from './assets/images/rightbg.png';
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {

  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("Some error");
    console.error(promiseRejectionEvent);
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className="app-wrapper">
        <div className='bg-image'><img src={leftBg}/></div>
        <div className='bg-image2'><img src={rightBg}/></div>
        <HeaderContainer/>
        <div className='leftSide'><Navbar/></div>
        {/*<div  className='rightSide'><Rightbar/></div>*/}
        <div className="app-wrapper-content">
          <React.Suspense fallback={<div>!!!!!</div>}>
            <Switch>
              <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
              <Route path="/dialogs" render={() => <DialogsContainer/>}/>
              <Route path="/users" render={() => <UsersContainer/>}/>
              <Route path="/login" render={() => <Login/>}/>
              <Route path='/' exact><Redirect to='/profile'/></Route>
              <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
            </Switch>
          </React.Suspense>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </HashRouter>
}

export default SamuraiJSApp;
