use answer::reverse_prefix_word::Solution;


pub mod answer;

fn main() {
    let s = Solution::reverse_prefix("abcdefd".to_string(), 'd');
    println!("{s}");
}
