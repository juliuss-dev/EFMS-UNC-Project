import axios from "axios"
export const createReservation = async (data) =>{
    const response = await axios.post("/api/reservation", data)
    return response;
}