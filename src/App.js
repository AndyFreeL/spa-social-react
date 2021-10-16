import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Rightbar from "./components/Rightbar/Rightbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Rightbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={()=><Profile />}/>
                    <Route path="/dialogs" render={()=><DialogsContainer />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
