import React, { useEffect } from 'react';
import style from './checkout.module.css'
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { layChiTietPhongVe } from '../../../redux/types/_actions';
import { useParams } from 'react-router-dom';
import Seats from './Seats';

function Checkout() {
    const params = useParams();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.QuanLyDatVeReducer.loading);
    const data = useSelector(state => state.QuanLyDatVeReducer.data);
    const gheData = useSelector((state) => state.seatReducer.gheDaDatArr);

    useEffect(() => {
        dispatch(layChiTietPhongVe(params.id));
    }, []);

    const renderPrice = () => {
        let total = 0;
        gheData.forEach((ghe, index) => {
            total += ghe.giaVe;
        });
        return total;
    };

    const renderThongTinPhim = () => {
        if (!data) {
            return null;
        } else {
            const { danhSachGhe } = data;
            const { thongTinPhim } = data;
            return (
                <div className='booking-ticket-container row my-5 text-white '>
                    <div className='seat-selection-container col-8'>
                        <div className=' justify-content-center'>
                            <div className='bg-white' style={{ width: '100%', height: 15 }}>
                            </div>
                            <div className={`${style['trapezoid']} text-center m-auto`}>Màn hình</div>
                        </div>
                        <div className='seats-container'>
                            <Seats danhSachGhe={danhSachGhe} />
                        </div>
                    </div>
                    <div className='booking-summary-container col-4'>
                        <h3 className='movie-title'>{thongTinPhim.tenPhim}</h3>
                        <hr />
                        <h3 className='booking-price text-success'>{renderPrice().toLocaleString()} VND</h3>
                        <hr />

                        <div className='booking-detail'>
                            <p><span className='label'>Cụm rạp:</span> {thongTinPhim.tenCumRap}</p>
                            <p><span className='label'>Ngày chiếu:</span> {thongTinPhim.ngayChieu}</p>
                            <p><span className='label'>Rạp:</span> {thongTinPhim.tenRap}</p>
                            <p className='text-success'><span className='label text-danger'>Ghế:</span> {gheData.map((ghe, index) => ghe.tenGhe).join(', ')}</p>
                        </div>
                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-danger btn-book-ticket'>ĐẶT VÉ</button>
                        </div>
                    </div>
                </div>
            );
        }
    };

    if (loading) return <div>Loading...</div>;
    return (
        <div className="py-5 container">
            {renderThongTinPhim()}
        </div>
    );
}

export default Checkout;
