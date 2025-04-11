// https://leetcode.com/problems/implement-queue-using-stacks/
use std::collections::VecDeque;

pub struct MyQueue {
    data: VecDeque<i32>,
}

impl MyQueue {
    pub fn new() -> Self {
        Self {
            data: VecDeque::new(),
        }
    }

    pub fn push(&mut self, x: i32) {
        self.data.push_back(x);
    }

    pub fn pop(&mut self) -> i32 {
        self.data.pop_front().unwrap()
    }

    pub fn peek(&self) -> i32 {
        *self.data.front().unwrap()
    }

    pub fn empty(&self) -> bool {
        self.data.is_empty()
    }
}
