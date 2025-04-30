use answer::build_an_array_with_stack_operations::Solution;


pub mod answer;

fn main() {
    let s = Solution::build_array(vec![1,3], 3);
    println!("{s:?}");
}
