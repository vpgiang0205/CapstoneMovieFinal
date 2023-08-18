import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { actMovieItemDetail } from '../_duck/_actions';
import './style.css';
import moment from 'moment';
import { Tabs } from 'antd';

const { TabPane } = Tabs;


export default function MovieItemDetail() {
  const param = useParams();
  const data = useSelector((state) => state.movieItemDetailReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch movie details when the component mounts
    dispatch(actMovieItemDetail(param.id));
  }, [dispatch, param.id]); // Ensure to add 'dispatch' and 'param.id' to the dependency array
  if (!data) {
    return null
  }
  const { movieDetails, movieShowTimes } = data

  const state = {
    tabPosition: 'left',
  };


  const renderTheater = () => {


    return movieShowTimes?.heThongRapChieu.map((htr, index) => {
      console.log(htr.cumRapChieu);

      return (
        <TabPane
          tab={<img className='rounded-full' width="50" src={htr.logo} alt={htr.tenHeThongRap} />}
          key={index}
        >
          {htr.cumRapChieu?.map((cumRap, index) => {
            return <div key={index}>
              <div className="d-flex">
                <img style={{ width: 60, height: 60 }} src={cumRap.hinhAnh} alt="..." />
                <div className="ml-2">
                  <p style={{ fontSize: 20, fontWeight: 'bold', lineHeight: 1 }} >{cumRap.tenCumRap}</p>
                  <p className="text-gray-400" style={{ marginTop: 0 }}>{cumRap.diaChi}</p>
                </div>
              </div>
              <div className="thong-tin-lich-chieu grid grid-cols-4">
                {cumRap.lichChieuPhim?.map((lichChieu, index) => {
                  return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className="col-span-1 text-green-800 font-bold">
                    {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                  </NavLink>
                })}
              </div>
            </div>
          })}

        </TabPane >
      );
    });
  };


  return (
    <section id='movie-detail' className='container py-5'>
      {data && (
        <div className='row mt-3'>
          <div className='col-md-6'>
            <img
              src={movieDetails.hinhAnh}
              alt={movieDetails.tenPhim}
              className='img-fluid rounded'
            />
          </div>

          <div className='col-md-6'>
            <h2 className='mb-4'>{movieDetails.tenPhim}</h2>
            <p className='mb-4'>{movieDetails.moTa}</p>
            <p>
              <strong>Ngày khởi chiếu:</strong> {movieDetails.ngayKhoiChieu}
            </p>
            <div className='mb-4'>
            </div>
            <p>
              <strong>Đánh giá:</strong> {movieDetails.danhGia}
            </p>
            <p>
              <strong>Hot:</strong> {movieDetails.hot ? 'Có' : 'Không'}
            </p>
            <p>
              <strong>Đang chiếu:</strong> {movieDetails.dangChieu ? 'Có' : 'Không'}
            </p>
            <p>
              <strong>Sắp chiếu:</strong> {movieDetails.sapChieu ? 'Có' : 'Không'}
            </p>
          </div>
        </div>
      )}
      <div className='row'>
        {data && (
          <Tabs tabPosition={state.tabPosition}>
            {renderTheater()}
          </Tabs>
        )}
      </div>
    </section>
  );
}
