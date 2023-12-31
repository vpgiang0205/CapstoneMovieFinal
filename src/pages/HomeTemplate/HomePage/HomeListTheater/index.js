import React, { Fragment, useEffect, useState } from 'react';
import { Tabs } from 'antd';
import "./style.css"
import { NavLink } from 'react-router-dom';
import moment from 'moment/moment';

const { TabPane } = Tabs;

export default function HomeListTheater(props) {
  const { data } = props;

  const [tabPosition, setTabPosition] = useState('top');

  useEffect(() => {
    const handleWindowResize = () => {
      const isMobile = window.innerWidth <= 1024;
      setTabPosition(isMobile ? 'top' : 'left');
    };

    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);




  const renderTheater = () => {
    return data?.map((theaterGroup, index) => {
      return (
        <TabPane
          tab={<img className='rounded-full' width="50" src={theaterGroup.logo} alt={theaterGroup.tenHeThongRap} />}
          key={index}
        >
          <Tabs tabPosition={tabPosition} className='text-white overflow-y'>
            {theaterGroup.lstCumRap?.map((cumRap, index) => {
              const shortDiaChi = cumRap.diaChi.length > 40 ? cumRap.diaChi.substring(0, 40) + "..." : cumRap.diaChi;

              return <TabPane tab=
                <div className='d-flex text-overflow'>
                  {<img src="https://media.cnn.com/api/v1/images/stellar/prod/210406161315-01-movie-theater-covid-0315.jpg?q=w_2129,h_1198,x_0,y_0,c_fill" className='rounded-full' width="50" alt='pictur' />}

                  <p className='text-left ml-2'> {cumRap.tenCumRap}
                    <br />{shortDiaChi}
                  </p>

                </div>

                key={index} className='overflow-y'>
                {cumRap.danhSachPhim?.map((phim, index) => {
                  return <Fragment key={index}>
                    <div className='row'>
                      <img width="100" className='col-2' height="100" src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/75/75" }} />

                      <div className="col-9">
                        <NavLink to={`/detail-page/${phim.maPhim}`}> <h4 className="text-danger" >{phim.tenPhim}</h4></NavLink>
                        <p>{cumRap.diaChi}</p>

                        <div className="d-flex flex-wrap">
                          {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                            return <div className='col-md-4' key={index}>
                              <NavLink className=" m-1 btn btn-outline-light font-weight-light p-1" to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                                {moment(lichChieu.ngayChieuGioChieu).format('dd/mm/yyy hh:mm A')}
                              </NavLink>
                            </div>
                          })}
                        </div>
                      </div>
                    </div>

                    <hr />
                  </Fragment>

                })}
              </TabPane>
            })
            }
          </Tabs >
        </TabPane >
      );
    });
  };

  return (
    <div className='my-5'>
      <div className='my-3 text-danger'>
        <h2>DANH SÁCH CÁC RẠP</h2>
      </div>
      <div className='container'>
        <Tabs tabPosition={tabPosition}>
          {renderTheater()}
        </Tabs>
      </div>
    </div>
  );
}
