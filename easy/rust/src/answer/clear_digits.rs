// https://leetcode.com/problems/clear-digits/description/?envType=problem-list-v2&envId=stack
pub struct Solution;
impl Solution {
    pub fn clear_digits(s: String) -> String {
        let mut char_list: Vec<char> = s.chars().collect();

        let mut index = 0;

        while index < char_list.len() {
            if let Some(num) = char_list[index].to_digit(10) {
                if num <= 9 {
                    char_list.remove(index);
                    char_list.remove(index - 1);
                    index = 0;
                }
            }

            index += 1;
        }

        char_list.into_iter().collect()
    }
}
