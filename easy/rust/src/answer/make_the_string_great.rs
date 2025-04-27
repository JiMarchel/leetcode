//https://leetcode.com/problems/make-the-string-great/description/?envType=problem-list-v2&envId=stack
pub struct Solution;
impl Solution {
    pub fn make_good(s: String) -> String {
        let mut str: Vec<char> = Vec::new();

        for char in s.chars() {
            if !str.is_empty() && str.last().unwrap().is_uppercase() && char.is_uppercase() {
                str.push(char);
            } else if !str.is_empty() && char.is_uppercase() && *str.last().unwrap().to_string().to_uppercase() == char.to_string() {
                str.pop();
            } else if !str.is_empty() && str.last().unwrap().is_uppercase() && *str.last().unwrap().to_string() == char.to_uppercase().to_string() {
                str.pop();
            } else{
                str.push(char);
            }
        }

        str.into_iter().collect()
    }
}