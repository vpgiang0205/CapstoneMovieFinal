import React from 'react'
import { useDispatch } from 'react-redux';
import { actSeat } from 'redux/types/_actions';

export default function SeatItem(props) {
    const dispatch = useDispatch();

    console.log(props);
    const { ghe } = props;
    const handleOnClick = () => {
        dispatch(actSeat(ghe));

    }
    const renderGhe = () => {
        if (ghe.daDat === false) {
            return (
                <button className='btn btn-success' onClick={() => handleOnClick(ghe)}>123</button>
            )
        } else {
            return (
                <button className='btn btn-danger'>456</button>
            )
        }
    }
    return (
        <div>
            {renderGhe()}
        </div>
    );
};
