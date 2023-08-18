import React, { Fragment, useEffect } from 'react';
import { Tabs } from 'antd';
import "./style.css"
import { NavLink } from 'react-router-dom';
import moment from 'moment/moment';

const { TabPane } = Tabs;

export default function HomeListTheater(props) {
  const { data } = props;

  const state = {
    tabPosition: 'left',
  };

  const renderTheater = () => {
    return data?.map((theaterGroup, index) => {
      return (
        <TabPane
          tab={<img className='rounded-full' width="50" src={theaterGroup.logo} alt={theaterGroup.tenHeThongRap} />}
          key={index}
        >
          <Tabs tabPosition={state.tabPosition} className='overflow-y'>
            {theaterGroup.lstCumRap?.map((cumRap, index) => {

              return <TabPane tab=
                <div>
                  {<img src="https://media.cnn.com/api/v1/images/stellar/prod/210406161315-01-movie-theater-covid-0315.jpg?q=w_2129,h_1198,x_0,y_0,c_fill" className='rounded-full' width="50" />}
                  {cumRap.tenCumRap}

                </div>

                key={index} className=' overflow-y'>
                {cumRap.danhSachPhim?.map((phim, index) => {
                  return <Fragment key={index}>
                    <div className='d-flex my-3'>
                      <img style={{ height: 75, width: 75 }} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/75/75" }} />

                      <div className="ml-2">
                        <h1 className="text-2xl text-green-700" >{phim.tenPhim}</h1>
                        <p>{cumRap.diaChi}</p>
                        <div className="grid grid-cols-6 gap-6">
                          {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                            return <NavLink className="text-2xl text-green-400" to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                              {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                            </NavLink>
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
    <div>
      <Tabs tabPosition={state.tabPosition}>
        {renderTheater()}
      </Tabs>
    </div>
  );
}
