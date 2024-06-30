import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const languages = [
    { label: 'C', value: 'c' },
    { label: 'CPP', value: 'cpp' },
    { label: 'PYTHON', value: 'python' },
    { label: 'JAVA', value: 'java' },
    { label: 'NODEJS', value: 'nodejs' },
    { label: 'RUBY', value: 'ruby' },
    { label: 'PROMPTV1', value: 'promptv1' },
    { label: 'PROMPTV2', value: 'promptv2' },
    { label: 'MULTIFILE', value: 'multifile' },
    { label: 'SQLITE3', value: 'sqlite3' }
]

export default function SelectField({language, setLanguage} : {language: string, setLanguage: React.Dispatch<React.SetStateAction<string>>}) {

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="set-language-label">Language</InputLabel>
        <Select
          labelId="set-language-label"
          id="set-language-id"
          value={language}
          label="Language"
          onChange={handleChange}
        >
            {languages.map((label, index) => 
                <MenuItem key={index} value={label.value}>
                    {label.label}
                </MenuItem>
            )}
        </Select>
      </FormControl>
    </Box>
  );
}