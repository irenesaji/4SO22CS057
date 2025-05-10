// src/components/StockChart.jsx

import React, { useEffect, useState } from 'react';
import { getStockPrices } from '../services/api';
import {
  Box,
  Typography,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const StockChart = ({ stockSymbol }) => {
  const [prices, setPrices] = useState([]);
  const [average, setAverage] = useState(0);
  const [minutes, setMinutes] = useState(30);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true);
      const data = await getStockPrices(stockSymbol, minutes);
      if (data && data.length) {
        setPrices(data);
        const avg =
          data.reduce((acc, point) => acc + point.price, 0) / data.length;
        setAverage(avg.toFixed(2));
      }
      setLoading(false);
    };

    fetchPrices();
  }, [stockSymbol, minutes]);

  const handleChange = (e) => setMinutes(e.target.value);

  const chartWidth = 600;
  const chartHeight = 300;
  const maxPrice = Math.max(...prices.map(p => p.price), 0);
  const minPrice = Math.min(...prices.map(p => p.price), 0);
  const yScale = (price) =>
    chartHeight - ((price - minPrice) / (maxPrice - minPrice)) * chartHeight;

  return (
    <Box sx={{ m: 2, p: 3, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        {stockSymbol} Stock Chart (Last {minutes} minutes)
      </Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Time Interval</InputLabel>
        <Select value={minutes} label="Time Interval" onChange={handleChange}>
          <MenuItem value={15}>15 minutes</MenuItem>
          <MenuItem value={30}>30 minutes</MenuItem>
          <MenuItem value={60}>1 hour</MenuItem>
        </Select>
      </FormControl>

      {loading ? (
        <CircularProgress />
      ) : (
        <Box sx={{ overflowX: 'auto' }}>
          <svg width={chartWidth} height={chartHeight}>
            {/* Line Path */}
            <polyline
              fill="none"
              stroke="#1976d2"
              strokeWidth="2"
              points={prices
                .map((p, i) => {
                  const x = (i / (prices.length - 1)) * chartWidth;
                  const y = yScale(p.price);
                  return `${x},${y}`;
                })
                .join(' ')}
            />

            {/* Average Line */}
            <line
              x1="0"
              x2={chartWidth}
              y1={yScale(average)}
              y2={yScale(average)}
              stroke="red"
              strokeDasharray="5,5"
            />

            {/* Labels */}
            <text x="5" y="15" fill="red">
              Avg: ₹{average}
            </text>
          </svg>
        </Box>
      )}
    </Box>
  );
};

export default StockChart;
