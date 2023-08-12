import React, { useEffect } from 'react'
import TheaterLogo from './TheaterLogo'
import { useDispatch, useSelector } from 'react-redux'
import { actTheater } from './duck/actions';

export default function ListTheaterPage() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.theaterReducer.data)

    const loading = useSelector((state) => state.theaterReducer.loading)


    useEffect(() => {
        dispatch(actTheater())
    }, [])

    if (loading) {
        return <div>loading...</div>
    }

    const renderTheater = () => {
        if (data) {
            return data.map((item) => {
                console.log(item);
                <div className='row bg-dark text-center'>
                    <div className='col-2 bg-danger'> <img src= {item.logo} /></div>
                    <div className='col-3 bg-warning'>ListTheaterAdress</div>
                    <div className='col-7 bg-info'>ListTheaterMovie</div>
                </div>
            })
        }
    }

    return (
        <div className='container'>
            {renderTheater()}
        </div>
    )
}
