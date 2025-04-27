// https://leetcode.com/problems/crawler-log-folder/description/?envType=problem-list-v2&envId=stack
pub struct Solution;
impl Solution {
    pub fn min_operations(logs: Vec<String>) -> i32 {
        let mut step_back = 0;
        for log in &logs {
            if log.chars().any(|c| c.is_ascii_lowercase() || c.is_ascii_digit()){
                step_back += 1;
            } else if log == "../" && step_back > 0 {
                step_back -= 1;
            }
        }

        step_back
    }
}