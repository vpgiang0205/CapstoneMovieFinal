import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { actMovieItemDetail } from 'redux/types/_actions';
import './style.css';
import moment from 'moment';
import { Tabs } from 'antd';

const { TabPane } = Tabs;


export default function MovieItemDetail() {
  const param = useParams();
  const data = useSelector((state) => state.movieItemDetailReducer.data);
  const dispatch = useDispatch();

  const [tabPosition, setTabPosition] = useState('top');


  useEffect(() => {
    // Fetch movie details when the component mounts
    dispatch(actMovieItemDetail(param.id));
    const handleWindowResize = () => {
      const isMobile = window.innerWidth <= 1024;
      setTabPosition(isMobile ? 'top' : 'left');
    };

    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };


  }, [dispatch, param.id]); // Ensure to add 'dispatch' and 'param.id' to the dependency array
  if (!data) {
    return null
  }
  const { movieDetails, movieShowTimes } = data


  const renderTheater = () => {
    return movieShowTimes?.heThongRapChieu.map((htr, index) => {
      return (
        <TabPane
          tab={<img className='rounded-full ' width="50" src={htr.logo} alt={htr.tenHeThongRap} />}
          key={index}
        >
          {htr.cumRapChieu?.map((cumRap, index) => {
            return <div key={index} className='mb-5'>
              <div className="d-flex text-white ">
                <img style={{ width: 60, height: 60 }} src={cumRap.hinhAnh} alt="..." />
                <div className="ml-2 ">
                  <p style={{ fontSize: 20, fontWeight: 'bold', lineHeight: 1 }} >{cumRap.tenCumRap}</p>
                  <p className="text-gray-400" style={{ marginTop: 0 }}>{cumRap.diaChi}</p>
                </div>
              </div>
              <div className="row ">
                {cumRap.lichChieuPhim?.map((lichChieu, index) => {

                  return <div className='col-md-3'>
                    <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className="w-100 m-1 btn btn-outline-primary font-weight-light p-0">
                      {moment(lichChieu.ngayChieuGioChieu).format('dd/mm/yyyy - hh:mm A')}
                    </NavLink>
                  </div>
                })}
              </div>
            </div>
          })}
        </TabPane >
      );
    });
  };


  return (
    <div id='movie-detail' className='container py-5 text-white'>
      {data && (
        <div className='row my-5'>
          <div className='col-md-6'>
            <img
              src={movieDetails.hinhAnh}
              alt={movieDetails.tenPhim}
              className='img-fluid rounded'
            />
          </div>

          <div className='col-md-6 p-3'>
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
              <strong>Sắp chiếu:</strong> <span className='text-danger'> {movieDetails.sapChieu ? 'Có' : 'Không'}</span>
            </p>

            <NavLink></NavLink>
          </div>
        </div>
      )}
      <div className='container'>
        {data && (
          <Tabs tabPosition={tabPosition}>
            {renderTheater()}
          </Tabs>
        )}
      </div>
    </div>
  );
};

