use answer::{
    implement_stack_using_queues::MyStack, number_of_students_unable_to_eat_lunch::Solution,
};

pub mod answer;
pub mod answers;

fn main() {
    let tes = Solution::count_students(vec![1, 1, 0, 0], vec![0, 1, 0, 1]);
    println!("{tes}")
}
