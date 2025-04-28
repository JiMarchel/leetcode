//  https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/?envType=problem-list-v2&envId=stack
pub struct Solution;
impl Solution {
    pub fn max_depth(s: String) -> i32 {
        let mut par = Vec::new();
        let mut nested_par = 0;

        for char in s.chars() {
            if char == '(' {
                par.push(char);
                if nested_par <= par.len() {
                    nested_par+=1;
                }
            }else if char == ')' {
                par.pop();
            }
        }

        nested_par as i32
    }
}