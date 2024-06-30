import { useState } from 'react';
import AceEditor from "react-ace";

import {Box, Paper, Typography, Button, Grid} from "@mui/material";
import SelectField from './components/Select';

function App() {

  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('python');
  const [output, setOutput] = useState('');

  const handleExecute = async () => {
    const result = await fetch("http://localhost:3000/api/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({language: language, script: code})
    })
    const data = await result.json();
    setOutput(data.output);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Box display={'flex'} justifyContent={"space-between"} alignItems={"flex-start"}>
            <Typography variant="h4" sx={{marginBottom: "1rem"}}>Codenerd Compiler</Typography>
            <Box display={'flex'} gap={"1rem"}>
              <SelectField language={language} setLanguage={setLanguage} />
              <Button variant="contained" color="primary" onClick={handleExecute}>Run</Button>
            </Box>
          </Box>
          <AceEditor
            placeholder=""
            mode="javascript"
            theme="monokai"
            name="blah2"
            value={code}
            onChange={(e)=>setCode(e)}
            width='100%'
            fontSize={14}
            lineHeight={19}
            highlightActiveLine={true}
            setOptions={{
            showLineNumbers: true,
            tabSize: 2,
          }}/>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Typography variant="h6" style={{ marginTop: '16px' }}>Output:</Typography>
          <Paper variant="outlined" style={{ padding: '16px', marginTop: '8px', backgroundColor: '#f5f5f5' }}>
            <pre>{output}</pre>
          </Paper>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default App
