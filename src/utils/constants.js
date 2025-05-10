// src/constants.js

export const API_BASE_URL = 'http://20.244.56.144/evaluation-service'; // Change this to your actual API base URL
export const STOCK_API_URL = `${API_BASE_URL}/stocks`; // API for fetching stock prices

// Predefined time intervals (in minutes)
export const TIME_INTERVALS = [
  { value: 15, label: 'Last 15 minutes' },
  { value: 30, label: 'Last 30 minutes' },
  { value: 60, label: 'Last 60 minutes' },
  { value: 120, label: 'Last 2 hours' },
  { value: 240, label: 'Last 4 hours' },
];

// Default Stock Symbols (can be replaced with dynamic fetching from API)
export const DEFAULT_STOCK_SYMBOLS = ['TATA', 'RELIANCE', 'INFY']; 

// For correlation heatmap or chart data
export const DEFAULT_CORRELATION_MATRIX = [
  ['TATA', 'RELIANCE', 'INFY'],
  [1, 0.8, 0.5],
  [0.8, 1, 0.7],
  [0.5, 0.7, 1],
];

