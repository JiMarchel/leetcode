//https://leetcode.com/problems/pascals-triangle-ii/?envType=problem-list-v2&envId=dynamic-programming
pub struct Solution;
impl Solution {
    pub fn get_row(row_index: i32) -> Vec<i32> {
        let mut res: Vec<Vec<i32>> = Vec::new();
        res.push(vec![1]);
        let index = row_index as usize + 1;

        for i in 1..index {
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

        res[row_index as usize].clone()
    }
}
