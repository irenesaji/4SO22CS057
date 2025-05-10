import {
  pearsonCorrelation,
  standardDeviation,
  mean,
} from '../utils/stats';

const pricesA = [10, 12, 14, 16, 18];
const pricesB = [9, 11, 13, 15, 17];

const correlation = pearsonCorrelation(pricesA, pricesB); // ~1
console.log('Correlation:', correlation.toFixed(2));

const avgA = mean(pricesA);
const stdDevA = standardDeviation(pricesA);
console.log(`A - Avg: ${avgA}, Std Dev: ${stdDevA}`);
