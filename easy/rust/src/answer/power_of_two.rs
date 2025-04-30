// https://leetcode.com/problems/power-of-two/?envType=problem-list-v2&envId=recursion
pub struct Solution;
impl Solution {
    pub fn is_power_of_two(n: i32) -> bool {
        if n == 1 {
            true
        } else if n <= 0 || n % 2 != 0 {
            false
        } else {
            Self::is_power_of_two(n / 2)
        }
    }
}
