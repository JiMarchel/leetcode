//https://leetcode.com/problems/min-cost-climbing-stairs/description/?envType=problem-list-v2&envId=dynamic-programming
pub struct Solution;
impl Solution {
    pub fn min_cost_climbing_stairs(cost: Vec<i32>) -> i32 {
        let mut index_cost = cost.clone();
        let len = cost.len();
        for i in 2..len {
            index_cost[i] = i32::min(index_cost[i - 1], index_cost[i - 2]) + cost[i];
        }
        i32::min(index_cost[len - 1], index_cost[len - 2])
    }
}
