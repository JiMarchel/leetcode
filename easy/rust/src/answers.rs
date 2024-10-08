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

pub fn thousand_separator(n: i32) -> String {
    let s = n.to_string();
    let mut result = String::new();
    let len = s.len();

    for (i, c) in s.chars().enumerate() {
        if i > 0 && (len - i) % 3 == 0 {
            result.push('.');
        }
        result.push(c);
    }

    result
}

// https://leetcode.com/problems/rearrange-spaces-between-words/
pub fn reorder_spaces(text: String) -> String {
    let total_space = text.chars().filter(|&c| c == ' ').count();

    let words: Vec<&str> = text.split_whitespace().collect();
    let words_count = words.len();

    if words_count == 1 {
        return format!("{}{}", words[0], " ".repeat(total_space));
    }

    let space_between_words = total_space / (words_count - 1);
    let extra_spaces = total_space % (words_count - 1);

    let result = words.join(&" ".repeat(space_between_words));

    format!("{}{}", result, " ".repeat(extra_spaces))
}
