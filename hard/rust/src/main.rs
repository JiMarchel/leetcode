use answer::longest_valid_parentheses::Solution;

pub mod answer;
fn main() {
    let lvp = Solution::longest_valid_parentheses("()(()".to_string());
    println!("{lvp}")
}
