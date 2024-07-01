import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import languages from '../data/languages.const';
import { Language } from '../vite-env';

export default function SelectField({language, setLanguage} : {language: Language, setLanguage: React.Dispatch<React.SetStateAction<Language>>}) {

  const handleChange = (event: SelectChangeEvent) => {
    const lang = languages.filter(language => language.value === event.target.value as string)[0]
    setLanguage(lang as Language);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="set-language-label">Language</InputLabel>
        <Select
          labelId="set-language-label"
          id="set-language-id"
          value={language.value}
          label="Language"
          onChange={handleChange}
        >
            {languages.map((label: Language, index: number) => 
                <MenuItem key={index} value={label.value}>
                    {label.label}
                </MenuItem>
            )}
        </Select>
      </FormControl>
    </Box>
  );
}