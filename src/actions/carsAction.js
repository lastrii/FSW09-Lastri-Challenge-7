import axios from "axios";

export const GET_LIST_CARS = "GET_LIST_CARS";

export const getListCars = () => {
    console.log("2. Masuk actions")
    return (dispatch) => {

        // dipanggil saat loading
        dispatch({
            type: GET_LIST_CARS,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // dipanggil saat get data
        axios({
            method: 'GET',
            url: 'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json',
            timeout: 120000
        }).then((response) => {
            console.log("3. Berhasil ambil data ", response.data)
            // berhasil get data
            dispatch({
                type: GET_LIST_CARS,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        }).catch((error) => {
            console.log("3. Gagal ambil data ", error)
            // gagal get data
            dispatch({
                type: GET_LIST_CARS,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}