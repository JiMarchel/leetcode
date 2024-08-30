// https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/

pub fn modify_string(s: String) -> String {
    let mut chars: Vec<char> = s.chars().collect();
    let n = chars.len();

    for i in 0..n {
        if chars[i] == '?' {
            for ch in 'a'..='z' {
                if (i == 0 || chars[i - 1] != ch) && (i == n - 1 || chars[i + 1] != ch) {
                    chars[i] = ch;
                    break;
                }
            }
        }
    }
    chars.into_iter().collect()
}
