import React from 'react'
import SeatItem from './SeatItem';

export default function Seats(props) {
    const { danhSachGhe } = props;
    //console.log(danhSachGhe);
    const renderGhe = () => {
        return (
            danhSachGhe?.map((ghe, index) => {
                return (
                    <SeatItem ghe={ghe} />
                )
            })
        )
    };

    return (
        <div className='row'>
            {renderGhe()}
        </div>
    )
};
