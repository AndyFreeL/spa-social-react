import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import ProfileInfo from "./components/Profile/Profile";

const App = () => {
    return (
        <div className="app-wrapper">

            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <ProfileInfo/>
            </div>


        </div>
    );
}

export default App;
