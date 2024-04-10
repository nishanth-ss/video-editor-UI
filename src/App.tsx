import './App.css'
import { Box } from '@mui/material';
import Dashboard from "../components/dashboard";
import VideoEditor from "../components/video-editor";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {

  return (
    <Box>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/video-editor' element={<VideoEditor />}/>
        </Routes>
      </Router>
    </Box>
  )
}

export default App
