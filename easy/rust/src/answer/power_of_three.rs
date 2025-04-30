// https://leetcode.com/problems/power-of-three/?envType=problem-list-v2&envId=recursion
pub struct Solution;
impl Solution {
    pub fn is_power_of_three(n: i32) -> bool {
        n > 0 && n == 3_i32.pow(n.ilog(3))
    }
}
