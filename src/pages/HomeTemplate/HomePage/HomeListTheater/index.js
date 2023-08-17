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
      console.log(theaterGroup);
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

                key={index}  className=' overflow-y'>
                {cumRap.danhSachPhim?.map((phim, index) => {
                  return <Fragment key={index}>
                    <div className='d-flex my-3'>
                      <div>
                        <img src={phim.hinhAnh} width="90" />
                      </div>

                      <div className='px-3'>
                        {phim.tenPhim}
                        <p>{cumRap.diaChi}</p>

                        {phim.lstLichChieuTheoPhim?.map((lichchieu, index) => {
                          return <NavLink to="/" key={index}>
                            {moment(lichchieu.ngayChieuGioChieu).format('hh:mm A')} </NavLink>
                        })}
                      </div>
                    </div>
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
      <Tabs  tabPosition={state.tabPosition}>
        {renderTheater()}
      </Tabs>
    </div>
  );
}
