// https://leetcode.com/problems/baseball-game/?envType=problem-list-v2&envId=stack
pub struct Solution;
impl Solution {
    pub fn cal_points(ops: Vec<String>) -> i32 {
        let mut rec: Vec<i32> = vec![];

        for op in &ops {
            match op.as_str() {
                "+" => {
                    let n = rec.len();
                    rec.push(rec[n - 1] + rec[n - 2]);
                }
                "D" => {
                    let n = rec.len();
                    rec.push(rec[n - 1] * 2);
                }
                "C" => {
                    rec.pop();
                }
                n => {
                    rec.push(n.to_string().parse::<i32>().unwrap());
                }
            }
        }

        rec.iter().sum()
    }
}

//["5","-2","4","C","D","9","+","+"]
