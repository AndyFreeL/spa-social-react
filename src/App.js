import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import ProfileInfo from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Rightbar from "./components/Rightbar/Rightbar";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Rightbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={()=><ProfileInfo state={props.state.profilePage} addPost={props.addPost} updatePostText={props.updatePostText}/>}/>
                    <Route path="/dialogs" render={()=><Dialogs state={props.state.dialogsPage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
