use answer::implement_stack_using_queues::MyStack;

pub mod answer;
pub mod answers;

fn main() {
    let mut obj = MyStack::new();

    obj.push(1);
    obj.push(2);

    let ret_2 = obj.pop();
    let ret_3 = obj.top();
    let ret_4 = obj.empty();

    println!("poping data {ret_2}, top data {ret_3}, is stack empty {ret_4}")
}
