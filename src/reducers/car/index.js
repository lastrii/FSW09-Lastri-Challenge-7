import { GET_LIST_CARS } from "../../actions/carsAction";

const initialState = {
    listCarsResult : false,
    listCarsLoading : false,
    listCarsError : false,
}

const carReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_CARS:
            console.log("4. Masuk Reducer");
            return {
                ...state,
                listCarsResult: action.payload.data,
                listCarsLoading: action.payload.loading,
                listCarsError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default carReducer;