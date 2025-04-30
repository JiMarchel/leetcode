// https://leetcode.com/problems/build-an-array-with-stack-operations/description/?envType=problem-list-v2&envId=stack
pub struct Solution;
impl Solution {
    pub fn build_array(target: Vec<i32>, n: i32) -> Vec<String> {
       let mut stack = Vec::new();
       let mut operations = Vec::new();
       let mut index = 0;
       
       for num in 1..=n {
           stack.push(num);
           operations.push("Push".to_string());
           
           if index < target.len() && num == target[index] {
               index += 1; 
           } else {
               stack.pop();
               operations.push("Pop".to_string());
           }
           
           if stack == target {
               break;
           }
       }
       
       operations
   }
   }
