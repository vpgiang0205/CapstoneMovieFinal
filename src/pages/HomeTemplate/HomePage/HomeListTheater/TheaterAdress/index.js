import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actTheaterAdress } from '../../duck/actions';

export default function TheaterAddress(props) {
    const { id } = props;
    const dispatch = useDispatch()
    const address = useSelector((state) => state.theaterAddressReducer.data)

    useEffect(() => {
        dispatch(actTheaterAdress(id))
    }, [])

    const renderTheaterAddress = () => {
        return address?.map((theater, index) => {
            return <div key={index}>{theater.tenCumRap}</div>
        })
    }

    return (
        <div>
            {renderTheaterAddress()}
        </div>
    )
}
