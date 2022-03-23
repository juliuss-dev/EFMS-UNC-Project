import { GET_RESERVATION, GET_RESERVATIONS, CREATE_RESERVATION } from "../constants/reservationConstant";

const INITIAL_STATE = {
    reservation: []
    // reservation: {}
}
                            //current state         //action to change the state
const reservationReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case GET_RESERVATION:
            return{
                // ...state,
                // reservation: action.payload
                reservation: [...action.payload]
            }
        case GET_RESERVATIONS:
            return{
                // ...state,
                // reservation: action.payload
                reservation: [...action.payload]
            }
        case CREATE_RESERVATION:
            return{
                reservation: [...state.reservation, action.payload]
            }
        default:
            return state
    }
}
export default reservationReducer