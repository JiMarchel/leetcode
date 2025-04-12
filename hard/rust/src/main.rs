use answer::sliding_window_maximum::Solution;

pub mod answer;
fn main() {
    let nums = vec![1, 3, -1, -3, 5, 3, 6, 7];
    let s = Solution::max_sliding_window(nums, 3);
    println!("{s:?}");
}
