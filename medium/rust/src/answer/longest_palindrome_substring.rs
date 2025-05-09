// https://leetcode.com/problems/longest-palindromic-substring/description/?envType=problem-list-v2&envId=dynamic-programming
pub struct Solution;
impl Solution {
    pub fn longest_palindrome(s: String) -> String {
        if s == "".to_string() {
            return s;
        }
        let s: Vec<char> = s.chars().collect();
        let mut start = 0;
        let mut end = 0;

        for i in 0..s.len() {
            let mut left = i;
            let mut right = i;

            while right < s.len() && s[right + 1] == s[left] {
                right += 1;
            }

            while right < s.len() && left > 0 && s[right + 1] == s[left - 1] {
                right += 1;
                left -= 1;
            }

            if right - left > end - start {
                start = left;
                end = right;
            }
        }

        s[start..=end].into_iter().collect()
    }
}
