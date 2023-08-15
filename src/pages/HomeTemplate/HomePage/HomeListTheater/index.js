import React, { Fragment, useEffect } from 'react';
import { Tabs } from 'antd';
import TheaterAddress from './TheaterAdress';
import TheaterMovie from './TheaterMovie';

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
          <Tabs tabPosition={state.tabPosition}>
            {/* Tab for theater address */}
            <TabPane tab={
              <TheaterAddress id={theaterGroup.maHeThongRap} />
            } key={index} >
              <Fragment>
                <TheaterMovie id={theaterGroup.maHeThongRap} />
              </Fragment>
            </TabPane>
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <Tabs tabPosition={state.tabPosition}>
      {renderTheater()}
    </Tabs>
  );
}
