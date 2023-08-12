import React, { useEffect, useState } from 'react'
import TheaterLogo from './TheaterLogo'
import { useDispatch, useSelector } from 'react-redux'
import { actTheater } from './duck/actions';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


export default function ListTheaterPage() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.theaterReducer.data)

    const [activeTab, setActiveTab] = useState(0);

    const loading = useSelector((state) => state.theaterReducer.loading)


    useEffect(() => {
        dispatch(actTheater())
    }, [])

    if (loading) {
        return <div>loading...</div>
    }

    const renderTheater = () => {
        if (data) {
            return data.map((item) => {
                console.log(item);
                
                return <Box display="flex">
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={activeTab}
                    onChange={handleTabChange}
                >
                    <Tab><img src = {item.logo} /></Tab>
                 
                </Tabs>
                <Box p={3}>
                    {activeTab === 0 && <div>Content for Tab 1</div>}
                    {activeTab === 1 && <div>Content for Tab 2</div>}
                    {activeTab === 2 && <div>Content for Tab 3</div>}
                </Box>
                <Box p={3}>
                    {activeTab === 0 && <div>Content for Tab 1</div>}
                    {activeTab === 1 && <div>Content for Tab 2</div>}
                    {activeTab === 2 && <div>Content for Tab 3</div>}
                </Box>
            </Box>
            })
        }
    }

    const handleTabChange = (event, newTab) => {
        setActiveTab(newTab);
    };

    return (
      <>{renderTheater()}</>
    )
}
