import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <div className="app-wrapper">

                <Header/>
                <Navbar/>
            <div className="content"></div>
            <div className="right"></div>

        </div>
    );
}

export default App;
