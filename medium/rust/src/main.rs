use answer::design_circular_queue::MyCircularQueue;

pub mod answer;

fn main() {
    let mut my = MyCircularQueue::new(3);
    my.en_queue(1);
    my.en_queue(2);
    my.en_queue(3);
    my.en_queue(4);
    my.rear();
    my.is_full();
    my.de_queue();
    my.en_queue(4);
    my.rear();
}
