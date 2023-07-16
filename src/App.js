import './App.css';
import Navbar from "./component/Navbar/Navbar";
import {connect, Provider} from "react-redux";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./component/Home/Home";
import store from './store/store'
import Footer from "./component/Footer/Footer";
import LuxRoom from "./component/RoomType/LuxRoom/LuxRoom";

const App = () => {
    return <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/lux-room' element={<LuxRoom/>}/>
            <Route path='/' element={<Navigate to='/home'/>}/>
        </Routes>
        <Footer />
    </div>
}

const ContainerApp = connect(null)(App)

const HotelApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <ContainerApp/>
        </Provider>
    </BrowserRouter>
}
export default HotelApp;
