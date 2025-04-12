use std::collections::VecDeque;

// let nums = vec![1, 3, -1, -3, 5, 3, 6, 7];
pub struct Solution;
impl Solution {
    pub fn max_sliding_window(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let k = k as usize;
        let mut deq = VecDeque::new(); // Menyimpan indeks
        let mut result = Vec::new();

        for (i, &num) in nums.iter().enumerate() {
            while !deq.is_empty() && nums[*deq.back().unwrap()] <= num {
                deq.pop_back();
            }

            deq.push_back(i);

            if deq.front().unwrap() + k <= i {
                deq.pop_front();
            }

            if i >= k - 1 {
                result.push(nums[*deq.front().unwrap()]);
            }
        }

        result
    }
}
