pub struct Solution;
impl Solution {
    pub fn final_prices(prices: Vec<i32>) -> Vec<i32> {
        let mut discount_price = Vec::new();

        for (i, num) in prices.iter().enumerate() {
            let mut index = i +1;
            let mut discount = 0;
            while index < prices.len() {
                if prices[index] <= *num {
                    discount = prices[index];
                    break;
                }
                index+=1;
            }

            discount_price.push(num - discount);
        }

        discount_price
    }
}
//[8,4,6,2,3]