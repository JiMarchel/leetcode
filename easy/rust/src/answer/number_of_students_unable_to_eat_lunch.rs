// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/

use std::collections::VecDeque;

pub struct Solution;

impl Solution {
    pub fn count_students(students: Vec<i32>, sandwiches: Vec<i32>) -> i32 {
        let mut sandwich = VecDeque::from(sandwiches);
        let mut stud = VecDeque::from(students);
        let mut count = 0;

        while !sandwich.is_empty() && count < stud.len() {
            if stud.front() == sandwich.front() {
                stud.pop_front();
                sandwich.pop_front();
                count = 0;
            } else {
                let s = stud.pop_front().unwrap();
                stud.push_back(s);
                count += 1;
            }
        }

        stud.len() as i32
    }
}
// impl Solution {
//     pub fn count_students(students: Vec<i32>, sandwiches: Vec<i32>) -> i32 {
//         let mut sandwich: Vec<i32> = sandwiches;
//         sandwich.sort();
//         let mut stud = students;
//         stud.sort();

//         for (i, san) in sandwich.into_iter().enumerate() {
//             if san == stud[i] {
//                 stud.pop();
//             }
//         }

//         stud.len() as i32
//     }
// }
