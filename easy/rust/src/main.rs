use answer::backspace_string_compare::Solution;



pub mod answer;

fn main() {
    let s = Solution::backspace_compare("ab##".to_string(), "c#d#".to_string());
    println!("{s}");
}
