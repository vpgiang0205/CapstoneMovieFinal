import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { actSeat } from 'redux/types/_actions';

export default function SeatItem(props) {
    const dispatch = useDispatch();
    const [isDisabled, setIsDisabled] = useState(false);
    const { ghe } = props;
    const handleOnClick = () => {
        dispatch(actSeat(ghe));
        setIsDisabled(true);
    }
    const renderGhe = () => {
        if (ghe.daDat === false) {
            return (
                <button id={ghe.maGhe} className='btn btn-success m-2 gheChuaDat' 
                onClick={() => handleOnClick(ghe)}
                disabled={isDisabled}>{ghe.tenGhe}</button>
            )
        } else {
            return (
                <button className='btn btn-danger'>{ghe.tenGhe}</button>
            )
        }
    }
    return (
        <div className='contaiter text-center'>
            {renderGhe()}
        </div>
    );
};
