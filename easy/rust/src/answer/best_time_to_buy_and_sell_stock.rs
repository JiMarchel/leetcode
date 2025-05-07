// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=problem-list-v2&envId=dynamic-programming
pub struct Solution;
impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {
        let mut buy = prices[0];
        let mut profit = 0;

        for i in 1..prices.len() {
            if prices[i] < buy {
                buy = prices[i];
            } else if prices[i] - buy > profit {
                profit = prices[i] - buy;
            }
        }

        profit
    }
}
