// https://leetcode.com/problems/implement-stack-using-queues/description/

pub struct MyStack {
    cap: usize,
    data: Vec<i32>,
}
/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MyStack {
    pub fn new() -> Self {
        Self {
            cap: 0,
            data: Vec::new(),
        }
    }

    pub fn push(&mut self, x: i32) {
        self.data.push(x);
        self.cap += 1;
    }

    pub fn pop(&mut self) -> i32 {
        self.cap -= 1;
        self.data.pop().unwrap()
    }

    pub fn top(&self) -> i32 {
        self.data.get(self.cap - 1).cloned().unwrap()
    }

    pub fn empty(&self) -> bool {
        if self.cap == 0 {
            return true;
        } else {
            false
        }
    }
}
