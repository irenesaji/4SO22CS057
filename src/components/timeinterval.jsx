// src/components/TimeIntervalSelector.jsx

import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const TimeIntervalSelector = ({ value, onChange }) => {
  return (
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel id="interval-label">Time Interval</InputLabel>
      <Select
        labelId="interval-label"
        value={value}
        label="Time Interval"
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value={15}>Last 15 minutes</MenuItem>
        <MenuItem value={30}>Last 30 minutes</MenuItem>
        <MenuItem value={60}>Last 60 minutes</MenuItem>
        <MenuItem value={120}>Last 2 hours</MenuItem>
        <MenuItem value={240}>Last 4 hours</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TimeIntervalSelector;
