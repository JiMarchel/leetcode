package main

import "fmt"

func kLengthApart(nums []int, k int) bool {
	prevOneIdx := -1

	for i, num := range nums {
		if num == 1 {
			if prevOneIdx != -1 && i-prevOneIdx-1 < k {
				return false
			}
			prevOneIdx = i
		}
	}
	return true
}

func main() {
	arr := []int{1, 0, 0, 0, 1, 0, 0, 1}
	fmt.Println(kLengthApart(arr, 2))
}

// https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/
