use answer::clear_digits::Solution;

pub mod answer;
pub mod answers;

fn main() {
    let s = Solution::clear_digits("cb34".to_owned());
    println!("{s}")
}
