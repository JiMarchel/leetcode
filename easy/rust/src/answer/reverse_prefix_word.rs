// https://leetcode.com/problems/reverse-prefix-of-word/?envType=problem-list-v2&envId=stack
pub struct Solution;
impl Solution {
    pub fn reverse_prefix(word: String, ch: char) -> String {
        let mut word_list = Vec::new();
        let mut is_reversed = false;
        for ch2 in word.chars() {
            if ch2 != ch {
                word_list.push(ch2);
            }else if ch2 == ch && !is_reversed {
                word_list.push(ch2);
                word_list.reverse();
                is_reversed = true;
            }else if ch2 == ch && is_reversed {
                word_list.push(ch2);
            } 
        }

        word_list.into_iter().collect()
    }
}