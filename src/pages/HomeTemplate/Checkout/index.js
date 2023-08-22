import React, { useEffect } from 'react';
import './style.css';
import style from './checkout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { layChiTietPhongVe } from '../../../redux/types/_actions';
import { useParams } from 'react-router-dom';
import Seats from './Seats';


function Checkout(props) {
    const params = useParams();

    //const { chiTietPhongVe } = useSelector(state => state.QuanLyDatVeReducer);
    const loading = useSelector(state => state.QuanLyDatVeReducer.loading)
    const data = useSelector(state => state.QuanLyDatVeReducer.data);
    const gheData = useSelector((state) => state.seatReducer.gheDaDatArr);
    console.log(gheData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layChiTietPhongVe(params.id))
    }, []);
    const renderPrice = () => {
        let total = 0;
        gheData.forEach((ghe,index) => {
            total += ghe.giaVe;
        })
        return total;
    }
    const renderThongTinPhim = () => {
        if (!data) {
            return null;
        } else {
            const { danhSachGhe } = data;
            const { thongTinPhim } = data;
            return (
                <div className='d-flex bookingTicket'>
                    <div className='col-md-8'>
                        <div className='justify-content-center'>
                            <div className='bg-dark' style={{ width: '80%', height: 15 }}>
                            </div>
                            <div className={`${style['trapezoid']} text-center`}>Màn hình</div>
                            <Seats danhSachGhe ={danhSachGhe}/>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <h3 className='text-center text-success text-2xl'>{renderPrice().toLocaleString()} VND</h3>
                        <hr />
                        <h3 className='text-xl text-center'>{thongTinPhim.tenPhim}</h3>
                        <hr />
                        <div className='d-flex justify-content-between my-3'>
                            <div>
                                <span style={{ fontWeight: 'bold' }}>Cụm rạp :</span>
                            </div>
                            <div className='text-success'>
                                <p>{thongTinPhim.tenCumRap}</p>
                            </div>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between my-3'>
                            <div>
                                <span style={{ fontWeight: 'bold' }}>Ngày chiếu:</span>
                            </div>
                            <div className='text-success'>
                                <p>{thongTinPhim.ngayChieu}</p>
                            </div>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between my-3'>
                            <div>
                                <span style={{ fontWeight: 'bold' }}>RẠP:</span>
                            </div>
                            <div className='text-success'>
                                <p>{thongTinPhim.tenRap}</p>
                            </div>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between my-3'>
                            <div>
                                <span className='text-danger' style={{ fontWeight: 'bold' }}>Ghế</span>
                            </div>
                            <div className='text-right'>
                                <span className='text-success row'>{gheData.map((ghe,index)=>{
                                    return (
                                        <p>{ghe.tenGhe},</p>
                                    )
                                })}</span>
                            </div>
                        </div>
                        <hr />
                        <div className='text-center d-flex flex-column align-items-end'>
                            <button className='btn btn-danger w-100'>ĐẶT VÉ</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    if (loading) return <div>Loading...</div>
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            {renderThongTinPhim()}
        </>
    )
};

export default Checkout;

