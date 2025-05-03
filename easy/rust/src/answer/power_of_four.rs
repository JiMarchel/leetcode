pub struct Solution;
impl Solution {
    pub fn is_power_of_four(n: i32) -> bool {
        if n == 1 {
            true
        }else if n <= 0 || n % 4 != 0 {
            false
        } else {
            Self::is_power_of_four(n / 2)
        }
            }
}
