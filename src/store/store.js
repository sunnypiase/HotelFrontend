import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import thunkMiddle from 'redux-thunk';
import luxRoomReducer from "./luxRoom-reducer";
import roomReducer from "./room-reducer";
import doubleRoomReducer from "./doubleRoom-reducer";
import hostelRoomReducer from "./hostel-reducer";
import standartRoomReducer from "./standartRoom-reducer";
import bookingReducer from "./booking-reducer";

let reducers = combineReducers({
    luxRoom: luxRoomReducer,
    doubleRoom: doubleRoomReducer,
    hostelRoom: hostelRoomReducer,
    standartRoom: standartRoomReducer,
    room: roomReducer,
    booking: bookingReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddle)));

export default store;