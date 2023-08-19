import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { actMovieItemDetail } from './duck/actions';
import './style.css';

export default function MovieItemDetail() {
    const param = useParams();
    const data = useSelector((state) => state.movieItemDetailReducer.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actMovieItemDetail(param.id));
    }, []);

    return (
        <section id='movie-detail' className='container my-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <img
                        src={data && data.hinhAnh}
                        alt={data && data.tenPhim}
                        className='img-fluid rounded'
                    />
                </div>

                <div className='col-md-6'>
                    <h2 className='mb-4'>{data && data.tenPhim}</h2>
                    <p className='mb-4'>{data && data.moTa}</p>
                    <p>
                        <strong>Ngày khởi chiếu:</strong> {data && data.ngayKhoiChieu}
                    </p>
                    {/* Embed YouTube trailer */}
                    <div className='mb-4'>
                        <strong>Trailer:</strong>
                        <div className='embed-responsive embed-responsive-16by9'>
                            <iframe
                                title='Trailer'
                                className='embed-responsive-item'
                                src={data && data.trailer}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <p>
                        <strong>Đánh giá:</strong> {data && data.danhGia}
                    </p>
                    <p>
                        <strong>Hot:</strong> {data && data.hot ? 'Có' : 'Không'}
                    </p>
                    <p>
                        <strong>Đang chiếu:</strong> {data && data.dangChieu ? 'Có' : 'Không'}
                    </p>
                    <p>
                        <strong>Sắp chiếu:</strong> {data && data.sapChieu ? 'Có' : 'Không'}
                    </p>
                </div>
            </div>
        </section>
    );
};
