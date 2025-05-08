// https://leetcode.com/problems/n-th-tribonacci-number/?envType=problem-list-v2&envId=dynamic-programming
pub struct Solution;
impl Solution {
    pub fn tribonacci(n: i32) -> i32 {
        match n {
            0 => 0,
            1 | 2 => 1,
            _ => {
                let (mut a, mut b, mut c) = (0, 1, 1);
                for _ in 3..=n {
                    let next = a + b + c;
                    a = b;
                    b = c;
                    c = next;
                }
                c
            }
        }
    }
}
