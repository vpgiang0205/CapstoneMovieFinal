import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actRemoveSeat } from 'redux/types/_actions';
import { actSeat } from 'redux/types/_actions';

export default function SeatItem(props) {
    const dispatch = useDispatch();
    const [isSelected, setIsSelected] = useState(false);
    const { ghe } = props;

    const handleOnClick = () => {
        if (!isSelected) {
            dispatch(actSeat(ghe));
        } else {
            dispatch(actRemoveSeat(ghe.maGhe)); // Dispatch remove action
        }
        setIsSelected(!isSelected); // Toggle isSelected state
    };

    const renderGhe = () => {
        if (ghe.daDat === false) {
            return (
                <button
                    id={ghe.maGhe}
                    className={`btn m-2 gheChuaDat ${isSelected ? 'btn-success' : 'btn-outline-success'}`}
                    onClick={handleOnClick}
                    disabled={ghe.daDat}
                >
                    {ghe.tenGhe}
                </button>
            );
        } else {
            return (
                <button className='btn m-2 btn-danger gheChuaDat' disabled>
                    {ghe.tenGhe}
                </button>
            );
        }
    };

    return <div>{renderGhe()}</div>;
}
