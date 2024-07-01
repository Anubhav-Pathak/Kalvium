import { useEffect, useState } from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

import {Box, Paper, Typography, Button, Grid} from "@mui/material";
import SelectField from './components/Select';

function App() {

  const [code, setCode] = useState('');

  const [language, setLanguage] = useState({
    label: "C",
    value: "c",
    script: 
    'int main() {\n' +
    '   printf("Hello, World!");\n' +
    '   return 0;\n' +
    '}',
  },);

  const [output, setOutput] = useState('');

  const handleClear = async() => {
    setCode('');
  }
  const handleExecute = async () => {
    const result = await fetch("http://localhost:3000/api/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({language: language.value, script: code})
    })
    const data = await result.json();
    console.log(data);
    setOutput(data.output);
  }

  useEffect(()=>{
    setCode(language.script);
  }, [language]);

  return (
    <Paper elevation={3} style={{ padding: '16px' }}>
    <Grid container spacing={2}>
      <Grid item xs={8}>
          <Box display={'flex'} justifyContent={"space-between"} alignItems={"flex-start"} marginBottom={"1rem"}>
            <Typography variant="h4" sx={{marginBottom: "1rem"}}>Codenerd Compiler</Typography>
            <Box display={'flex'} gap={"1rem"}>
              <SelectField language={language} setLanguage={setLanguage} />
              <Button variant="contained" color="primary" onClick={handleExecute}>Run</Button>
              <Button variant='outlined' color='secondary' onClick={handleClear}>Clear</Button>
            </Box>
          </Box>
          <AceEditor
            mode={language.value}
            theme="monokai"
            name="blah2"
            value={code}
            onChange={(e)=>setCode(e)}
            width='100%'
            fontSize={14}
            lineHeight={19}
            highlightActiveLine={true}
            showPrintMargin={true}
            showGutter={true}
            editorProps={{$blockScrolling: true}}
            setOptions={{
              showLineNumbers: true,
              tabSize: 2,
            }}
            defaultValue={language.script}
          />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" style={{ marginTop: '16px' }}>Output:</Typography>
        <Paper variant="outlined" style={{ padding: '16px', marginTop: '8px', backgroundColor: '#f5f5f5' }}>
          <pre>{output}</pre>
        </Paper>
      </Grid>
    </Grid>
    </Paper>
  )
}

export default App
