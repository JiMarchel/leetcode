// https://leetcode.com/problems/minimum-string-length-after-removing-substrings/?envType=problem-list-v2&envId=stack
pub struct Solution;
impl Solution {
    pub fn min_length(s: String) -> i32 {
        let mut res = vec![];
        for b in s.bytes() {
            match b {
                b'B' if res.last().is_some_and(|&v| v == b'A') => {
                    res.pop();
                }
                b'D' if res.last().is_some_and(|&v| v == b'C') => {
                    res.pop();
                }
                _ => res.push(b),
            }
        }
        res.len() as i32
    }
}
// impl Solution {
//     pub fn min_length(s: String) -> i32 {
//         let mut op = Vec::new();

//         for char in s.chars() {
//             op.push(char);
//             if op.len() > 1 {
//                 let first = op[op.len() - 2];
//                 let second = op[op.len() - 1];
//                 if first == 'A' && second == 'B' || first == 'C' && second == 'D' {
//                     op.pop();
//                     op.pop();
//                 }
//             }
//         }

//         op.len() as i32
//     }
// }