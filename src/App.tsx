import { Box, Paper } from '@mui/material';
import './App.css';
import MemoEditor from './MemoEditor/MemoEditor';

function MemoListWrapper() {
  return <Box sx={{
    gridArea: 'memo-list'
  }}>
    MemoList
  </Box>
}

function MemoEditorWrapper() {
  return <Box sx={{
    gridArea: 'memo'
  }}>
    <MemoEditor/>
  </Box>
}

function HeaderWrapper() {
  return <Box sx={{
    gridArea: 'header'
  }}>
    header
  </Box>
}

function App() {
  return (
    <Box sx={{
      height: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'auto',
      gridTemplateAreas: `
        "header header header header"
        "memo-list memo-list memo memo"
      `
    }}>
      <HeaderWrapper/>
      <MemoListWrapper/>
      <MemoEditorWrapper/>
    </Box>
  );
}

export default App;
