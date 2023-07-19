import './App.css';
import Navbar from "./component/Navbar/Navbar";
import {connect, Provider} from "react-redux";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./component/Home/Home";
import store from './store/store'
import Footer from "./component/Footer/Footer";
import LuxRoom from "./component/RoomType/LuxRoom/LuxRoom";
import DoubleRoom from "./component/RoomType/DoubleRoom/DoubleRoom";
import StandartRoom from "./component/RoomType/StandartRoom/StandartRoom";
import HostelRoom from "./component/RoomType/HostelRoom/HostelRoom";
import ScrollToTop from "./ScrollToTop";

const App = () => {
    return <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/lux-room' element={<LuxRoom/>}/>
            <Route path='/double-room' element={<DoubleRoom/>}/>
            <Route path='/standart-room' element={<StandartRoom/>}/>
            <Route path='/hostel-room' element={<HostelRoom/>}/>
            <Route path='/' element={<Navigate to='/home'/>}/>
        </Routes>
        <Footer />
    </div>
}

const ContainerApp = connect(null)(App)

const HotelApp = () => {
    return <BrowserRouter>
        <ScrollToTop/>
        <Provider store={store}>
            <ContainerApp/>
        </Provider>
    </BrowserRouter>
}
export default HotelApp;
