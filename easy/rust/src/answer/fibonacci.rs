use std::collections::HashMap;

pub struct Solution;
impl Solution {
    pub fn fib(n: i32) -> i32 {
        let mut hm = HashMap::new();
        Self::sub_fib(n, &mut hm)
    }

    pub fn sub_fib(n: i32, memo: &mut HashMap<i32, i32>) -> i32 {
        if n <= 1 {
            return n;
        };

        if let Some(&val) = memo.get(&n) {
            return val;
        };

        let res = Self::sub_fib(n - 1, memo) + Self::sub_fib(n - 2, memo);
        memo.insert(n, res);

        res
    }
}
