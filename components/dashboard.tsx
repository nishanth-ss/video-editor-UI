import React from 'react';
import "./styles/dashboard.scss";
import { Box, Button, InputAdornment, Stack, TextField } from '@mui/material';
import { IoIosSearch } from "react-icons/io";
import profile from "../src/assets/avt.png";
import { IoCutOutline } from 'react-icons/io5';
import { BiVideoRecording } from 'react-icons/bi';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import MainContainer from "../components/main-conatiner";
import Sidebar from "../components/sidebar";
import recentVideos from "../src/data/recent-videos.json";

const Dashboard: React.FC = () => {
    return (
        <Box display='flex'>
            <Sidebar />
            <MainContainer>
                <div className='dashboard-container'>
                    {/* search bar */}
                    <Stack className='search-bar' direction='row'>
                        <TextField id="outlined-basic" variant="outlined" size="small" placeholder='search'
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><IoIosSearch /></InputAdornment>,
                            }}
                        />
                        <img src={profile} alt="profile" className='img' />
                    </Stack>
                    {/* buttons */}
                    <Stack className='btn-container'>
                        <Stack className='btn-wrapper'>
                            <Button variant='text' className='btn'><IoCutOutline className='btn-icon' /> Create Project</Button>
                            <Button variant='text' className='btn'><BiVideoRecording className='btn-icon' /> Record Video</Button>
                        </Stack>
                        <Button variant='text' className='btn-all-videos'>All Videos <MdOutlineKeyboardArrowRight /></Button>
                    </Stack>
                    {/* list recent videos */}
                    <Stack className='videos-container'>
                        <h1>Recent Videos</h1>
                        <Stack className='videos-wrapper'>
                            {
                                recentVideos?.map((el: jsonData) => (
                                    <Stack key={el.id} className='video-control'>
                                        <video src={el.img} controls />
                                        <h6>{el.project_name}</h6>
                                    </Stack>
                                ))
                            }
                        </Stack>
                    </Stack>
                </div>
            </MainContainer>
        </Box>

    )
}

interface jsonData { id: number; img: string; project_name: string; }

export default Dashboard