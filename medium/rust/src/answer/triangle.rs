// https://leetcode.com/problems/triangle/description/?envType=problem-list-v2&envId=dynamic-programming
pub struct Solution;
impl Solution {
    pub fn minimum_total(triangle: Vec<Vec<i32>>) -> i32 {
        triangle
            .into_iter()
            .rev()
            .reduce(|acc, mut curr| {
                curr.iter_mut()
                    .zip(acc.windows(2).map(|w| w[0].min(w[1])))
                    .for_each(|(p, c)| *p += c);
                curr
            })
            .unwrap()[0]
    }
}
