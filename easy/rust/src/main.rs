// use answer::reverse_prefix_word::Solution;

// use answer::make_the_string_great::Solution;

use answer::baseball_game::Solution;


pub mod answer;

fn main() {
    let s = Solution::cal_points(vec!["5".to_string(),"-2".to_string(),"4".to_string(),"C".to_string(),"D".to_string(), "9".to_string(), "+".to_string(), "+".to_string()]);
    println!("{s}");
}
