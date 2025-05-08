// https://leetcode.com/problems/pascals-triangle/description/?envType=problem-list-v2&envId=dynamic-programming

pub struct Solution;
impl Solution {
    pub fn generate(num_rows: i32) -> Vec<Vec<i32>> {
        if num_rows == 0 {
            return vec![];
        }
        let mut res: Vec<Vec<i32>> = Vec::new();
        res.push(vec![1]);

        for i in 1..num_rows as usize {
            let prev_res = &res[i - 1];
            let mut res_loop = vec![1];

            for j in 1..i {
                let left = prev_res[j - 1];
                let right = prev_res[j];
                res_loop.push(left + right);
            }
            res_loop.push(1);
            res.push(res_loop);
        }

        res
    }
}
