// src/pages/StockPage.jsx

import React, { useState, useEffect } from 'react';
import StockChart from '../components/correleation';
import TimeIntervalSelector from '../components/TimeIntervalSelector';
import { Box, Typography, Grid, CircularProgress } from '@mui/material';

// Dummy API call to get stock symbols (to be replaced with real API logic)
const fetchStockSymbols = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['TATA', 'RELIANCE', 'INFY']);
    }, 1000);
  });
};

const StockPage = () => {
  const [symbols, setSymbols] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState('TATA');
  const [timeInterval, setTimeInterval] = useState(30);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSymbols = async () => {
      setLoading(true);
      const stocks = await fetchStockSymbols();
      setSymbols(stocks);
      setLoading(false);
    };

    loadSymbols();
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Stock Price Aggregation
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            {/* Time Interval Selector */}
            <TimeIntervalSelector value={timeInterval} onChange={setTimeInterval} />
          </Grid>

          <Grid item xs={12} md={8}>
            {/* Stock Symbol Selector */}
            <FormControl fullWidth>
              <InputLabel>Stock Symbol</InputLabel>
              <Select
                value={selectedSymbol}
                onChange={(e) => setSelectedSymbol(e.target.value)}
                label="Stock Symbol"
              >
                {symbols.map((symbol) => (
                  <MenuItem key={symbol} value={symbol}>
                    {symbol}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            {/* Stock Chart */}
            <StockChart stockSymbol={selectedSymbol} timeInterval={timeInterval} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default StockPage;
