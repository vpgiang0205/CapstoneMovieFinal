import React, { useEffect } from 'react';
import './style.css';
import style from './checkout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { layChiTietPhongVe } from '../../../redux/types/_actions';
import { useParams } from 'react-router-dom';


function Checkout() {
    const param = useParams();
    const { chiTietPhongVe } = useSelector(state => state.QuanLyDatVeReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(layChiTietPhongVe(param.id))
    }, []);
    const {thongTinPhim} = chiTietPhongVe;
    return (
        <>
        <br />
        <br />
        <br />
        <br />
            <div className='d-flex bookingTicket'>
                <div className='col-md-8'>
                    <div className='justify-content-center'>
                        <div className='bg-dark' style={{ width: '80%', height: 15 }}>
                        </div>
                        <div className={`${style['trapezoid']} text-center`}>Màn hình</div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <h3 className='text-center text-success text-2xl'>0đ</h3>
                    <hr />
                    <h3 className='text-xl text-center'>{thongTinPhim.tenPhim}</h3>
                    <hr />
                    <div className='d-flex justify-content-between my-3'>
                        <div>
                            <span style={{ fontWeight: 'bold' }}>Cụm rạp :</span>
                        </div>
                        <div className='text-success'>
                            <p> BHD Start - Vincom 3/2</p>
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between my-3'>
                        <div>
                            <span style={{ fontWeight: 'bold' }}>Ngày chiếu:</span>
                        </div>
                        <div className='text-success'>
                            <p>25/04/2021 - 12:05</p>
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between my-3'>
                        <div>
                            <span style={{ fontWeight: 'bold' }}>RẠP:</span>
                        </div>
                        <div className='text-success'>
                            <p>5</p>
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between my-3'>
                        <div>
                            <span className='text-danger' style={{ fontWeight: 'bold' }}>Ghế</span>
                        </div>
                        <div className='text-right'>
                            <span className='text-success'>Tên ghế</span>
                        </div>
                    </div>
                    <hr />
                    <div className='text-center d-flex flex-column align-items-end'>
                        <button className='btn btn-danger w-100'>ĐẶT VÉ</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Checkout;

