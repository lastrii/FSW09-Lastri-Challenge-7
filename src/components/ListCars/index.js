import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListCars } from "../../actions/carsAction";

function ListCars() {
    const { listCarsResult,listCarsLoading,listCarsError } = useSelector((state) => state.carReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        // get action list cars
        console.log("1. use effect component did mount")
        dispatch(getListCars());
    }, [dispatch])


    return (
        <div>
            <h4>List Cars</h4>
            {listCarsResult ? (
                listCarsResult.map((car) => {
                    return (
                        <div>
                            <img src={car.image} alt={car.plate}  style={{width: "200px"}} />
                            <p key={car.id}>{car.manufacture} - {car.type}</p>
                        </div>
                    )
                })
            ) : listCarsLoading ? (
                <p>Loading . . . </p>
            ) : (
                <p>{listCarsError ? listCarsError : "Data Kosong"}</p>
            )
        }
        </div>
    );
}

export default ListCars;
