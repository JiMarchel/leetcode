//https://leetcode.com/problems/maximum-repeating-substring/description/?envType=problem-list-v2&envId=dynamic-programming
pub struct Solution;
impl Solution {
    pub fn max_repeating(sequence: String, word: String) -> i32 {
        let max_k = sequence.len() / word.len();
        let mut k = 0;
        while k < max_k {
            let candidate = word.repeat(k + 1);
            if sequence.contains(&candidate) {
                k += 1;
            } else {
                break;
            }
        }
        k as i32
    }
}
