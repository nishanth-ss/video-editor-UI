import React from 'react'
import { Box, Button, FormControl, MenuItem, Select, SelectChangeEvent, Slider, Stack } from '@mui/material';
import "./styles/video-editor.scss";
import { FaArrowPointer } from 'react-icons/fa6';
import { TbHandStop, TbPlayerTrackNext, TbPlayerTrackPrev } from 'react-icons/tb';
import { ImCrop } from 'react-icons/im';
import { PiExportBold } from 'react-icons/pi';
import { IoCutOutline, IoReloadOutline } from 'react-icons/io5';
import img from "../src/assets/img (1).jpg";
import { MdAddBox, MdFileCopy, MdOutlineContentCopy } from 'react-icons/md';
import { RiGridFill } from 'react-icons/ri';
import { VscListUnordered, VscRefresh } from 'react-icons/vsc';
import { CiPlay1, CiZoomIn, CiZoomOut } from 'react-icons/ci';
import { GoBook } from 'react-icons/go';
import recentVideos from "../src/data/recent-videos.json";

const VideoEditor: React.FC = () => {

    const [age, setAge] = React.useState('50');
    const [value1, setValue1] = React.useState<number>(10);
    const [value2, setValue2] = React.useState<number>(20);
    const [playControl, setPlayControl] = React.useState<number>(20);
    const [zoomControl, setZoomControl] = React.useState<number>(20);
    const [rotation, setRotation] = React.useState({
        z: 0,
        y: 0,
        x: 0
    })
    const [position, setPosition] = React.useState({
        z: 0,
        y: 0,
        x: 0
    })

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    function valuetext(value: number) {
        return `${value}°C`;
    }

    const handleChangeSlider = (event: Event, newValue: number | number[]) => {
        setValue1(newValue as number);
    }

    const handleChangeOpacity = (event: Event, newValue: number | number[]) => {
        setValue2(newValue as number);
    }

    const handleChangePlayControl = (event: Event, newValue: number | number[]) => {
        setPlayControl(newValue as number);
    }

    const handleChangeZoomControl = (event: Event, newValue: number | number[]) => {
        setZoomControl(newValue as number);
    }

    return (
        <Box>
            <Box className='video-editor-container'>
                {/* section 1 */}
                <Stack className='section-1'>
                    <h1 className='heading'>Assets</h1>
                    {/* img section */}
                    <Stack className='card-container'>
                        {
                            recentVideos?.map((el: jsonData) => (
                                <Stack className='card' key={el.id}>
                                    <video src={el.img} controls />
                                    <h1>{el.project_name}</h1>
                                </Stack>
                            ))
                        }
                    </Stack>
                    <Stack className='grid-section'>
                        <span><MdAddBox /></span>
                        <Stack className='gridlist'>
                            <RiGridFill className='icon' />
                            <VscListUnordered className='icon' />
                        </Stack>
                    </Stack>
                </Stack>
                {/* section 2 */}
                <Stack className='section-2'>
                    <Stack className='icon-wrapper'>
                        <span><FaArrowPointer /></span>
                        <span><TbHandStop /></span>
                        <span><ImCrop /></span>
                        <span>
                            <FormControl fullWidth>
                                <Select
                                    id="demo-simple-select"
                                    value={age}
                                    onChange={handleChange}
                                    size='small'
                                    sx={{
                                        width: '100px',
                                        "& .MuiOutlinedInput-input": {
                                            padding: '2px 10px'
                                        }
                                    }}
                                >
                                    <MenuItem value={25}>25%</MenuItem>
                                    <MenuItem value={50}>50%</MenuItem>
                                    <MenuItem value={75}>75%</MenuItem>
                                    <MenuItem value={100}>100%</MenuItem>
                                </Select>
                            </FormControl>
                        </span>
                    </Stack>
                    <span className='img-wrapper'>
                        <video src={recentVideos[0]?.img} controls />
                    </span>
                </Stack>
                {/* section 3 */}
                <Stack className='section-3'>
                    <Stack className='export-section'>
                        <span><PiExportBold /></span>
                        <Button variant='text' size='small'>Export</Button>
                    </Stack>
                    <Stack className='scaling-section'>
                        <h1>Properties</h1>
                        <Stack className='scaling-align'>
                            <span className='slider-name'>Scale</span>
                            <Slider
                                aria-label="Always visible"
                                getAriaValueText={valuetext}
                                value={value1}
                                onChange={handleChangeSlider}
                            />
                            <Button variant='text' size='small'>{value1}%</Button>
                        </Stack>
                        <Stack className='scaling-align'>
                            <span className='slider-name'>Opacity</span>
                            <Slider
                                aria-label="Always visible"
                                getAriaValueText={valuetext}
                                value={value2}
                                onChange={handleChangeOpacity}
                            />
                            <Button variant='text' size='small'>{value2}%</Button>
                        </Stack>
                        <Stack className='scaling-align'>
                            <span className='slider-name'>Rotation</span>
                            <span className='icon'><IoReloadOutline /> z</span>
                            <Button variant='text' size='small'>{rotation.z}.0</Button>
                        </Stack>
                        <Stack className='scaling-align'>
                            <span className='icon'><IoReloadOutline /> Y</span>
                            <Button variant='text' size='small'>{rotation.y}.0</Button>
                        </Stack>
                        <Stack className='scaling-align'>
                            <span className='icon'><IoReloadOutline /> X</span>
                            <Button variant='text' size='small'>{rotation.x}.0</Button>
                        </Stack>
                    </Stack>
                    {/* position */}
                    <Stack className='scaling-section'>
                        <Stack className='scaling-align'>
                            <span className='slider-name'>Position</span>
                            <span className='icon'>X</span>
                            <Button variant='text' size='small'>{position.x}.0</Button>
                        </Stack>
                        <Stack className='scaling-align'>
                            <span className='icon'>Y</span>
                            <Button variant='text' size='small'>{position.y}.0</Button>
                        </Stack>
                        <Stack className='scaling-align'>
                            <span className='icon'>Z</span>
                            <Button variant='text' size='small'>{position.z}.0</Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
            <Stack className='icon-wrapper-container'>
                <Stack className='video-editor-icon-wrapper'>
                    <span className='rounded-icon'><TbPlayerTrackPrev /></span>
                    <span className='rounded-icon'><CiPlay1 /></span>
                    <span className='rounded-icon'><TbPlayerTrackNext /></span>
                    <span style={{ width: '300px' }}>
                        <Slider
                            aria-label="Always visible"
                            getAriaValueText={valuetext}
                            value={playControl}
                            onChange={handleChangePlayControl}
                            sx={{
                                height: "20px"
                            }}
                        />
                    </span>
                    <span>00.00/00.00</span>
                </Stack>
            </Stack>
            <Stack className='icon-list-container'>
                <Stack className='icon-list'>
                    <span><VscRefresh /></span>
                    <span><IoReloadOutline /></span>
                    <span><IoCutOutline /></span>
                    <span><MdOutlineContentCopy /></span>
                    <span><MdFileCopy /></span>
                    <span><GoBook /></span>
                    <span><CiZoomOut /></span>
                    <span style={{ width: '300px' }}>
                        <Slider
                            aria-label="Always visible"
                            getAriaValueText={valuetext}
                            value={zoomControl}
                            onChange={handleChangeZoomControl}
                            sx={{
                                height: "20px"
                            }}
                        />
                    </span>
                    <span><CiZoomIn /></span>
                </Stack>
            </Stack>
        </Box>
    )
}

interface jsonData { id: number; img: string; project_name: string; }

export default VideoEditor