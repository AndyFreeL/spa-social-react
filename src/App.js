import React, {Component} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Switch, withRouter} from "react-router-dom";
import Rightbar from "./components/Rightbar/Rightbar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
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
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>
        <Rightbar/>
        <div className="app-wrapper-content">
          <React.Suspense fallback={<div>!!!!!</div>}>
            <Switch>
              <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
              <Route path="/dialogs" render={() => <DialogsContainer/>}/>
              <Route path="/users" render={() => <UsersContainer/>}/>
              <Route path="/login" render={() => <Login/>}/>
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
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>
}

export default SamuraiJSApp;
