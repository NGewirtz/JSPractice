var maxProfit = function(prices) {
  let curr = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > curr) {
      profit += prices[i] - curr;
    }
    curr = prices[i];
  }
  return profit;
};
