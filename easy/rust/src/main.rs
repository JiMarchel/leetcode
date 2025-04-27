use answer::final_price_with_a_special_discount_in_a_shop::Solution;

pub mod answer;
pub mod answers;

fn main() {
    let s = Solution::final_prices(vec![8, 4, 6, 2, 3]);
    println!("{s:?}");
}
