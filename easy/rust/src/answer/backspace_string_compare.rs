// https://leetcode.com/problems/backspace-string-compare/?envType=problem-list-v2&envId=stack
pub struct Solution;
impl Solution {
    pub fn backspace_compare(s: String, t: String) -> bool {
        let mut s_vec = Vec::new();
        let mut t_vec = Vec::new();
        
        for ch in s.chars() {
            if ch == '#' {
                s_vec.pop();
                continue;
            }
            s_vec.push(ch);
        }

        for ch in t.chars() {
            if ch == '#' {
                t_vec.pop();
                continue;
            }
            t_vec.push(ch);
        }
        s_vec == t_vec
    }
}