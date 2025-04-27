// https://leetcode.com/problems/design-circular-queue/

pub struct MyCircularQueue {
    buf: Vec<i32>,
    front: usize,
    len: usize,
}

impl MyCircularQueue {
    pub fn new(k: i32) -> Self {
        Self {
            buf: vec![0; k as usize],
            front: 0,
            len: 0,
        }
    }

    pub fn en_queue(&mut self, value: i32) -> bool {
        if self.is_full() {
            false
        } else {
            let cap = self.buf.len();
            self.len += 1;
            self.buf[(self.front + self.len - 1) % cap] = value;
            true
        }
    }

    pub fn de_queue(&mut self) -> bool {
        if self.is_empty() {
            false
        } else {
            self.len -= 1;
            self.front = (self.front + 1) % self.buf.len();
            true
        }
    }

    pub fn front(&self) -> i32 {
        if self.is_empty() {
            -1
        } else {
            self.buf[self.front]
        }
    }

    pub fn rear(&self) -> i32 {
        if self.is_empty() {
            -1
        } else {
            self.buf[(self.front + self.len - 1) % self.buf.len()]
        }
    }

    pub fn is_empty(&self) -> bool {
        self.len == 0
    }

    pub fn is_full(&self) -> bool {
        self.buf.len() == self.len
    }
}
