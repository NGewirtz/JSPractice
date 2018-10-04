function findMaxProfit(prices) {
  let minBuy = prices[0];
  let maxProfit = 0;
  prices.slice(1).forEach(price => {
    if(price < minBuy) {
      minBuy = price;
    }else if(price - minBuy > maxProfit) {
      maxProfit = price - minBuy;
    }
  });
  return maxProfit;
}
