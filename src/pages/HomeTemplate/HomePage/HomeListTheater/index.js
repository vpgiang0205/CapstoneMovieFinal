import React, { Fragment } from 'react';
import { Tabs, Radio, Space } from 'antd';
const { TabPane } = Tabs;

export default function HomeListTheater(props) {
  const { data } = props;

  const state = {
    tabPosition: 'left',
  };

  const renderTheater = () => {
    return data?.map((heThongRap, index) => {
      return (
        <TabPane
          tab={<img className='rounded-full' width="50" src={heThongRap.logo} />}
          key={index}
        >
          <Tabs tabPosition={state.tabPosition}>
            <TabPane tab={heThongRap.tenHeThongRap} key={index}>
              {/* Add the content you want to display here */}
              Content for {heThongRap.tenHeThongRap}
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
