struct Solution;
impl Solution {
    pub fn par_match(open: char, close: char) -> bool {
        let op = "({[";
        let cl = ")}]";

        op.find(open) == cl.find(close)
    }

    pub fn is_valid(s: String) -> bool {
        let char_list: Vec<char> = s.chars().collect();

        let mut index = 0;
        let mut balance = true;
        let mut stack = Vec::new();

        while index < char_list.len() && balance {
            let c = char_list[index];

            if c == '(' || c == '{' || c == '[' {
                stack.push(c);
            } else {
                if stack.is_empty() {
                    balance = false;
                } else {
                    let top = stack.pop().unwrap();
                    if !Solution::par_match(top, c) {
                        balance = false;
                    }
                }
            }

            index += 1;
        }

        stack.is_empty() && balance
    }
}
